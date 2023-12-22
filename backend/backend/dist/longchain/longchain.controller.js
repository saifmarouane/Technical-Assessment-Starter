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
exports.longchainController = void 0;
const common_1 = require("@nestjs/common");
const longchain_service_1 = require("./longchain.service");
let longchainController = class longchainController {
    constructor(testlongchainService) {
        this.testlongchainService = testlongchainService;
    }
    async processChatMessages(messages) {
        try {
            const response = await this.testlongchainService.processMessages(messages);
            return response;
        }
        catch (error) {
            throw new Error(`Erreur lors du traitement du message: ${error.message}`);
        }
    }
};
exports.longchainController = longchainController;
__decorate([
    (0, common_1.Post)('process'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], longchainController.prototype, "processChatMessages", null);
exports.longchainController = longchainController = __decorate([
    (0, common_1.Controller)('chat'),
    __metadata("design:paramtypes", [longchain_service_1.longchainService])
], longchainController);
//# sourceMappingURL=longchain.controller.js.map