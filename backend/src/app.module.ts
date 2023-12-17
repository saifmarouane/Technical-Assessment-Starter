import { Module } from '@nestjs/common';
import { SharedModule } from './shared/shared.module';
import { AppResolver } from './app.resolver';
import { GptAiApiModule } from './gpt_ai_api/gpt_ai_api.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [SharedModule, GptAiApiModule,ConfigModule.forRoot()],
  providers: [AppResolver],
})
export class AppModule {}
