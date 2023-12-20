"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVectorStore = exports.embedAndStoreDocs = void 0;
const config_1 = require("./config");
const openai_1 = require("langchain/embeddings/openai");
const pinecone_1 = require("langchain/vectorstores/pinecone");
async function embedAndStoreDocs(client, docs) {
    try {
        const embeddings = new openai_1.OpenAIEmbeddings();
        const index = client.Index(config_1.env.PINECONE_INDEX_NAME);
        await pinecone_1.PineconeStore.fromDocuments(docs, embeddings, {
            pineconeIndex: index,
            namespace: config_1.env.PINECONE_NAME_SPACE,
            textKey: "text",
        });
    }
    catch (error) {
        console.log("error ", error);
        throw new Error("Failed to load your docs !");
    }
}
exports.embedAndStoreDocs = embedAndStoreDocs;
async function getVectorStore(client) {
    try {
        const embeddings = new openai_1.OpenAIEmbeddings();
        const index = client.Index(config_1.env.PINECONE_INDEX_NAME);
        const vectorStore = await pinecone_1.PineconeStore.fromExistingIndex(embeddings, {
            pineconeIndex: index,
            textKey: "text",
            namespace: config_1.env.PINECONE_NAME_SPACE,
        });
        return vectorStore;
    }
    catch (error) {
        console.log("error ", error);
        throw new Error("Something went wrong while getting vector store !");
    }
}
exports.getVectorStore = getVectorStore;
//# sourceMappingURL=vector-store.js.map