import { Module } from '@nestjs/common';
import { GptAiApiService } from './gpt_ai_api.service';
import { GptAiApiController } from './gpt_ai_api.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [GptAiApiService],
  imports: [HttpModule],
  controllers: [GptAiApiController],
  exports: [GptAiApiService],

  
})
export class GptAiApiModule {}
