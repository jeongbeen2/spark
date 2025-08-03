"use client";
import React, { useEffect, useState } from "react";
import { Message } from "./_type";
import ChatMessage from "./components/ChatMessage";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import axios from "axios";
import Loading from "@/app/components/Loading";

const ChatPage = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageInput, setMessageInput] = useState<string>("");

  const getRoom = async (id: string) => {
    const response = await axios.get(`/api/chat/rooms/${id}`);
    return response.data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["getRoom", id],
    queryFn: () => getRoom(id),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!messageInput) return;
    setMessages([
      ...messages,
      {
        id: crypto.randomUUID(),
        chatRoomId: id,
        content: messageInput,
        role: "USER",
        createdAt: new Date().toLocaleString(),
      },
    ]);
    setMessageInput("");
  };

  useEffect(() => {
    if (data) {
      setMessages(data);
    }
  }, [data]);

  return (
    <>
    {isLoading && <Loading />}
    <div className="absolute top-0 left-0 pr-4 pl-4 bg-black/20 z-1000">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-white text-md">
          {id}
        </div>
      </div>
    </div>
    <div className="flex flex-col h-screen bg-gray-50">
      {/* 채팅 메시지 영역 */}
      <div className="flex-1 flex flex-col justify-end overflow-y-auto p-4 space-y-2">
        {/* 예시 메시지 */}
        {messages.map((message, i) => (
          <ChatMessage key={`${message.id}_${i}`} message={message} />
        ))}
      </div>
      {/* 입력창 영역 */}
      <form className="flex items-center p-4 border-t bg-white gap-2">
        <input
          type="text"
          className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="메시지를 입력하세요..."
          name="message"
          value={messageInput}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          onClick={handleSubmit}
        >
          전송
        </button>
      </form>
    </div>
    </>
  );
};

export default ChatPage;
