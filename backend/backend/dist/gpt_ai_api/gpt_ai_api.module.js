"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GptAiApiModule = void 0;
const common_1 = require("@nestjs/common");
const gpt_ai_api_service_1 = require("./gpt_ai_api.service");
const gpt_ai_api_controller_1 = require("./gpt_ai_api.controller");
const axios_1 = require("@nestjs/axios");
let GptAiApiModule = class GptAiApiModule {
};
exports.GptAiApiModule = GptAiApiModule;
exports.GptAiApiModule = GptAiApiModule = __decorate([
    (0, common_1.Module)({
        providers: [gpt_ai_api_service_1.GptAiApiService],
        imports: [axios_1.HttpModule],
        controllers: [gpt_ai_api_controller_1.GptAiApiController],
        exports: [gpt_ai_api_service_1.GptAiApiService],
    })
], GptAiApiModule);
//# sourceMappingURL=gpt_ai_api.module.js.map