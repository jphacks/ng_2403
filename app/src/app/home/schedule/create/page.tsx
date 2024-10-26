"use client";
import { InputScheduleComponent } from "@/components/schedule/createSchedule";
import { useState } from "react";

export default function CreateSchedule() {
  const [internTitle, setInternTitle] = useState<string>("");
  const [isAddTitle, setIsAddTitle] = useState<boolean>(false);

  const titleCheck = () => {
    if (internTitle) {
      setIsAddTitle(true);
    }
  };
  return (
    <div>
      <InputScheduleComponent />
    </div>
  );
}
