import { InternSchedule } from "@/components/schedule/internSchedule";

export default function Home() {
  return (
    <div>
      <header className=" p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-gray-800">スケジュール</h1>
          <div className="border-t border-gray-300 mt-2"></div>
        </div>
      </header>
      <InternSchedule />
    </div>
  );
}
