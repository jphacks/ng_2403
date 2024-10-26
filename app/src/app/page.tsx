"use client";

import { useState, useEffect } from "react";
import LoginButton from "@/components/ui/LoginButton/LoginButton";

import UserInfo from "@/lib/interface/UserInfo";
import Loader from "@/components/parts/loader";

export default function Home() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    setUserInfo({ id: "user123", UserInfoSet: setUserInfo });
  }, []);

  if (!userInfo || !userInfo.id) {
    return <Loader />;
  }

  return (
    <div>
      <h1 className="text-5xl text-center mb-48 mt-20">タイトル</h1>
      <LoginButton userInfo={userInfo} />
    </div>
  );
}
