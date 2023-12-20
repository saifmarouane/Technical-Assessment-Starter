//import { getChunkedDocsFromPDF } from "@src/lib/pdf-loader";
//import { embedAndStoreDocs } from "@/lib/vector-store";
//import { getPineconeClient } from "@/lib/pinecone-client";

import { getChunkedDocsFromPDF } from "src/lib/pdf-loader";
import { getPineconeClient } from "src/lib/pinecone-client";
import { embedAndStoreDocs } from "src/lib/vector-store";

// This operation might fail because indexes likely need
// more time to init, so give some 5 mins after index
// creation and try again.
(async () => {
  try {
    const pineconeClient = await getPineconeClient();
    console.log("Preparing chunks from PDF file");
    const docs = await getChunkedDocsFromPDF();
    console.log(`Loading ${docs.length} chunks into pinecone...`);
    await embedAndStoreDocs(pineconeClient, docs);
    console.log("Data embedded and stored in pine-cone index");
  } catch (error) {
    console.error("Init client script failed ", error);
  }
})();
