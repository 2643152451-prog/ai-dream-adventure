// game.js

// 获取页面元素
const userInput = document.getElementById('userInput');
const storyContainer = document.getElementById('storyContainer');

// 模拟 AI 回应（实际应调用 DeepSeek API）
function getAIResponse(prompt) {
    // 简单模拟回复
    const responses = [
        "我感受到一股神秘的力量在召唤...",
        "梦境中出现了古老的符号...",
        "你听到了远处传来的低语...",
        "前方有一扇门，通往未知的世界..."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

// 发送消息
function sendMessage() {
    const inputText = userInput.value.trim();
    if (!inputText) return;

    // 添加用户消息
    addMessage(inputText, 'user');

    // 清空输入框
    userInput.value = '';

    // 模拟 AI 响应（延迟）
    setTimeout(() => {
        const aiResponse = getAIResponse(inputText);
        addMessage(aiResponse, 'ai');
    }, 500);
}

// 添加消息到故事容器
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatar.textContent = sender === 'ai' ? '🤖' : '👤';

    const content = document.createElement('div');
    content.className = 'content';
    content.textContent = text;

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    storyContainer.appendChild(messageDiv);

    // 滚动到底部
    storyContainer.scrollTop = storyContainer.scrollHeight;
}
