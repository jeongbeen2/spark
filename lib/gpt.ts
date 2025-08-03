import OpenAI from "openai"

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export interface GPTMessage {
  role: "user" | "assistant" | "system"
  content: string
}

// Prisma에서 반환하는 Message 타입 정의
export interface PrismaMessage {
  id: string
  chatRoomId: string
  content: string
  role: "USER" | "ASSISTANT"
  createdAt: Date
}

/**
 * 채팅 히스토리를 기반으로 GPT에게 응답을 요청하는 함수
 * @param messages 채팅 히스토리 (PrismaMessage 타입 배열)
 * @param systemPrompt 시스템 프롬프트 (선택사항)
 * @returns GPT 응답 텍스트
 */
export async function getChatResponse(
  messages: PrismaMessage[],
  systemPrompt?: string
): Promise<string> {
  try {
    // Message 타입을 OpenAI GPTMessage 형식으로 변환
    const gptMessages: GPTMessage[] = []
    
    // 시스템 프롬프트가 있다면 첫 번째로 추가
    if (systemPrompt) {
      gptMessages.push({
        role: "system",
        content: systemPrompt
      })
    }
    
    // 채팅 히스토리 변환
    messages.forEach(message => {
      gptMessages.push({
        role: message.role === "USER" ? "user" : "assistant",
        content: message.content
      })
    })

    const response = await client.chat.completions.create({
      model: "gpt-4o",
      messages: gptMessages,
      temperature: 0.7,
      max_tokens: 2000,
    })

    const assistantMessage = response.choices[0]?.message?.content
    
    if (!assistantMessage) {
      throw new Error("GPT 응답을 받지 못했습니다.")
    }

    return assistantMessage
  } catch (error) {
    console.error("GPT API 호출 중 오류:", error)
    throw new Error(`GPT API 호출 실패: ${error instanceof Error ? error.message : "알 수 없는 오류"}`)
  }
}

/**
 * 단일 메시지에 대한 GPT 응답을 요청하는 간단한 함수
 * @param userMessage 사용자 메시지
 * @param systemPrompt 시스템 프롬프트 (선택사항)
 * @returns GPT 응답 텍스트
 */
export async function getSimpleResponse(
  userMessage: string,
  systemPrompt?: string
): Promise<string> {
  const messages: PrismaMessage[] = [{
    id: "temp",
    chatRoomId: "temp", 
    content: userMessage,
    role: "USER",
    createdAt: new Date()
  }]
  
  return getChatResponse(messages, systemPrompt)
}