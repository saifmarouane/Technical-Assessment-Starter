"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSources = exports.initialMessages = exports.formattedText = exports.formatChatHistory = exports.delay = exports.cn = void 0;
const clsx_1 = require("clsx");
const tailwind_merge_1 = require("tailwind-merge");
function cn(...inputs) {
    return (0, tailwind_merge_1.twMerge)((0, clsx_1.clsx)(inputs));
}
exports.cn = cn;
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
exports.delay = delay;
const formatChatHistory = (chatHistory) => {
    const formattedDialogueTurns = chatHistory.map((dialogueTurn) => `Human: ${dialogueTurn[0]}\nAssistant: ${dialogueTurn[1]}`);
    return formattedDialogueTurns.join("\n");
};
exports.formatChatHistory = formatChatHistory;
function formattedText(inputText) {
    return inputText
        .replace(/\n+/g, " ")
        .replace(/(\w) - (\w)/g, "$1$2")
        .replace(/\s+/g, " ");
}
exports.formattedText = formattedText;
exports.initialMessages = [
    {
        role: "assistant",
        id: "0",
        content: "Hi! I am your PDF assistant. I am happy to help with your questions about your PDF about German law.",
    },
];
const getSources = (data, role, index) => {
    if (role === "assistant" && index >= 2 && (index - 2) % 2 === 0) {
        const sourcesIndex = (index - 2) / 2;
        if (data[sourcesIndex] && data[sourcesIndex].sources) {
            return data[sourcesIndex].sources;
        }
    }
    return [];
};
exports.getSources = getSources;
//# sourceMappingURL=utils.js.map