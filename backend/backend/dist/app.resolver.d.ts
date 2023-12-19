import { GptAiApiService } from './gpt_ai_api/gpt_ai_api.service';
export declare class AppResolver {
    private readonly chatGptService;
    constructor(chatGptService: GptAiApiService);
    getHello(): string;
    getOpenAIText(prompt: string): Promise<string>;
}
