import { Message } from "ai";
import { type ClassValue } from "clsx";
export declare function cn(...inputs: ClassValue[]): string;
export declare function delay(ms: number): Promise<unknown>;
export declare const formatChatHistory: (chatHistory: [string, string][]) => string;
export declare function formattedText(inputText: string): string;
export declare const initialMessages: Message[];
interface Data {
    sources: string[];
}
export declare const getSources: (data: Data[], role: string, index: number) => string[];
export {};
