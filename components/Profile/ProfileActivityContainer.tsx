import { NextComponentType, NextPage } from "next";
import Image from "next/image";
import { ReactNode } from "react";
import { useLanyard } from "react-use-lanyard/dist";
import type { Activity } from "react-use-lanyard/dist";

const ProfileActivityContainer: NextPage = () => {
  const { loading, status } = useLanyard({
    userId: "274973338676494347",
    socket: true,
  });
  
  return <div></div>
};

export default ProfileActivityContainer;
