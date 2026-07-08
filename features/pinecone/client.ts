import { Pinecone } from '@pinecone-database/pinecone';

let pinecone: Pinecone | null = null;

export function getPineconeIndex() {
    const apiKey = process.env.PINECONE_API_KEY 
    if(!apiKey){ console.log( "PINECONE API KEY MISSING")}
    if (!pinecone) {
        pinecone = new Pinecone({ apiKey: apiKey! });
    }

    return pinecone.index({ host: process.env.PINECONE_INDEX! });
}