import { MoveDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "../ui/card";
export function InternSchedule() {
  return (
    <div className="m-auto max-w-2xl bg-gray-100 p-8">
      <h2 className="text-3xl">インターン名</h2>
      <div className="flex mt-6">
        <p className="text-xl">日程 : </p>
        <p className="text-xl">10/26 ~ 10/29</p>
      </div>

      <div className="border-t border-gray-300 border-dotted my-4"></div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <p className="flex justify-center text-center m-auto items-center text-xl">
              10/2
            </p>
          </AccordionTrigger>
          <AccordionContent>
            <Card className="max-w-2xl m-auto">
              <div className="flex py-2 px-8">
                <div>
                  <p>8:30　出発</p>
                  <p>8:30　到着</p>
                </div>
                <div className="border-l border-gray-300 h-auto mx-4"></div>
                <p className="text-xl flex justify-cebter m-auto">家</p>
              </div>
            </Card>

            <div className="px-8 flex">
              <MoveDown />
              <p>徒歩</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
