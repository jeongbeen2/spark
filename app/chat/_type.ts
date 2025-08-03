export interface Message {
  id: string;
    chatRoomId: string;
    content: string;
    role: "USER" | "ASSISTANT";
    createdAt: string;
  }
  