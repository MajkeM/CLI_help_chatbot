#!/usr/bin/env node

import process from "node:process";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

let question: string[] = process.argv.slice(2);
let finalQ: string = question[0];

console.log(finalQ);

const client = new OpenAI({
        apiKey: process.env.GROQ_API_KEY,
        baseURL: "https://api.groq.com/openai/v1",
});

async function main(){

        const response = await client.responses.create({
                model: "openai/gpt-oss-20b", 
                input: finalQ,
        });
        console.log(response.output_text);
}

main();
