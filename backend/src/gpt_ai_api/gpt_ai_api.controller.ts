import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';
import { GptAiApiService } from './gpt_ai_api.service';

@Controller('chatgpt')
@Controller('gpt-ai-api')
export class GptAiApiController {
    constructor(private readonly chatGPTService: GptAiApiService) {}

    @Post()
    @HttpCode(HttpStatus.OK)
    generateResponse(@Body('prompt') prompt: string) {
      return this.chatGPTService
        .generateResponse(prompt)
        .pipe(map((response: AxiosResponse) => response.data.choices[0].text.trim()));
    }
}
