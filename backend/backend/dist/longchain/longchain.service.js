"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.longchainService = void 0;
const common_1 = require("@nestjs/common");
const langchain_1 = require("../lib/langchain");
let longchainService = class longchainService {
    formatMessage(message) {
        return `${message.role === "user" ? "Human" : "Assistant"}: ${message.content}`;
    }
    async processMessages(messages) {
        const formattedPreviousMessages = messages.slice(0, -1).map(this.formatMessage);
        const question = messages[messages.length - 1].content;
        if (!question) {
            throw new Error("No question in the request");
        }
        const response = await (0, langchain_1.callChain)({
            question,
            chatHistory: formattedPreviousMessages.join("\n"),
        });
        return response;
    }
};
exports.longchainService = longchainService;
exports.longchainService = longchainService = __decorate([
    (0, common_1.Injectable)()
], longchainService);
//# sourceMappingURL=longchain.service.js.map