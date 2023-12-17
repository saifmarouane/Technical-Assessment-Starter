import { Module } from '@nestjs/common';
import { SharedModule } from './shared/shared.module';
import { AppResolver } from './app.resolver';
import { GptAiApiModule } from './gpt_ai_api/gpt_ai_api.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb//localhost/conversation'),

    ,SharedModule, GptAiApiModule,ConfigModule.forRoot(
    {
      isGlobal: true,
      envFilePath: '.env',
    }
  )],
  providers: [AppResolver],
})
export class AppModule {}
