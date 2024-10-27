import { InternTermList } from "@/components/schedule/internList";
import { CirclePlus } from "lucide-react";
export default function Schedule() {
  return (
    <div>
      <InternTermList />
      <a href="./schedule/create" className="fixed bottom-16 right-4">
        <CirclePlus className="size-12 text-blue-400" />
      </a>
    </div>
  );
}
