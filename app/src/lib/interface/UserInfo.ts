import React from "react";

interface UserInfo {
  id: string | null | undefined;
  UserInfoSet: React.Dispatch<React.SetStateAction<UserInfo | null>>;
}

export default UserInfo;
