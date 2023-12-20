"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChunkedDocsFromPDF = void 0;
const pdf_1 = require("langchain/document_loaders/fs/pdf");
const text_splitter_1 = require("langchain/text_splitter");
const config_1 = require("./config");
async function getChunkedDocsFromPDF() {
    try {
        const loader = new pdf_1.PDFLoader(config_1.env.PDF_PATH);
        const docs = await loader.load();
        const textSplitter = new text_splitter_1.RecursiveCharacterTextSplitter({
            chunkSize: 1000,
            chunkOverlap: 200,
        });
        const chunkedDocs = await textSplitter.splitDocuments(docs);
        return chunkedDocs;
    }
    catch (e) {
        console.error(e);
        throw new Error("PDF docs chunking failed !");
    }
}
exports.getChunkedDocsFromPDF = getChunkedDocsFromPDF;
//# sourceMappingURL=pdf-loader.js.map