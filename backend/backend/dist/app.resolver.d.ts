import { GptAiApiService } from './gpt_ai_api/gpt_ai_api.service';
import { longchainService } from './longchain/longchain.service';
export declare class AppResolver {
    private readonly chatGptService;
    private readonly longchainservice;
    constructor(chatGptService: GptAiApiService, longchainservice: longchainService);
    getHello(): string;
    getOpenAIText(prompt: string): Promise<string>;
}
