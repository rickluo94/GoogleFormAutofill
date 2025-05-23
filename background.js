// 后台脚本，监听消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "button_clicked") {
        console.log("Button was clicked!");
    }
});