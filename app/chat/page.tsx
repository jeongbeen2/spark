"use client";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChatRoom } from "@prisma/client";
import Loading from "../components/Loading";
import { useQueryClient } from "@tanstack/react-query";
import useStore from "@/lib/store";

const ChatPage = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { user } = useStore()


  const getRooms = async () => {
    const response = await axios.get("/api/chat/rooms");
    return response.data;
  };

  const { data: roomsData, isLoading } = useQuery({
    queryKey: ["getRooms"],
    queryFn: () => getRooms(),
  });
  
  const postCreateRooms = async () => {
    const response = await axios.post("/api/chat/rooms");
    return response.data;
  };

  const { mutate: createRooms } = useMutation({
    mutationFn: postCreateRooms,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["getRooms"] });
      // router.push(`/chat/${response.id}`);
    },
  });



  const handleEnterRoom = (id: string) => {
    router.push(`/chat/${id}`);
  }

  const handleDeleteRoom = (id: string) => {
    axios.delete(`/api/chat/rooms`, { data: { id } });
    queryClient.invalidateQueries({ queryKey: ["getRooms"] });
  }

  if (isLoading) return <Loading />

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen bg-gray-50">
      {roomsData && roomsData.map((room: ChatRoom) => {
        return (
          <div className="flex items-center justify-center w-1/2 rounded-lg p-4 gap-4" key={room.id}>
            <div className="flex flex-col items-center justify-center bg-blue-500 w-full rounded-lg p-4 hover:-translate-y-1 transition-all duration-300 cursor-pointer" onClick={() => handleEnterRoom(room.id)}>
              {room.title}
            </div>
            <button className="border-2 border-red-500 text-red-500 rounded-md h-full w-1/12 cursor-pointer" onClick={() => handleDeleteRoom(room.id)}>삭제</button>
          </div>
        )
      })}
      <button className="border-2 border-blue-500 w-1/3 text-blue-500 p-2 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-300" onClick={() => createRooms()}>+새 채팅방 생성</button>
    </div>
  );
};

export default ChatPage;
