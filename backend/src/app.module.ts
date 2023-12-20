import { Module } from '@nestjs/common';
import { SharedModule } from './shared/shared.module';
import { AppResolver } from './app.resolver';
import { GptAiApiModule } from './gpt_ai_api/gpt_ai_api.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TestlongchainController } from './testlongchain/testlongchain.controller';
@Module({
  imports: [

    SharedModule, GptAiApiModule],
  providers: [AppResolver],
  controllers: [TestlongchainController],
})
export class AppModule {}
