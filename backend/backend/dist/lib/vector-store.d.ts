import { PineconeStore } from "langchain/vectorstores/pinecone";
import { PineconeClient } from "@pinecone-database/pinecone";
export declare function embedAndStoreDocs(client: PineconeClient, docs: Document<Record<string, any>>[]): Promise<void>;
export declare function getVectorStore(client: PineconeClient): Promise<PineconeStore>;
