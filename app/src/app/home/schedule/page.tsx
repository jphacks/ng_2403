import { InternTermList } from "@/components/schedule/internList";
import { CirclePlus } from "lucide-react";
export default function Schedule() {
  return (
    <div>
      <header className=" p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-gray-800">予定一覧</h1>
          <div className="border-t border-gray-300 mt-2"></div>
        </div>
      </header>
      <InternTermList />
      <a href="./schedule/create" className="fixed bottom-16 right-4">
        <CirclePlus className="size-12 text-blue-400" />
      </a>
    </div>
  );
}
