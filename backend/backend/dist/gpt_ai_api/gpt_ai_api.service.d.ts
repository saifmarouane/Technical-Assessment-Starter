import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';
export declare class GptAiApiService {
    private readonly httpService;
    private readonly apiKey;
    private readonly apiUrl;
    constructor(httpService: HttpService);
    generateResponse(prompt: string): Observable<AxiosResponse>;
}
