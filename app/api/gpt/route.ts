import { NextRequest, NextResponse } from "next/server"
import { getSimpleResponse } from "@/lib/gpt"

export async function POST(request: NextRequest) {
  try {
    const { content, systemPrompt } = await request.json()
    
    if (!content) {
      return NextResponse.json(
        { error: "메시지 내용이 필요합니다." },
        { status: 400 }
      )
    }

    console.log('GPT API 요청:', { content, systemPrompt })

    // 기본 시스템 프롬프트
    const defaultSystemPrompt = "당신은 도움이 되는 AI 어시스턴트입니다. 사용자의 질문에 친절하고 정확하게 답변해주세요."
    
    const response = await getSimpleResponse(
      content, 
      systemPrompt || defaultSystemPrompt
    )

    console.log('GPT 응답:', response.substring(0, 100) + '...')

    return NextResponse.json({
      response,
      success: true
    })

  } catch (error) {
    console.error("GPT API 오류:", error)
    return NextResponse.json(
      { 
        error: "GPT 요청 처리 중 오류가 발생했습니다.",
        details: error instanceof Error ? error.message : "알 수 없는 오류"
      },
      { status: 500 }
    )
  }
}
