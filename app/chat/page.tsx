"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChatRoom } from "@prisma/client";
import Loading from "../components/Loading";

const ChatPage = () => {
  const router = useRouter();

  const getRooms = async () => {
    const response = await axios.get("/api/chat/rooms");
    return response.data;
  };

  const { data: roomsData, isLoading } = useQuery({
    queryKey: ["getRooms"],
    queryFn: () => getRooms(),
  });

  const handleEnterRoom = (id: string) => {
    router.push(`/chat/${id}`);
  }
  { isLoading && <Loading /> }

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen bg-gray-50">
      {roomsData && roomsData.map((room: ChatRoom) => {
        return (
          <div className="flex flex-col items-center justify-center bg-blue-500 w-1/3 rounded-lg p-4 cursor-pointer" key={room.id} onClick={() => handleEnterRoom(room.id)}>
            {room.title}
          </div>
        )
      })}
    </div>
  );
};

export default ChatPage;
