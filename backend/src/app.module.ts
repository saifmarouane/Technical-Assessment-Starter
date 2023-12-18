import { Module } from '@nestjs/common';
import { SharedModule } from './shared/shared.module';
import { AppResolver } from './app.resolver';
import { GptAiApiModule } from './gpt_ai_api/gpt_ai_api.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [

    SharedModule, GptAiApiModule],
  providers: [AppResolver],
})
export class AppModule {}
