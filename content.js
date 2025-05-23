// content.js
(function () {
    function fillAndSubmitForm() {
        // 找到表單元素
        const form = document.querySelector('form');
        if (!form) {
            console.log('No form found on this page.');
            return;
        }

        // 示例：填寫表單欄位
        // Google 表單的輸入框通常有特定的 class 或結構，需檢查實際表單
        const inputs = document.querySelectorAll('input[type="text"][tabindex="0"], textarea');
        inputs.forEach((input, index) => {
            let inputValue;
            if (index === 0) inputValue = 'Rick'; // 示例：第一個欄位填姓名

            if (inputValue) {
                // 清空現有值
                input.value = '';

                // 設置新值
                input.value = inputValue;

                // 模擬輸入事件
                const inputEvent = new Event('input', {bubbles: true});
                input.dispatchEvent(inputEvent);

                // 模擬 change 事件
                const changeEvent = new Event('change', {bubbles: true});
                input.dispatchEvent(changeEvent);

                // 模擬鍵盤事件（可選）
                input.dispatchEvent(new KeyboardEvent('keydown', {bubbles: true}));
                input.dispatchEvent(new KeyboardEvent('keyup', {bubbles: true}));

                console.log(`已填入 ${inputValue} 到輸入框 ${index + 1}`);
            }
        });

        // 示例：選擇單選框（假設第一個選項）
        const radioButtons1 = document.querySelector('div[id="i11"][aria-label="美式"][role="radio"]');
        if (radioButtons1 != null) {
            // 創建並分派點擊事件
            const clickEvent = new Event('click', { bubbles: true });
            radioButtons1.dispatchEvent(clickEvent);

            // 確保 aria-checked 狀態改變
            radioButtons1.setAttribute('aria-checked', 'true');
        }

        const radioButtons2 = document.querySelector('div[id="i40"][aria-label="冰的"][role="radio"]');
        if (radioButtons2 != null) {
            // 創建並分派點擊事件
            const clickEvent = new Event('click', { bubbles: true });
            radioButtons2.dispatchEvent(clickEvent);

            // 確保 aria-checked 狀態改變
            radioButtons2.setAttribute('aria-checked', 'true');
        }

        const radioButtons3 = document.querySelector('div[id="i51"][aria-label="酸"][role="radio"]');
        if (radioButtons3 != null) {
            // 創建並分派點擊事件
            const clickEvent = new Event('click', { bubbles: true });
            radioButtons3.dispatchEvent(clickEvent);

            // 確保 aria-checked 狀態改變
            radioButtons3.setAttribute('aria-checked', 'true');
        }

        // 模擬提交表單
        const submitButton = document.querySelector('div[role="button"][aria-label*="Submit"], div[role="button"][aria-label*="提交"]');
        if (submitButton) {
            // setTimeout(() => {
            //     submitButton.click();
            //     console.log('Form submitted!');
            // }, 1000); // 延遲1秒確保填寫完成
            console.log('Form submitted!');
        } else {
            console.log('Submit button not found.');
        }
    }


// 監聽來自 popup.js 的消息
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.action === 'fillAndSubmitForm') {
            const response = fillAndSubmitForm();
            sendResponse(response);
        }
    });

})();

