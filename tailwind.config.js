module.exports = {
    content: [
        './popup.html', // 掃描 popup.html 中的 Tailwind 類
        './*.{html,js}' // 可根據需要添加其他文件
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}