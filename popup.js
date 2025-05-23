// popup.js
document.getElementById('clickMe').addEventListener('click', () => {
    // 向當前標籤頁的 content.js 發送消息
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'fillAndSubmitForm' }, (response) => {
            if (chrome.runtime.lastError) {
                console.error('error:', chrome.runtime.lastError.message);
                alert('Should Be Google Forms');
            } else {
                console.log('get response:', response);
                alert('Complete');
            }
        });
    });
});