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
    <div className="relative p-2">
      <Image src={url} height={128} width={128} loader={loaderProp} className="rounded-full"/>
      <span className="bottom-2 left-24 absolute  w-10 h-10 bg-green-400 border-2 border-Medium-Purple rounded-full"></span>
    </div>
  );
};

export default ProfilePic;
