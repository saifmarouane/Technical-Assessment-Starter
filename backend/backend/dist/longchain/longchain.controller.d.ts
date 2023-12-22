import { longchainService } from './longchain.service';
import { Message } from 'ai';
export declare class longchainController {
    private readonly testlongchainService;
    constructor(testlongchainService: longchainService);
    processChatMessages(messages: Message[]): Promise<Response>;
}
