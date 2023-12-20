"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPineconeClient = void 0;
const pinecone_1 = require("@pinecone-database/pinecone");
const config_1 = require("./config");
const utils_1 = require("./utils");
let pineconeClientInstance = null;
function sanitizeIndexName(indexName) {
    return indexName.toLowerCase().replace(/[^a-z0-9-]+/g, "-");
}
async function createIndex(client, indexName) {
    try {
        const sanitizedIndexName = sanitizeIndexName(indexName);
        await client.createIndex({
            createRequest: {
                name: sanitizedIndexName,
                dimension: 1536,
                metric: "cosine",
            },
        });
        console.log(`Waiting for ${config_1.env.INDEX_INIT_TIMEOUT} seconds for index initialization to complete...`);
        await (0, utils_1.delay)(config_1.env.INDEX_INIT_TIMEOUT);
        console.log("Index created !!");
    }
    catch (error) {
        console.error("error ", error);
        throw new Error("Index creation failed");
    }
}
async function initPineconeClient() {
    try {
        const pineconeClient = new pinecone_1.PineconeClient();
        await pineconeClient.init({
            apiKey: config_1.env.PINECONE_API_KEY,
            environment: config_1.env.PINECONE_ENVIRONMENT,
        });
        const indexName = config_1.env.PINECONE_INDEX_NAME;
        const existingIndexes = await pineconeClient.listIndexes();
        if (!existingIndexes.includes(indexName)) {
            createIndex(pineconeClient, indexName);
        }
        else {
            console.log("Your index already exists. nice !!");
        }
        return pineconeClient;
    }
    catch (error) {
        console.error("error", error);
        throw new Error("Failed to initialize Pinecone Client");
    }
}
async function getPineconeClient() {
    if (!pineconeClientInstance) {
        pineconeClientInstance = await initPineconeClient();
    }
    return pineconeClientInstance;
}
exports.getPineconeClient = getPineconeClient;
//# sourceMappingURL=pinecone-client.js.map