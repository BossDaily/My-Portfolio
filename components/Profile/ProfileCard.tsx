import { NextComponentType, NextPage } from "next";
import Image from "next/image";
import { ReactNode } from "react";
import { useLanyard } from "react-use-lanyard/dist";

import type { Activity } from "react-use-lanyard/dist";

const ProfileCard: NextPage = () => {
  const { loading, status  } = useLanyard({
    userId: "274973338676494347",
    socket: true,
  })
  const discord = await fetch('https://discord.com/api/users/274973338676494347')
  return (
    <div className="w-80 h-full bg-Medium-Purple flex flex-col rounded-lg">
      <h1>fortnite</h1>
    </div>
  )
};

export default ProfileCard;
