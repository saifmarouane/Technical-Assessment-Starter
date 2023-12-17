import { Module } from '@nestjs/common';
import { GptAiApiService } from './gpt_ai_api.service';
import { GptAiApiController } from './gpt_ai_api.controller';

@Module({
  providers: [GptAiApiService],
  controllers: [GptAiApiController]
})
export class GptAiApiModule {}
