// testlongchain.service.ts
import { Injectable } from '@nestjs/common';
import { Message } from 'ai';
import { callChain } from 'src/lib/langchain';

@Injectable()
export class longchainService {
  
  formatMessage(message: Message): string {
    return `${message.role === "user" ? "Human" : "Assistant"}: ${message.content}`;
  }

  async processMessages(messages: Message[]): Promise<Response> {
    const formattedPreviousMessages = messages.slice(0, -1).map(this.formatMessage);
    const question = messages[messages.length - 1].content;

    if (!question) {
      throw new Error("No question in the request");
    }

    const response: Response = await callChain({
      question,
      chatHistory: formattedPreviousMessages.join("\n"),
    });
  
    return response; // Assuming callChain returns a string response
  }
}
