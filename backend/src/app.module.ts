import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [ChatModule,SharedModule],
  controllers: [AppController],
  providers: [AppService,  AppResolver],

})
export class AppModule {}
