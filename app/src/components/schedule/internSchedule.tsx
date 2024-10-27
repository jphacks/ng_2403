import { MoveDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "../ui/card";
export function InternSchedule() {
  const tempList = {
    title: "sky株式会社",
    intern_term: [
      { date: "2024-10-25", start: "12:00", end: "18:00" },
      { date: "2024-10-26", start: "12:00", end: "18:00" },
      { date: "2024-10-27", start: "12:00", end: "18:00" },
    ],
    schedule: [
      {
        date: "2024-10-24",
        place: [
          {
            name: "home",
            arrival_time: "none",
            departure_time: "6:00",
            transportation_to_here: "none",
            attribute: "home",
          },
          {
            name: "sky",
            arrival_time: "6:00",
            departure_time: "6:00",
            transportation_to_here: "walk",
            attribute: "intern",
          },
          {
            name: "hotel",
            arrival_time: "6:00",
            departure_time: "none",
            transportation_to_here: "walk",
            attribute: "hotel",
          },
        ],
      },
      {
        date: "2024-10-25",
        place: [
          {
            name: "hotel",
            arrival_time: "none",
            departure_time: "6:00",
            transportation_to_here: "none",
            attribute: "hotel",
          },
          {
            name: "sky",
            arrival_time: "6:00",
            departure_time: "6:00",
            transportation_to_here: "walk",
            attribute: "intern",
          },
          {
            name: "hotel",
            arrival_time: "6:00",
            departure_time: "none",
            transportation_to_here: "walk",
            attribute: "hotel",
          },
        ],
      },
      {
        date: "2024-10-25",
        place: [
          {
            name: "hotel",
            arrival_time: "none",
            departure_time: "6:00",
            transportation_to_here: "none",
            attribute: "hotel",
          },
          {
            name: "sky",
            arrival_time: "6:00",
            departure_time: "6:00",
            transportation_to_here: "walk",
            attribute: "intern",
          },
          {
            name: "home",
            arrival_time: "18:00",
            departure_time: "none",
            transportation_to_here: "walk",
            attribute: "home",
          },
        ],
      },
    ],
    lagguage: [{ name: "おかし", num: 2 }],
  };
  return (
    <div className="m-auto max-w-2xl bg-gray-100 p-8">
      <h2 className="text-3xl">{tempList.title}</h2>
      <div className="flex mt-6">
        <p className="text-xl">日程 : </p>
        <p className="text-xl">
          {tempList.intern_term[0].date.split("-")[1]}/
          {tempList.intern_term[0].date.split("-")[2]} ~
          {tempList.intern_term.at(-1)?.date.split("-")[1]}/
          {tempList.intern_term.at(-1)?.date.split("-")[2]}
        </p>
      </div>

      <div className="border-t border-gray-300 border-dotted my-4"></div>
      {tempList.schedule.map((schedule, index) => (
        <Accordion key={index} type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <p className="flex justify-center text-center m-auto items-center text-xl">
                {schedule.date.split("-")[1]}/{schedule.date.split("-")[2]}
              </p>
            </AccordionTrigger>
            {schedule.place.map((place, index2) => (
              <AccordionContent key={index2}>
                {place.transportation_to_here == "none" ? (
                  <></>
                ) : (
                  <div className="px-8 flex pb-4">
                    <MoveDown />
                    <p>{place.transportation_to_here}</p>
                  </div>
                )}

                <Card className="max-w-2xl m-auto">
                  <div className="flex py-2 px-8">
                    <div>
                      <p>{place.arrival_time}　到着</p>

                      <p>{place.departure_time}　出発</p>
                    </div>
                    <div className="border-l border-gray-300 h-auto mx-4"></div>
                    <p className="text-xl flex justify-cebter m-auto">
                      {place.name}
                    </p>
                  </div>
                </Card>
              </AccordionContent>
            ))}
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}
