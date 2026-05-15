/ game.js

// 获取页面元素
const apiKeyInput = document.getElementById('apiKey');
const submitButton = document.getElementById('submitApiKey');
const messageBox = document.getElementById('message');

// 检查 API Key 是否有效
function validateApiKey(apiKey) {
    // 这里可以添加您的 API Key 验证逻辑
    // 例如，检查 API Key 是否在白名单中
    const validKeys = ['your-valid-api-key-1', 'your-valid-api-key-2'];
    return validKeys.includes(apiKey);
}

// 处理提交按钮点击事件
submitButton.addEventListener('click', function() {
    const apiKey = apiKeyInput.value.trim();
    
    if (apiKey === '') {
        showMessage('请输入 API Key', 'error');
        return;
    }
    
    if (validateApiKey(apiKey)) {
        showMessage('API Key 验证成功！', 'success');
        // 这里可以添加游戏开始的逻辑
        startGame();
    } else {
        showMessage('无效的 API Key,请检查后重试', 'error');
    }
});

// 显示消息
function showMessage(text, type) {
    messageBox.textContent = text;
    messageBox.className = `message ${type}`;
}

// 开始游戏
function startGame() {
    // 这里可以添加游戏开始的逻辑
    // 例如，隐藏 API Key 输入框，显示游戏界面等
    console.log('游戏开始！');
}
