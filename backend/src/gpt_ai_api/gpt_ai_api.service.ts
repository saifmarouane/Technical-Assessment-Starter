import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class GptAiApiService {
  private readonly apiKey: string;
  private readonly apiUrl: string;

  constructor(private readonly httpService: HttpService) {
    this.apiKey = process.env.OPENAI_API_KEY;
    this.apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';
  }

  generateResponse(prompt: string): Observable<string> {
    const data = {
      prompt: prompt,
      max_tokens: 150,
      n: 1,
      stop: null,
      temperature: 1,
    };

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
    };

    return this.httpService.post(this.apiUrl, data, { headers: headers }).pipe(
      map((response: AxiosResponse) => {
        // Assurez-vous d'ajuster cette ligne en fonction de la structure réelle de votre réponse
        return response.data.choices[0].text; 
      })
    );
  }
}
