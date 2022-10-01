import { NextComponentType, NextPage } from "next";
import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  url: string;
  status: string;
}
const ProfilePic: NextPage<Props> = ({ url, status }) => {
  return (
    <div className="relative">
      <Image src={url} height={200} width={200} />
    </div>
  );
};

export default ProfilePic;
