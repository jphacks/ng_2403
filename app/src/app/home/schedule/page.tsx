// app/search/page.tsx
"use client"; // クライアントコンポーネントとしてマークする

import { useSearchParams } from "next/navigation";

export default function Schedule() {
  const searchParams = useSearchParams();
  const uid = searchParams.get("uid"); // クエリパラメータを取得

  // クリックされたときhome/schdule/createにidをクエリパラメータとして遷移するボタンを作成

  return (
    <div>
      schedule
      <a href={`/home/schedule/create?uid=${uid}`}>create</a>
    </div>
  );
}
