import { NextComponentType, NextPage } from "next";
import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  children: ReactNode
}
const ProfileActivityContainer: NextPage<Props> = ({children}) => {
  
  return (
    <div className="flex flex-col gap-2">
      {children}
    </div>
  )
};

export default ProfileActivityContainer;
