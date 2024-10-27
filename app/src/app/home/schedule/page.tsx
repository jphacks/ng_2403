"use client"; // クライアントコンポーネントとしてマークする

import { useSearchParams } from "next/navigation";

import { InternTermList } from "@/components/schedule/internList";
import { CirclePlus } from "lucide-react";
import DataTable from "@/lib/class/DataTable";
export default function Schedule() {
  const searchParams = useSearchParams();
  const uid = searchParams.get("uid"); // クエリパラメータを取得
  console.log(uid);
  return (
    <div>
      <header className=" p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-gray-800">予定一覧</h1>
          <div className="border-t border-gray-300 mt-2"></div>
        </div>
      </header>
      <InternTermList uid={uid} />
      <a
        href={`./schedule/create?uid=${uid}`}
        className="fixed bottom-16 right-4"
      >
        <CirclePlus className="size-12 text-blue-400" />
      </a>
    </div>
  );
}
