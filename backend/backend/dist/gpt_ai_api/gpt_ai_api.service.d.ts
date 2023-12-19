import { HttpService } from '@nestjs/axios';
export declare class GptAiApiService {
    private readonly httpService;
    private readonly apiKey;
    private readonly apiUrl;
    private openaiInstance;
    constructor(httpService: HttpService);
    generateText(prompt: string): Promise<string>;
    private extractTextFromChoices;
}
