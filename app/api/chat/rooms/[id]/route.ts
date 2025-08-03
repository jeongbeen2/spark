import prisma from "@/lib/prisma"
import { getChatResponse, type PrismaMessage } from "@/lib/gpt"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = await context.params
  const room = await prisma.message.findMany({
    where: { chatRoomId: id },
    orderBy: { createdAt: 'asc' }
  })
  return NextResponse.json(room)
}

export async function POST(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const { content } = await _request.json()

    console.log('content', content)

    if(!content) {
      return NextResponse.json({
        error: "메시지 내용이 필요합니다.",
        success: false
      }, { status: 400 })
    }

    // 1. 유저 메시지를 DB에 저장
    const userMessage = await prisma.message.create({
      data: {
        chatRoomId: id,
        content,
        role: "USER",
        createdAt: new Date(),
      }
    })

    console.log('유저 메시지 저장:', userMessage)

    // 2. 채팅방의 전체 메시지 히스토리 가져오기 (방금 저장한 메시지 포함)
    const chatHistory = await prisma.message.findMany({
      where: { chatRoomId: id },
      orderBy: { createdAt: 'asc' }
    })

    console.log('채팅 히스토리:', chatHistory.length, '개 메시지')

    // 3. GPT에게 응답 요청
    const systemPrompt = "당신은 도움이 되는 AI 어시스턴트입니다. 사용자의 질문에 친절하고 정확하게 답변해주세요."
    const gptResponse = await getChatResponse(chatHistory as PrismaMessage[], systemPrompt)

    console.log('GPT 응답 받음:', gptResponse.substring(0, 100) + '...')

    // 4. AI 응답을 DB에 저장
    const assistantMessage = await prisma.message.create({
      data: {
        chatRoomId: id,
        content: gptResponse,
        role: "ASSISTANT", 
        createdAt: new Date(),
      }
    })

    console.log('AI 응답 저장:', assistantMessage)

    // 5. 두 메시지 모두 반환 (유저 메시지 + AI 응답)
    return NextResponse.json({
      userMessage,
      assistantMessage,
      success: true
    })

  } catch (error) {
    console.error("채팅 API 오류:", error)
    return NextResponse.json(
      { 
        error: "메시지 처리 중 오류가 발생했습니다.",
        details: error instanceof Error ? error.message : "알 수 없는 오류"
      },
      { status: 500 }
    )
  }
}