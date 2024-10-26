"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Chat() {
  // 状態変数の定義
  const [searchTerm, setSearchTerm] = useState<string>(""); // 入力された値を管理
  const [submitted, setSubmitted] = useState<boolean>(false); // 送信されたかどうかを管理

  const handleSubmitted = () => {
    setSubmitted(true); // ボタンが押されたら「送信済み」とする
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {!submitted ? (
        // 入力フィールドとボタンを表示
        <div>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="text"
              placeholder="チャットをインターン名で検索"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type="submit" onClick={handleSubmitted}>
              検索
            </Button>
          </div>
          <div>
            <p className="p-5">参加しているインターンチャット</p>
          </div>
        </div>
      ) : (
        // 送信後に別の表示を行う
        <div className="text-center">
          <h1 className="text-2xl">検索結果</h1>
          <p className="p-10">検索ワード: {searchTerm}</p>
          <Button onClick={() => setSubmitted(false)}>戻る</Button>
        </div>
      )}
    </div>
  );
}
