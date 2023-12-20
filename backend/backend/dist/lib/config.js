"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const zod_1 = require("zod");
const envSchema = zod_1.default.object({
    OPENAI_API_KEY: zod_1.default.string().trim().min(1),
    PINECONE_API_KEY: zod_1.default.string().trim().min(1),
    PINECONE_ENVIRONMENT: zod_1.default.string().trim().min(1),
    PINECONE_INDEX_NAME: zod_1.default.string().trim().min(1),
    PINECONE_NAME_SPACE: zod_1.default.string().trim().min(1),
    PDF_PATH: zod_1.default.string().trim().min(1),
    INDEX_INIT_TIMEOUT: zod_1.default.coerce.number().min(1),
});
exports.env = envSchema.parse(process.env);
//# sourceMappingURL=config.js.map