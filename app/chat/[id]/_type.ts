export interface Message {
    id: string;
    chat: string;
    role: "user" | "assistant";
    createdAt: string;
  }
  