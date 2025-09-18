<!-- ✨ [新建] d:/前端代码/学习笔记/Workspaces/vue2/src/components/WebSocketChat.vue -->
<template>
  <div class="chat-container">
    <div class="chat-history">
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="messageClass(message)"
      >
        <div>{{ message.content }}</div>
        <!-- <span> {{ message.content }}</span> -->
      </div>
    </div>
    <div class="input-area">
      <input
        v-model="userInput"
        @keyup.enter="sendMessage"
        placeholder="请输入问题..."
      />
      <button @click="sendMessage">发送</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebSocketChat",
  data() {
    return {
      ws: null,
      userInput: "",
      messages: [],
    };
  },
  mounted() {
    this.initWebSocket();
  },
  beforeDestroy() {
    if (this.ws) {
      this.ws.close();
    }
  },
  methods: {
    initWebSocket() {
      // 连接到后端WebSocket服务
      this.ws = new WebSocket("ws://localhost:8181/ai-chat");

      this.ws.onopen = () => {
        console.log("WebSocket连接已建立");
      };

      this.ws.onmessage = (event) => {
        console.log("收到服务器消息:", event.data);
        const response = JSON.parse(event.data);
        this.messages.push({ type: response.type, content: response.chunk });
      };

      this.ws.onerror = (error) => {
        console.error("WebSocket错误1:", error);
      };

      this.ws.onclose = () => {
        console.log("WebSocket连接已关闭");
      };
    },

    sendMessage() {
      if (
        !this.userInput.trim() ||
        !this.ws ||
        this.ws.readyState !== WebSocket.OPEN
      ) {
        return;
      }

      const question = {
        type: "question",
        content: this.userInput,
        timestamp: new Date().toISOString(),
      };

      this.ws.send(JSON.stringify(question));
      this.messages.push({ type: "user", content: this.userInput });
      this.userInput = "";
    },

    messageClass(message) {
      return {
        "user-message": message.type === "user",
        "ai-message": message.type === "ai",
        "system-message": message.type === "system",
      };
    },
  },
};
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
}

.chat-history {
  flex: 1;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

.user-message {
  text-align: right;
  color: blue;
  margin: 5px 0;
}

.ai-message {
  text-align: left;
  color: green;
  margin: 5px 0;
}

.system-message {
  text-align: center;
  color: gray;
  font-style: italic;
  margin: 5px 0;
}

.input-area {
  display: flex;
}

.input-area input {
  flex: 1;
  padding: 10px;
  margin-right: 10px;
}

.input-area button {
  padding: 10px 20px;
}
</style>
