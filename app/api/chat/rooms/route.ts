import prisma from "@/lib/prisma"
import { Role } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"
const DEFAULT_ROLE = "ASSISTANT"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_request: NextRequest) {
  const rooms = await prisma.chatRoom.findMany()
  return NextResponse.json(rooms)
}

export async function POST(_request: NextRequest) {
  // const { title } = await request.json();
  const title = `새 채팅방 - ${Math.random()}`

  const chatRoom = {
    title: title || "새 채팅방",
    user: { connect: { email: "jb2n95@naver.com" } },
    messages: {
      create: [
        {
          content: "안녕하세요! 무엇을 도와드릴까요?",
          role: DEFAULT_ROLE,
          createdAt: new Date(),
        },
      ],
    },
  }

  const room = await prisma.chatRoom.create({
    data: chatRoom,
  })

  // 생성후, 생성이 완료되었으면 생성된 id값을 반환
  return NextResponse.json({ id: room.id })
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  await prisma.chatRoom.delete({
    where: { id },
  });
  return NextResponse.json({ message: '채팅방 삭제 완료' });
}

export async function PATCH(request: NextRequest) {
  const { id, title } = await request.json();
  await prisma.chatRoom.update({
    where: { id },
    data: { title },
  });
  return NextResponse.json({ message: '채팅방 수정 완료' });
}