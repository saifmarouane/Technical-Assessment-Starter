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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GptAiApiController = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const gpt_ai_api_service_1 = require("./gpt_ai_api.service");
let GptAiApiController = class GptAiApiController {
    constructor(chatGPTService) {
        this.chatGPTService = chatGPTService;
    }
    generateResponse(prompt) {
        return this.chatGPTService
            .generateResponse(prompt)
            .pipe((0, operators_1.map)((response) => response.data.choices[0].text.trim()));
    }
};
exports.GptAiApiController = GptAiApiController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('prompt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GptAiApiController.prototype, "generateResponse", null);
exports.GptAiApiController = GptAiApiController = __decorate([
    (0, common_1.Controller)('chatgpt'),
    (0, common_1.Controller)('gpt-ai-api'),
    __metadata("design:paramtypes", [gpt_ai_api_service_1.GptAiApiService])
], GptAiApiController);
//# sourceMappingURL=gpt_ai_api.controller.js.map