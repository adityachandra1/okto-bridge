import OpenAI from 'openai';

if (!process.env.OPENAI_API_KEY) {
    throw new Error('Missing OPENAI_API_KEY environment variable');
}

export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const DEFAULT_MODEL = 'gpt-4o';
export const DEFAULT_TEMPERATURE = 0.7;

