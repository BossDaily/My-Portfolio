import { NextComponentType, NextPage } from "next";
import Image, { ImageLoaderProps } from "next/image";
import { ReactNode } from "react";

interface Props {
  url: string;
  status: string;
}
const ProfilePic: NextPage<Props> = (props) => {
  const { url, status} = props
  const loaderProp =({ src, width }: ImageLoaderProps) => {
    return `${src}?size=${width}`;
  }
  return (
    <div className="relative">
      <Image src={url} height={128} width={128} loader={loaderProp} className="rounded-full"/>
      <span className="bottom-1 left-20 absolute  w-8 h-8 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
    </div>
  );
};

export default ProfilePic;
