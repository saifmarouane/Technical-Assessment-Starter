import { Message } from 'ai';
export declare class longchainService {
    formatMessage(message: Message): string;
    processMessages(messages: Message[]): Promise<Response>;
}
