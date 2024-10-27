"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// メッセージの型定義
type Message = {
  content: string;
  user_id: number;
};

// チャットの型定義
type Chat = {
  id: number;
  name: string;
  messages: Message[];
};

// チャットデータ
const chatData = {
  chats: [
    {
      id: 1,
      name: "jpHacks銀行プログラマインターン",
      messages: [
        { content: "こんにちは〜", user_id: 101 },
        {
          content: "こんにちは！私服って、スーツでいいんですかね？",
          user_id: 102,
        },
      ],
    },
    {
      id: 2,
      name: "jpHacksコンサルタント総合職インターン",
      messages: [
        { content: "みなさんどの職種に希望出しますか、、？", user_id: 103 },
        { content: "わかっていないのでこれから調べる予定です！", user_id: 101 },
      ],
    },
    {
      id: 3,
      name: "jpHacksコンサルタントプログラマインターン",
      messages: [
        { content: "みなさんどの言語書くんですか〜？", user_id: 103 },
        { content: "私はPythonです〜", user_id: 101 },
      ],
    },
  ],
};

export default function Chat() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState(chatData.chats);
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null); // 選択されたチャットの状態を追加
  const [newMessage, setNewMessage] = useState<string>(""); // 新しいメッセージの状態を追加

  const handleSubmitted = () => {
    const results = chatData.chats.filter((chat) =>
      chat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    setSubmitted(true);
  };

  const handleChatClick = (chat: Chat) => {
    setSelectedChat(chat); // 選択されたチャットを設定
  };

  const handleSendMessage = () => {
    if (selectedChat && newMessage.trim() !== "") {
      const updatedChat = { ...selectedChat };
      updatedChat.messages.push({ content: newMessage, user_id: 104 }); // 仮のユーザーID
      setSelectedChat(updatedChat);
      setNewMessage(""); // メッセージ送信後にテキストボックスをクリア
    }
  };

  return (
    <div className="flex">
      <div className="flex flex-col w-1/3 p-4 border-r bg-white">
        {" "}
        {/* 左側の検索エリアの背景を白に設定 */}
        {/* 検索フォーム */}
        <div className="flex flex-col space-y-2 bg-white">
          {" "}
          {/* 検索フォームの背景を白に設定 */}
          <Input
            type="text"
            placeholder="チャットをインターン名で検索"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white" // テキストボックスの背景を白に設定
          />
          <Button type="submit" onClick={handleSubmitted}>
            検索
          </Button>
        </div>
        <div className="mt-4 bg-white">
          {" "}
          {/* 検索結果表示欄の背景を白に設定 */}
          <ul>
            {searchResults.length > 0 ? (
              searchResults.map((chat) => (
                <li
                  key={chat.id}
                  className="p-2 border-b cursor-pointer"
                  onClick={() => handleChatClick(chat)} // チャットをクリックしたときの処理
                >
                  {chat.name}
                </li>
              ))
            ) : (
              <p>該当するチャットがありません。</p>
            )}
          </ul>
        </div>
      </div>

      {/* チャット内容を表示するエリア */}
      <div className="flex-1 p-4">
        <h2 className="text-2xl">チャット内容</h2>
        <div className="border border-gray-300 bg-white rounded-lg p-4 mt-4">
          {" "}
          {/* 背景色を白に設定 */}
          {/* 選択されたチャットの内容を表示 */}
          {selectedChat ? (
            <div>
              <h3 className="text-xl">{selectedChat.name}</h3>
              <ul className="mt-2">
                {selectedChat.messages.map((message, index) => (
                  <li key={index} className="p-2 border-b">
                    <strong>User {message.user_id}:</strong> {message.content}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>チャットを選択してください。</p>
          )}
        </div>

        {/* メッセージ送信ボックス */}
        {selectedChat && (
          <div className="mt-4">
            <Input
              type="text"
              placeholder="メッセージを入力..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="bg-white" // メッセージ入力ボックスの背景を白に設定
            />
            <Button onClick={handleSendMessage} className="mt-2">
              送信
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
