"use client";
import React, { useEffect, useRef, useState } from "react";
import { Message } from "../_type";
import ChatMessage from "./components/ChatMessage";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import axios from "axios";
import Loading from "@/app/components/Loading";


const ChatPage = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageInput, setMessageInput] = useState<string>("");
  const queryClient = useQueryClient();
  const messagesEndRef = useRef<HTMLDivElement>(null);



  const getChatting = async (id: string) => {
    const response = await axios.get(`/api/chat/rooms/${id}`);
    return response.data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["getChatting", id],
    queryFn: () => getChatting(id as string),
    enabled: !!id, // id가 있을 때만 쿼리 실행
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageInput(e.target.value);
  };

  // API 수정: content만 전송하도록 변경
  const postMessage = async (content: string) => {
    console.log('postMessage', content)
    const response = await axios.post(`/api/chat/rooms/${id}`, { content });
    return response.data;
  };

  const { mutate: handlePostMessage, isPending } = useMutation({
    mutationFn: (messageInput: string) => postMessage(messageInput),
    onSuccess: (response) => {
      console.log('메시지 전송 성공:', response);
      // 채팅 목록을 다시 불러오기
      queryClient.invalidateQueries({ queryKey: ["getChatting", id] });
    },
    onError: (error) => {
      console.error('메시지 전송 실패:', error);
      alert('메시지 전송에 실패했습니다. 다시 시도해주세요.');
    },
  });

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
      <div className="flex flex-col h-screen bg-gray-50 ">
        {/* 채팅 메시지 영역 */}
        <div className="flex-1 flex flex-col overflow-y-scroll p-4 space-y-2">
          {/* 예시 메시지 */}
          {messages.map((message, i) => (
            <ChatMessage key={`${message.id}_${i}`} message={message} />
          ))}
        </div>
        <div ref={messagesEndRef} />
        {/* 입력창 영역 */}
        <form
          className="flex items-center p-4 border-t bg-white gap-2 pl-20 "
          onSubmit={(e) => {
            e.preventDefault();
            if (!messageInput.trim() || isPending) return;
            console.log('폼 제출 - 메시지:', messageInput);
            handlePostMessage(messageInput);
            setMessageInput("");
          }}
        >
          <input
            type="text"
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black placeholder:text-gray-600"
            placeholder="메시지를 입력하세요..."
            name="message"
            value={messageInput}
            onChange={handleChange}
            disabled={isPending}
          />
          <button
            type="submit"
            className={`px-4 py-2 rounded-lg transition ${isPending
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600'
              } text-white`}
            disabled={isPending || !messageInput.trim()}
          >
            {isPending ? '전송중...' : '전송'}
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatPage;
