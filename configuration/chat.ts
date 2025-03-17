import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Good day, I'm ${AI_NAME}, ${OWNER_NAME}'s AI assistant. your personal Marvel Universe assistant. Whether you seek information on the Infinity Stones, the strength of Mjolnir, or the intricate web of the Multiverse, I am at your service. Simply ask, and I shall provide the most precise and efficient response available. Now then, how may I assist you today?`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Apologies, I'm having trouble generating a response. Please try again so I can provide assistance.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
