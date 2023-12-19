import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { catchError, map } from 'rxjs/operators';
import { GptAiApiService } from './gpt_ai_api.service';
import { throwError } from 'rxjs';

@Controller('gpt-ai-api')
export class GptAiApiController {
    constructor(private readonly chatGPTService: GptAiApiService) {}


  @Post()
  @HttpCode(HttpStatus.OK)
  generateResponse(@Body('prompt') prompt: string) {
    return this.chatGPTService
      .generateText(prompt)
      
  }
}
