import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const rooms = await prisma.chatRoom.findMany();
  return NextResponse.json(rooms);
}