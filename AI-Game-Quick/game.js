// 游戏状态
let gameState = 
{
    apiKey: null,
    conversation: [],
    turnCount: 0,
    isProcessing: false
};

// 保存API Key
function saveApiKey() 
{
    const key = document.getElementById('apiKey').value.trim();
    
    if (!key) {
        alert('请输入API Key');
        return;
    }
    
    if (!key.startsWith('sk-')) {
        alert('API Key应以"sk-"开头，请检查是否正确');
        return;}
    }