import { openai } from '@ai-sdk/openai';
import { Agent } from '@mastra/core/agent';
import { weatherTool,metadataTool } from '../tools';

export const weatherAgent = new Agent({
  name: 'Weather Agent',
  model: openai('gpt-4o-mini'),
  instruction:'help user with the queries',
  tools: { weatherTool,metadataTool },
});
