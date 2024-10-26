"use client";

import db from "@/lib/database/database";
import { useState, useEffect } from "react";
import LoginButton from "@/components/ui/LoginButton/LoginButton";

import UserInfo from "@/lib/interface/UserInfo";

import { ref, query, get } from "firebase/database";
import Image from "next/image";

// async function getTasks() {
//   const queryRef = query(ref(db, `tasks`));
//   const snapshot = await get(queryRef);
//   console.log(snapshot);
// }

export default function Home() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    setUserInfo({ id: "user123", UserInfoSet: setUserInfo });
  }, []);

  // getTasks();

  if (!userInfo || !userInfo.id) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <LoginButton userInfo={userInfo} />
    </div>
  );
}
