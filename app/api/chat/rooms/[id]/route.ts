import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const room = await prisma.message.findMany({
    where: { chatRoomId: id },
  });
  return NextResponse.json(room);
}