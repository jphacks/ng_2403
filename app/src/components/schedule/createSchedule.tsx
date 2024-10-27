"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import Internship from "@/lib/class/Internship";
import Schedule from "@/lib/class/Schedule";
import Place from "@/lib/class/Place";
import InternTerm from "@/lib/class/InternTerm";
import DataTable from "@/lib/class/DataTable";
import { useSearchParams } from "next/navigation";
import writeDataTable from "@/lib/function/dao/writeDataTable";

export function InputScheduleComponent() {
  // 各入力フィールドの状態を管理するためのステート
  const [title, setTitle] = useState<string>("");
  const [home, setHome] = useState<string>("");
  const [internLocation, setInternLocation] = useState<string>("");
  const [isAddHotel, setIsAddHotel] = useState<boolean>(false);
  const [hotel, setHotel] = useState<string>("");

  const searchParams = useSearchParams();
  const uid = searchParams.get("uid"); // クエリパラメータを取得

  // 複数の時間セットを管理するステート
  const [timeSets, setTimeSets] = useState<
    { date: string; startTime: string; endTime: string }[]
  >([{ date: "", startTime: "", endTime: "" }]);

  // 持ち物リストを管理するステート
  const [items, setItems] = useState<{ name: string; num: number }[]>([
    { name: "", num: 0 },
  ]);

  // フォームの送信イベントハンドラ
  const handleSubmit = () => {
    // apiを叩いてjsonを取得する処理
    if (isAddHotel) {
      const home_departure = new Date(timeSets[0].startTime)
        .getTime()
        .toString();
      const intern_arrival = new Date(timeSets[0].endTime).getTime().toString();

      const intership_time = new InternTerm(home_departure, intern_arrival);

      fetch(
        `/api/map_decide/${home}/${internLocation}/${home_departure}/${intern_arrival}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          const place_ls = [];
          for (let i = 0; i < data.length; i++) {
            const place = new Place(
              data[i].name,
              data[i].arrivalTime,
              data[i].departureTime,
              "",
              ""
            );
            place_ls.push(place);
          }
          const schedule = new Schedule(timeSets[0].date, place_ls);
          const internship = new Internship(
            title,
            intership_time,
            [schedule],
            items.map((item) => `${item.name} ${item.num}`)
          );
          const data_table = new DataTable(uid, [internship]);

          writeDataTable(data_table)
            .then((res) => {
              console.log(res);
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }
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
  const handleItemChange = (index: number, value: string | number) => {
    const newItems = [...items];
    if (typeof value === "string") {
      newItems[index]["name"] = value;
    }
    if (typeof value === "number") {
      newItems[index]["num"] = value;
    }
    setItems(newItems);
  };

  // 新しい持ち物入力欄を追加
  const handleAddItem = () => {
    setItems([...items, { name: "", num: 0 }]);
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-3xl m-auto">
      <h1 className="text-xl font-bold">イベント情報入力フォーム</h1>
      <div className="w-full max-w-xl">
        <label className="block text-gray-700">タイトル:</label>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="タイトルを入力"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white bg-white"
        />
      </div>

      <div className="w-full max-w-xl">
        <label className="block text-gray-700">出発地点:</label>
        <Input
          type="text"
          value={home}
          onChange={(e) => setHome(e.target.value)}
          placeholder="現在地を入力"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
      </div>

      <div className="w-full max-w-xl">
        <label className="block text-gray-700">目的地:</label>
        <Input
          type="text"
          value={internLocation}
          onChange={(e) => setInternLocation(e.target.value)}
          placeholder="目的地を入力"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
      </div>
      <div className="w-full max-w-xl">
        {isAddHotel ? (
          <>
            <label className="block text-gray-700">宿泊先:</label>
            <Input
              type="text"
              value={hotel}
              onChange={(e) => setHotel(e.target.value)}
              placeholder="宿泊先を入力"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </>
        ) : (
          <button
            onClick={() => setIsAddHotel(true)}
            className="mt-2 px-3 py-1 text-white bg-green-500 rounded-lg hover:bg-green-600"
          >
            宿泊先を入力する
          </button>
        )}
      </div>
      <div className="w-full max-w-xl">
        <label className="block text-gray-700">インターン日程:</label>
        {timeSets.map((timeSet, index) => (
          <div key={index} className="flex space-x-2 mt-2">
            <Input
              type="date"
              value={timeSet.date}
              onChange={(e) =>
                handleTimeSetChange(index, "date", e.target.value)
              }
              className="w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
            <Input
              type="time"
              value={timeSet.startTime}
              onChange={(e) =>
                handleTimeSetChange(index, "startTime", e.target.value)
              }
              className="w-1/3 px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
              type="time"
              value={timeSet.endTime}
              onChange={(e) =>
                handleTimeSetChange(index, "endTime", e.target.value)
              }
              className="w-1/3 px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
        <button
          onClick={handleAddTimeSet}
          className="mt-2 px-3 py-1 text-white bg-green-500 rounded-lg hover:bg-green-600"
        >
          日程を追加
        </button>
      </div>

      <div className="w-full max-w-xl">
        <label className="block text-gray-700">持ち物:</label>
        {items.map((item, index) => (
          <div key={index} className="flex space-x-2 mt-2">
            <Input
              type="text"
              value={item.name}
              onChange={(e) => handleItemChange(index, e.target.value)}
              placeholder={`持ち物 ${index + 1}`}
              className="w-full mt-2 px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
              type="number"
              value={item.num}
              onChange={(e) => handleItemChange(index, Number(e.target.value))}
              placeholder={`数量 ${index + 1}`}
              className="w-full mt-2 px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
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
