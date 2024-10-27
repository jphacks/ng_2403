"use client";

import { useState } from "react";
import { Input } from "../ui/input";

export function InputScheduleComponent() {
  // 各入力フィールドの状態を管理するためのステート
  const [title, setTitle] = useState<string>("");
  const [home, setHome] = useState<string>("");
  const [internLocation, setInternLocation] = useState<string>("");
  const [isAddHotel, setIsAddHotel] = useState<boolean>(false);
  const [hotel, setHotel] = useState<string>("");

  // 複数の時間セットを管理するステート
  const [timeSets, setTimeSets] = useState<
    { date: string; startTime: string; endTime: string }[]
  >([{ date: "", startTime: "", endTime: "" }]);

  // 持ち物リストを管理するステート
  const [items, setItems] = useState<string[]>([""]);

  // フォームの送信イベントハンドラ
  const handleSubmit = () => {
    // alert(
    //   `タイトル: ${title}\n` +
    //     `場所: ${location}\n` +
    //     `時間セット: ${timeSets
    //       .map(
    //         (set, index) =>
    //           `\n  セット${index + 1} - 日付: ${set.date}, 開始: ${
    //             set.startTime
    //           }, 終了: ${set.endTime}`
    //       )
    //       .join("")}\n` +
    //     `持ち物: ${items.join(", ")}`
    // );
    const 

  };

  // 時間セットの変更イベントハンドラ
  const handleTimeSetChange = (
    index: number,
    field: keyof (typeof timeSets)[0],
    value: string
  ) => {
    const newTimeSets = [...timeSets];
    newTimeSets[index][field] = value;
    setTimeSets(newTimeSets);
  };

  // 新しい時間セットを追加
  const handleAddTimeSet = () => {
    setTimeSets([...timeSets, { date: "", startTime: "", endTime: "" }]);
  };

  // 持ち物の変更イベントハンドラ
  const handleItemChange = (index: number, value: string) => {
    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);
  };

  // 新しい持ち物入力欄を追加
  const handleAddItem = () => {
    setItems([...items, ""]);
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-xl font-bold">イベント情報入力フォーム</h1>

      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="タイトルを入力"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <Input
        type="text"
        value={home}
        onChange={(e) => setHome(e.target.value)}
        placeholder="現在地を入力"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Input
        type="text"
        value={internLocation}
        onChange={(e) => setInternLocation(e.target.value)}
        placeholder="目的地を入力"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {isAddHotel ? (
        <Input
          type="text"
          value={hotel}
          onChange={(e) => setHotel(e.target.value)}
          placeholder="宿泊先を入力"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <button
          onClick={() => setIsAddHotel(true)}
          className="mt-2 px-3 py-1 text-white bg-green-500 rounded-lg hover:bg-green-600"
        >
          宿泊先を入力する
        </button>
      )}

      <div className="w-full">
        <label className="block text-gray-700">時間セット:</label>
        {timeSets.map((timeSet, index) => (
          <div key={index} className="flex space-x-2 mt-2">
            <Input
              type="date"
              value={timeSet.date}
              onChange={(e) =>
                handleTimeSetChange(index, "date", e.target.value)
              }
              className="w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
              type="time"
              value={timeSet.startTime}
              onChange={(e) =>
                handleTimeSetChange(index, "startTime", e.target.value)
              }
              className="w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
              type="time"
              value={timeSet.endTime}
              onChange={(e) =>
                handleTimeSetChange(index, "endTime", e.target.value)
              }
              className="w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
        <button
          onClick={handleAddTimeSet}
          className="mt-2 px-3 py-1 text-white bg-green-500 rounded-lg hover:bg-green-600"
        >
          時間セットを追加
        </button>
      </div>

      <div className="w-full">
        <label className="block text-gray-700">持ち物:</label>
        {items.map((item, index) => (
          <Input
            key={index}
            type="text"
            value={item}
            onChange={(e) => handleItemChange(index, e.target.value)}
            placeholder={`持ち物 ${index + 1}`}
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
        <button
          onClick={handleAddItem}
          className="mt-2 px-3 py-1 text-white bg-green-500 rounded-lg hover:bg-green-600"
        >
          持ち物を追加
        </button>
      </div>

      <button
        onClick={handleSubmit}
        className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
      >
        情報を取得
      </button>
    </div>
  );
}
