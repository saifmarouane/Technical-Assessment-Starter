import { Controller, Post, Body } from '@nestjs/common';
import { longchainService } from './longchain.service';
import { Message } from 'ai';

@Controller('chat')
export class longchainController {
  constructor(private readonly testlongchainService: longchainService) {}

  @Post('process')
  async processChatMessages(@Body() messages: Message[]): Promise<Response> {
    try {
      const response = await this.testlongchainService.processMessages(messages);
      return response;
    } catch (error) {
      // Gérer l'erreur comme vous le souhaitez
      throw new Error(`Erreur lors du traitement du message: ${error.message}`);
    }
  }
}
