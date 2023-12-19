import { GptAiApiService } from './gpt_ai_api.service';
export declare class GptAiApiController {
    private readonly chatGPTService;
    constructor(chatGPTService: GptAiApiService);
    generateResponse(prompt: string): Promise<string>;
}
