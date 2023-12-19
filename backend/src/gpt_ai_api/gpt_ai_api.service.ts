import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from '@nestjs/axios';
import * as openai from 'openai';
import { OpenAI } from 'openai';

@Injectable()
export class GptAiApiService {
  private readonly apiKey: string;
  private readonly apiUrl: string;
  private openaiInstance: OpenAI;

  constructor(private readonly httpService: HttpService) {
    this.openaiInstance = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.apiKey = process.env.OPENAI_API_KEY;
    this.apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';
  }

  async generateText(prompt: string): Promise<string> {
    try {
      const response = await this.openaiInstance.completions.create({
        model: 'text-davinci-002',
        prompt,
        max_tokens: 150,
      });
      return response.choices[0].text.trim();
    } catch (error) {
      console.error('Error generating text:', error);
      throw error;
    }
  }
  private extractTextFromChoices(data: any): string {
    const choice = data.choices && data.choices[0];
    return choice ? choice.text.trim() : '';
  }
}
