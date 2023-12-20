"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nonStreamingModel = exports.streamingModel = void 0;
const openai_1 = require("langchain/chat_models/openai");
exports.streamingModel = new openai_1.ChatOpenAI({
    modelName: "gpt-3.5-turbo",
    streaming: true,
    verbose: true,
    temperature: 0,
});
exports.nonStreamingModel = new openai_1.ChatOpenAI({
    modelName: "gpt-3.5-turbo",
    verbose: true,
    temperature: 0,
});
//# sourceMappingURL=llm.js.map