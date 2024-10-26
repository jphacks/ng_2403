import { CalendarCheck, MessageCircleMore, BookA } from "lucide-react"; // shadcnが推奨するアイコンライブラリ

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200">
      <nav className="flex justify-around py-2">
        <a
          href="/home/schedule"
          className="flex flex-col items-center space-y-1 text-gray-500 hover:text-blue-600 w-1/3"
        >
          <CalendarCheck className="w-6 h-6" />
          <span className="text-xs">予定</span>
        </a>
        <a
          href="/home/chat"
          className="flex flex-col items-center space-y-1 text-gray-500 hover:text-blue-600 w-1/3"
        >
          <MessageCircleMore className="w-6 h-6" />
          <span className="text-xs">チャット</span>
        </a>
        <a
          href="/home/memo"
          className="flex flex-col items-center space-y-1 text-gray-500 hover:text-blue-600 w-1/3"
        >
          <BookA className="w-6 h-6" />
          <span className="text-xs">メモ</span>
        </a>
      </nav>
    </div>
  );
}
