import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GptAiApiService } from './gpt_ai_api/gpt_ai_api.service';
import { Observable, map } from 'rxjs';
import { AxiosResponse } from 'axios';
import { longchainController } from './longchain/longchain.controller';
import { Message } from 'ai';
import { longchainService } from './longchain/longchain.service';


@Resolver()
export class AppResolver {
  constructor(private readonly chatGptService: GptAiApiService,private readonly longchainservice: longchainService) {}
 
  
  @Query(() => String)
  getHello(): string {
    return 'message';
    
  }

  //gpt pluging
  @Query(() => String)
  async getOpenAIText(@Args('prompt') prompt: string): Promise<string> {
    return await this.chatGptService.generateText(prompt);
  }
  
  
  


  ////////////////////////////////////////////




}


