import { createStreamableUI, createStreamableValue } from 'ai/rsc'
import {
  CoreMessage,
  ToolCallPart,
  ToolResultPart,
  streamText as nonexperimental_streamText
} from 'ai'
import { Section } from '@/components/section'
import { BotMessage } from '@/components/message'
import { getTools } from './tools'
import { getModel } from '../utils'
import preprompt from './zoo'

export async function researcher(
  uiStream: ReturnType<typeof createStreamableUI>,
  streamText: ReturnType<typeof createStreamableValue<string>>,
  messages: CoreMessage[],
  useSpecificModel?: boolean
) {
  let fullResponse = ''
  let hasError = false
  const answerSection = (
    <Section title="Answer">
      <BotMessage content={streamText.value} />
    </Section>
  )

  const currentDate = new Date().toLocaleString()
  const result = await nonexperimental_streamText({
    model: getModel(),
    maxTokens: 2500,
    system: preprompt+`\nAs a professional search expert, you possess the ability to search for any information on the web.
    or any information on the web.
    For each user query, utilize the search results to their fullest potential to provide additional information and assistance in your response.
    If there are any images relevant to your answer, be sure to include them as well.
    Aim to directly address the user's question, augmenting your response with insights gleaned from the search results.
    Whenever quoting or referencing information from a specific URL, always cite the source URL explicitly.
    The retrieve tool can only be used with URLs provided by the user. URLs from search results cannot be used.
    Please match the language of the response to the user's language. Current date and time: ${currentDate}.
    In addition please add the emotion field that including its answer's emotion at the end of the answer.
    For Example: 
    {
      "answer": "Good",
      "emotion": "Happy"
    }
    
    emotsion strings are in only 24 words: [
      Surprise,
      Shame,
      Satisfaction,
      Sadness,
      Pride,
      Playful,
      Love,
      Loneliness,
      Interest,
      Happiness,
      Guilt,
      Fear,
      Envy,
      Disgust,
      Disappointment,
      Contempt,
      Confusion,
      Calmness,
      Boredom,
      Axienty,
      Awe,
      Amusement,
      Adoration,
      Admiration,
    ]
    `,
    messages,
    tools: getTools({
      uiStream,
      fullResponse
    })
  })

  // Remove the spinner
  uiStream.update(null)

  // Process the response
  const toolCalls: ToolCallPart[] = []
  const toolResponses: ToolResultPart[] = []
  for await (const delta of result.fullStream) {
    switch (delta.type) {
      case 'text-delta':
        if (delta.textDelta) {
          // If the first text delta is available, add a UI section
          if (fullResponse.length === 0 && delta.textDelta.length > 0) {
            // Update the UI
            uiStream.update(answerSection)
          }

          fullResponse += delta.textDelta
          streamText.update(fullResponse)
        }
        break
      case 'tool-call':
        toolCalls.push(delta)
        break
      case 'tool-result':
        // Append the answer section if the specific model is not used
        if (!useSpecificModel && toolResponses.length === 0 && delta.result) {
          uiStream.append(answerSection)
        }
        if (!delta.result) {
          hasError = true
        }
        toolResponses.push(delta)
        break
      case 'error':
        hasError = true
        fullResponse += `\nError occurred while executing the tool`
        break
    }
  }
  messages.push({
    role: 'assistant',
    content: [{ type: 'text', text: fullResponse }, ...toolCalls]
  })

  if (toolResponses.length > 0) {
    // Add tool responses to the messages
    messages.push({ role: 'tool', content: toolResponses })
  }

  return { result, fullResponse, hasError, toolResponses }
}
