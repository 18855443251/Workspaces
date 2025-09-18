<template>
  <div class="chat-container">
    <div class="chat-messages" ref="chatMessages">
      <!-- 消息列表 -->
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="[
          'message',
          message.role === 'user' ? 'user-message' : 'assistant-message',
        ]"
      >
        <!-- 头部上半部分 -->
        <div
          style="display: flex; align-items: center"
          :style="message.role === 'user' ? 'flex-direction: row-reverse;' : ''"
        >
          <!-- 头像 -->
          <img
            :src="
              message.role === 'user'
                ? require('@/assets/img/user.png')
                : require('@/assets/img/assistant.png')
            "
            :alt="message.role === 'user' ? '用户图标' : '助手图标'"
            class="message-icon"
          />
          <!-- 对应的时间 -->
          <div class="message-time">
            {{ message.time }}
          </div>
        </div>
        <!-- 提问内容 -->
        <div class="message-content-wrapper">
          <div class="message-content">
            <div class="message-text">{{ message.content }}</div>
            <!-- 流式消息加载指示器 -->
            <div
              v-if="message.role === 'ai' && message.loading"
              class="loading-indicator"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <!-- 助手消息操作按钮 -->
            <div
              v-if="message.role === 'ai' && !message.loading"
              class="message-actions"
            >
              <div
                class="action-button"
                @click="likeMessage(index)"
                :class="{ active: message.liked }"
              >
                <img
                  :src="
                    message.liked
                      ? require('@/assets/img/zanx.png')
                      : require('@/assets/img/zan.png')
                  "
                  class="message-icon"
                />
              </div>
              <div
                class="action-button"
                @click="dislikeMessage(index)"
                :class="{ active: message.disliked }"
              >
                <img
                  :src="
                    message.disliked
                      ? require('@/assets/img/caix.png')
                      : require('@/assets/img/cai.png')
                  "
                  class="message-icon"
                />
              </div>
              <div class="action_button" @click="copyMessage(message.content)">
                <img
                  src="@/assets/img/copy.png"
                  alt="图片加载失败"
                  class="message-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="chat-input-container">
      <div class="input-wrapper">
        <textarea
          v-model="inputMessage"
          @keyup.enter.exact="sendMessage"
          @input="resizeTextarea"
          placeholder="请简要、清晰地描述单个场景的问题，字数不超过500个。"
          class="chat-textarea"
          ref="textarea"
        ></textarea>
        <img
          v-if="!isReceiving"
          src="@/assets/img/send.png"
          alt="图片加载失败"
          class="send-icon"
          @click="sendMessage"
        />
        <img
          v-else
          src="@/assets/img/stop.png"
          alt="图片加载失败"
          class="stop-icon"
          @click="stopGeneration"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebSocketChat",
  data() {
    return {
      inputMessage: "", //提问消息
      messages: [], //消息列表
      websocket: null,
      websocketUrl: "ws://localhost:8181/ai-chat", // 替换为实际的WebSocket地址
      currentAssistantMessageIndex: -1, // 当前正在接收的助手消息索引
      isReceiving: false, // 是否正在接收消息
      messageId: null, // 当前消息IDs
      reconnectInterval: null, // 重连定时器
      reconnectAttempts: 0, // 重连尝试次数
      maxReconnectAttempts: 5, // 最大重连尝试次数
      typingTimer: null, // 打字效果定时器
    };
  },
  mounted() {
    // 组件挂载后确保滚动到底部
    this.scrollToBottom();
    // 初始化WebSocket连接
    this.initWebSocket();
  },
  methods: {
    // 初始化WebSocket连接
    initWebSocket() {
      if (this.websocket) {
        this.websocket.close();
      }

      try {
        this.websocket = new WebSocket(this.websocketUrl);

        this.websocket.onopen = () => {
          console.log("WebSocket连接已建立");
          this.reconnectAttempts = 0; // 重置重连次数
        };

        this.websocket.onmessage = (event) => {
          // 处理流式消息
          this.handleStreamingMessage(event.data);
        };

        this.websocket.onerror = (error) => {
          console.error("WebSocket错误:", error);
          this.resetLoadingState();
          this.attemptReconnect();
        };

        this.websocket.onclose = () => {
          console.log("WebSocket连接已关闭");
          this.resetLoadingState();
          this.attemptReconnect();
        };
      } catch (e) {
        console.error("WebSocket初始化失败:", e);
        this.attemptReconnect();
      }
    },

    // 尝试重连
    attemptReconnect() {
      if (this.reconnectAttempts < this.maxReconnectAttempts) {
        this.reconnectAttempts++;
        console.log(
          `尝试重连 (${this.reconnectAttempts}/${this.maxReconnectAttempts})`
        );

        // 清除之前的重连定时器
        if (this.reconnectInterval) {
          clearTimeout(this.reconnectInterval);
        }

        // 设置重连延迟（指数退避）
        const delay = Math.min(1000 * 2 ** this.reconnectAttempts, 10000);
        this.reconnectInterval = setTimeout(() => {
          this.initWebSocket();
        }, delay);
      } else {
        console.error("达到最大重连尝试次数");
        this.myToast("连接失败，请检查网络");
      }
    },

    // 处理流式消息
    handleStreamingMessage(data) {
      try {
        const response = JSON.parse(data);
        console.log("接收到流式消息:", response);

        if (response.type === "stream_start") {
          // 开始流式传输
          const newMessage = {
            role: "ai",
            content: "",
            time: this.formatDateTime(new Date()),
            loading: true,
            liked: false,
            disliked: false,
          };
          this.messages.push(newMessage);
          this.currentAssistantMessageIndex = this.messages.length - 1;
          console.log(
            "开始流式传输",
            this.currentAssistantMessageIndex,
            this.messages[this.currentAssistantMessageIndex].content
          );
          this.isReceiving = true;
          this.messageId = response.messageId; // 保存消息ID
        } else if (response.type === "stream_chunk") {
          // 流式数据传输中
          if (this.isValidMessageIndex(this.currentAssistantMessageIndex)) {
            this.messages[this.currentAssistantMessageIndex].content +=
              response.content;
            console.log(
              "流式传输中",
              this.currentAssistantMessageIndex,
              this.messages[this.currentAssistantMessageIndex].content
            );
            // 滚动到最新消息
            this.$nextTick(() => {
              this.scrollToBottom();
            });
          }
        } else if (response.type === "stream_end") {
          // 流式传输结束
          if (this.isValidMessageIndex(this.currentAssistantMessageIndex)) {
            this.messages[this.currentAssistantMessageIndex].loading = false;
          }
          this.resetAssistantMessageState();
          console.log(
            "流式传输结束",
            this.currentAssistantMessageIndex,
            this.messages[this.currentAssistantMessageIndex]?.content
          );
          // 最后滚动一次确保显示完整内容
          this.$nextTick(() => {
            this.scrollToBottom();
          });
        } else if (response.type === "stream_error") {
          // 流式传输错误
          if (this.isValidMessageIndex(this.currentAssistantMessageIndex)) {
            this.messages[this.currentAssistantMessageIndex].content +=
              "\n[错误]" + (response.message || "未知错误");
            this.messages[this.currentAssistantMessageIndex].loading = false;
          }
          this.resetAssistantMessageState();
          this.$nextTick(() => {
            this.scrollToBottom();
          });
        }
      } catch (e) {
        // 如果不是JSON格式，可能是纯文本流式数据
        if (this.isValidMessageIndex(this.currentAssistantMessageIndex)) {
          this.messages[this.currentAssistantMessageIndex].content += data;
          // 滚动到最新消息
          this.$nextTick(() => {
            this.scrollToBottom();
          });
        }
      }
    },

    // 验证消息索引是否有效
    isValidMessageIndex(index) {
      return index >= 0 && index < this.messages.length;
    },

    // 重置助手消息状态
    resetAssistantMessageState() {
      this.currentAssistantMessageIndex = -1;
      this.isReceiving = false;
      this.messageId = null;
    },

    // 重置加载状态
    resetLoadingState() {
      if (this.isValidMessageIndex(this.currentAssistantMessageIndex)) {
        this.messages[this.currentAssistantMessageIndex].loading = false;
      }
      this.resetAssistantMessageState();
    },

    sendMessage() {
      console.log(
        "用户发送消息:",
        this.websocket,
        this.websocket.readyState,
        WebSocket.OPEN
      );

      if (!this.inputMessage.trim()) {
        this.myToast("请输入消息");
        return;
      }

      if (
        this.isReceiving ||
        !this.websocket ||
        this.websocket.readyState !== WebSocket.OPEN
      ) {
        if (!this.websocket || this.websocket.readyState !== WebSocket.OPEN) {
          this.myToast("连接未建立，请稍后重试");
        }
        return;
      }

      // 添加用户消息到本地显示
      const userMessage = {
        role: "user",
        content: this.inputMessage,
        time: this.formatDateTime(new Date()),
      };

      this.messages.push(userMessage);

      // 通过WebSocket发送消息
      if (this.websocket && this.websocket.readyState === WebSocket.OPEN) {
        const messageData = {
          type: "user_message",
          content: this.inputMessage,
          timestamp: new Date().toISOString(),
        };

        this.websocket.send(JSON.stringify(messageData));
      } else {
        console.warn("WebSocket未连接，无法发送消息");
        this.myToast("消息发送失败，请检查连接");
      }

      // 清空输入框
      this.inputMessage = "";

      // 重置textarea高度
      this.$nextTick(() => {
        if (this.$refs.textarea) {
          this.$refs.textarea.style.height = "auto";
        }
      });

      // 滚动到最新消息
      this.$nextTick(() => {
        this.scrollToBottom();
      });
    },

    // 停止生成
    stopGeneration() {
      if (
        !this.isReceiving ||
        !this.websocket ||
        this.websocket.readyState !== WebSocket.OPEN
      )
        return;

      const stopData = {
        type: "stop_generation",
        messageId: this.messageId,
      };

      this.websocket.send(JSON.stringify(stopData));

      // 立即停止本地加载状态
      if (this.isValidMessageIndex(this.currentAssistantMessageIndex)) {
        this.messages[this.currentAssistantMessageIndex].loading = false;
      }
      this.resetAssistantMessageState();
    },

    // 点赞消息
    likeMessage(index) {
      if (!this.isValidMessageIndex(index)) return;

      this.messages[index].liked = !this.messages[index].liked;
      if (this.messages[index].liked) {
        this.messages[index].disliked = false;
      }
    },

    // 踩消息
    dislikeMessage(index) {
      if (!this.isValidMessageIndex(index)) return;
      this.messages[index].disliked = !this.messages[index].disliked;
      if (this.messages[index].disliked) {
        this.messages[index].liked = false;
      }
    },

    // 复制消息内容
    copyMessage(content) {
      try {
        // 使用现代Clipboard API（如果支持）
        if (navigator.clipboard) {
          navigator.clipboard
            .writeText(content)
            .then(() => {
              this.myToast("复制成功");
            })
            .catch(() => {
              this.fallbackCopyTextToClipboard(content);
            });
        } else {
          this.fallbackCopyTextToClipboard(content);
        }
      } catch (err) {
        console.error("复制失败:", err);
        this.myToast("复制失败");
      }
    },

    // 降级复制方法
    fallbackCopyTextToClipboard(text) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();

      try {
        const successful = document.execCommand("copy");
        if (successful) {
          this.myToast("复制成功");
        } else {
          this.myToast("复制失败");
        }
      } catch (err) {
        this.myToast("复制失败");
      }

      document.body.removeChild(textarea);
    },

    scrollToBottom() {
      const container = this.$refs.chatMessages;
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    },

    formatDateTime(date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds().toString().padStart(2, "0");
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },

    // 调整textarea高度
    resizeTextarea() {
      const textarea = this.$refs.textarea;
      if (textarea) {
        textarea.style.height = "auto";
        textarea.style.height = Math.min(textarea.scrollHeight, 200) + "px";
      }
    },
  },

  beforeDestroy() {
    // 组件销毁前关闭WebSocket连接
    if (this.websocket) {
      this.websocket.close();
    }

    // 清理定时器
    if (this.reconnectInterval) {
      clearTimeout(this.reconnectInterval);
    }

    if (this.typingTimer) {
      clearTimeout(this.typingTimer);
    }
  },
};
</script>

<style scoped>
.chart-header {
  display: flex;
  align-items: center;
  background: #f5f5f5;
  justify-content: center;
  height: 0.88rem;
  border-bottom: 1px solid #e0e0e0;
  position: relative;
}

.back {
  position: absolute;
  width: 0.2rem;
  left: 0.32rem;
  top: 0.3rem;
}

.chat-container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 2.88rem);
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 0.3rem;
  background-color: #f5f5f5;
  scroll-behavior: smooth;
}

.message {
  margin-bottom: 0.3rem;
}

.user-message {
  flex-direction: column;
  align-items: flex-end;
}

.message-content-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 0.1rem;
}

.user-message .message-content-wrapper {
  margin-right: 0.2rem;
  align-items: flex-end;
}

.assistant-message .message-content-wrapper {
  margin-left: 0.2rem;
}

.message-icon {
  width: 0.72rem;
  height: 0.72rem;
  border-radius: 50%;
}

.message-content {
  padding: 0.2rem 0.3rem;
  border-radius: 0.32rem;
  max-width: 70%;
  min-width: 0.8rem;
}

.user-message .message-content {
  background-color: #e6edfe;
  color: #333;
  border: 1px solid #becefe;
  border-top-right-radius: 0.8rem;
}

.assistant-message .message-content {
  background-color: #ffffff;
  color: #333;
  border: 1px solid #e0e0e0;
  border-top-left-radius: 0.8rem;
}

.message-text {
  word-wrap: break-word;
}

.message-time {
  font-size: 0.28rem;
  color: #999;
  margin-top: 0.1rem;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
}

.loading-indicator {
  display: flex;
  align-items: center;
  margin-top: 0.1rem;
  padding: 0.1rem 0;
}

.loading-indicator span {
  width: 0.16rem;
  height: 0.16rem;
  background-color: #999;
  border-radius: 50%;
  margin-right: 0.1rem;
  animation: blink 1.4s infinite both;
}

.loading-indicator span:nth-child(2) {
  animation-delay: 0.2s;
}

.loading-indicator span:nth-child(3) {
  animation-delay: 0.4s;
  margin-right: 0;
}

@keyframes blink {
  0%,
  100% {
    opacity: 0.2;
  }

  50% {
    opacity: 1;
  }
}

.user-message .message-time {
  text-align: right;
}

.assistant-message .message-time {
  text-align: left;
}

.chat-input-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.2rem;
  background-color: #f5f5f5;
  border-top: 1px solid #e0e0e0;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: flex-end;
}

.chat-textarea {
  flex: 1;
  padding: 0.2rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.08rem;
  outline: none;
  resize: none;
  min-height: 2rem;
  max-height: 4rem;
  font-family: inherit;
  font-size: 0.28rem;
  line-height: 1.4;
  overflow-y: auto;
}

.send-icon,
.stop-icon {
  position: absolute;
  right: 0.2rem;
  bottom: 0.2rem;
  cursor: pointer;
  width: 0.6rem;
  height: 0.6rem;
}

.send-icon:hover {
  color: #2561fb;
}

.message-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 0.16rem;
  gap: 0.2rem;
}

.action-button {
  width: 0.48rem;
  height: 0.48rem;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #666;
}

.action-button:hover {
  background-color: #e0e0e0;
  transform: scale(1.1);
}

.action-button.active {
  color: white;
}
</style>