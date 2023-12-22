import { Module } from '@nestjs/common';
import { SharedModule } from './shared/shared.module';
import { AppResolver } from './app.resolver';
import { GptAiApiModule } from './gpt_ai_api/gpt_ai_api.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { longchainController } from './longchain/longchain.controller';
import { GptAiApiController } from './gpt_ai_api/gpt_ai_api.controller';
import { longchainService } from './longchain/longchain.service';
@Module({
  imports: [
    SharedModule, GptAiApiModule],
  providers: [AppResolver, longchainService],
  controllers: [longchainController],

})
export class AppModule {}
