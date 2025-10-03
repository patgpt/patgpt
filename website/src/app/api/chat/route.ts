import { google } from "@ai-sdk/google";
import { convertToModelMessages, streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, model } = await req.json();
  const system = "You are a helpful AI assistant representing a portfolio website. You can answer questions about the owner's experience, projects, and skills.";  
  const result = streamText({
    model: google("gemini-2.5-flash"),
    messages: convertToModelMessages(messages),
    system
  });

  return result.toTextStreamResponse();
}
