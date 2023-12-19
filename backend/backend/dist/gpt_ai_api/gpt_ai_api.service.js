"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GptAiApiService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const openai_1 = require("openai");
let GptAiApiService = class GptAiApiService {
    constructor(httpService) {
        this.httpService = httpService;
        this.openaiInstance = new openai_1.OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
        this.apiKey = process.env.OPENAI_API_KEY;
        this.apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';
    }
    async generateText(prompt) {
        try {
            const response = await this.openaiInstance.completions.create({
                model: 'text-davinci-002',
                prompt,
                max_tokens: 150,
            });
            return response.choices[0].text.trim();
        }
        catch (error) {
            console.error('Error generating text:', error);
            throw error;
        }
    }
    extractTextFromChoices(data) {
        const choice = data.choices && data.choices[0];
        return choice ? choice.text.trim() : '';
    }
};
exports.GptAiApiService = GptAiApiService;
exports.GptAiApiService = GptAiApiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], GptAiApiService);
//# sourceMappingURL=gpt_ai_api.service.js.map