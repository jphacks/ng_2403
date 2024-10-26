import React from "react";

interface UserInfo {
  id: string | null;
  UserInfoSet: React.Dispatch<React.SetStateAction<UserInfo | null>>;
}

export default UserInfo;
