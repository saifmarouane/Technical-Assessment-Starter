"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pdf_loader_1 = require("../lib/pdf-loader");
const pinecone_client_1 = require("../lib/pinecone-client");
const vector_store_1 = require("../lib/vector-store");
(async () => {
    try {
        const pineconeClient = await (0, pinecone_client_1.getPineconeClient)();
        console.log("Preparing chunks from PDF file");
        const docs = await (0, pdf_loader_1.getChunkedDocsFromPDF)();
        console.log(`Loading ${docs.length} chunks into pinecone...`);
        await (0, vector_store_1.embedAndStoreDocs)(pineconeClient, docs);
        console.log("Data embedded and stored in pine-cone index");
    }
    catch (error) {
        console.error("Init client script failed ", error);
    }
})();
//# sourceMappingURL=pinecone-prepare-docs.js.map