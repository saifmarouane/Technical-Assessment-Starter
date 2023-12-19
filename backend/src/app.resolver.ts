import { Query, Resolver } from '@nestjs/graphql';
import { GptAiApiService } from './gpt_ai_api/gpt_ai_api.service';

@Resolver()
export class AppResolver {
  constructor(private readonly chatGptService: GptAiApiService) {}

  @Query(() => String)
  getHello(): string {
    return 'message';
    
  }
  
}
