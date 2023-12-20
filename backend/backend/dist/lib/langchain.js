"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callChain = void 0;
const chains_1 = require("langchain/chains");
const vector_store_1 = require("./vector-store");
const pinecone_client_1 = require("./pinecone-client");
const ai_stream_experimental_1 = require("ai-stream-experimental");
const llm_1 = require("./llm");
const prompt_templates_1 = require("./prompt-templates");
async function callChain({ question, chatHistory }) {
    try {
        const sanitizedQuestion = question.trim().replaceAll("\n", " ");
        const pineconeClient = await (0, pinecone_client_1.getPineconeClient)();
        const vectorStore = await (0, vector_store_1.getVectorStore)(pineconeClient);
        const { stream, handlers } = (0, ai_stream_experimental_1.LangChainStream)({
            experimental_streamData: true,
        });
        const data = new ai_stream_experimental_1.experimental_StreamData();
        const chain = chains_1.ConversationalRetrievalQAChain.fromLLM(llm_1.streamingModel, vectorStore.asRetriever(), {
            qaTemplate: prompt_templates_1.QA_TEMPLATE,
            questionGeneratorTemplate: prompt_templates_1.STANDALONE_QUESTION_TEMPLATE,
            returnSourceDocuments: true,
            questionGeneratorChainOptions: {
                llm: llm_1.nonStreamingModel,
            },
        });
        chain
            .call({
            question: sanitizedQuestion,
            chat_history: chatHistory,
        }, [handlers])
            .then(async (res) => {
            const sourceDocuments = res?.sourceDocuments;
            const firstTwoDocuments = sourceDocuments.slice(0, 2);
            const pageContents = firstTwoDocuments.map(({ pageContent }) => pageContent);
            console.log("already appended ", data);
            data.append({
                sources: pageContents,
            });
            data.close();
        });
        return new ai_stream_experimental_1.StreamingTextResponse(stream, {}, data);
    }
    catch (e) {
        console.error(e);
        throw new Error("Call chain method failed to execute successfully!!");
    }
}
exports.callChain = callChain;
//# sourceMappingURL=langchain.js.map