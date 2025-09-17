// 运行 node src/websocket-server.js
const WebSocket = require('ws')
const http = require('http')

// 模拟AI问答处理函数
function processAIQuestion(question) {
  // 这里应该调用实际的AI模型API
  // 示例中使用简单规则匹配
  const responses = {
    '你好': '你好！我是AI助手，有什么可以帮助你的吗？',
    '天气': '今天天气晴朗，温度适宜。',
    '时间': `现在是${new Date().toLocaleString()}`,
    '默认': '我已经收到你的问题，正在思考中...'
  }
  
  for (const [key, value] of Object.entries(responses)) {
    if (question.includes(key)) {
      return value
    }
  }
  
  return responses['默认']
}

// 创建HTTP服务器
const server = http.createServer()

// 创建WebSocket服务器
const wss = new WebSocket.Server({ server })

wss.on('connection', (ws) => {
  console.log('新客户端已连接')
  
  ws.on('message', (message) => {
    try {
      const question = JSON.parse(message)
      console.log('收到问题:', question.content)
      
      // 模拟AI处理延迟
      setTimeout(() => {
        const answer = processAIQuestion(question.content)
        ws.send(JSON.stringify({
          type: 'answer',
          answer: answer,
          timestamp: new Date().toISOString()
        }))
      }, 1000)
    } catch (error) {
      console.error('消息解析错误:', error)
      ws.send(JSON.stringify({
        type: 'error',
        message: '消息格式错误'
      }))
    }
  })
  
  ws.on('close', () => {
    console.log('客户端已断开连接')
  })
})

const PORT = 8181
server.listen(PORT, () => {
  console.log(`WebSocket服务器运行在端口 ${PORT}`)
})
