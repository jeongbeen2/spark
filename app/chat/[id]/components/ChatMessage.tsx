import { Message } from "@/app/chat/_type";

const ChatMessage = ({ message }: { message: Message }) => {
  const isUser = message.role === "USER";
  if (isUser) {
    return (
      <div className="flex flex-col items-end text-gray-400">
        🙋‍♂️ {message.createdAt.toLocaleString()}
        <div className="self-end bg-blue-500 text-white rounded-lg px-4 py-2 shadow w-fit max-w-xs">
          {message.content}
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-start text-gray-400">
      🤖 {message.createdAt.toLocaleString()}
      <div className="self-start bg-white rounded-lg px-4 py-2 shadow w-fit max-w-xs text-black">
        {message.content}
      </div>
    </div>
  );
};

export default ChatMessage;