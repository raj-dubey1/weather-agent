import { openai } from '@ai-sdk/openai';
import { Agent } from '@mastra/core/agent';
import { weatherTool,metadataTool } from '../tools';

export const weatherAgent = new Agent({
  name: 'Weather Agent',
  model: openai('gpt-4o-mini'),
  tools: { weatherTool,metadataTool },
});
