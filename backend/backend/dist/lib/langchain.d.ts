import { StreamingTextResponse } from "ai-stream-experimental";
type callChainArgs = {
    question: string;
    chatHistory: string;
};
export declare function callChain({ question, chatHistory }: callChainArgs): Promise<StreamingTextResponse>;
export {};
