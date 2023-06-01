"use client"

import { NextComponentType, NextPage } from "next";
import Image, { ImageLoaderProps } from "next/image";
import { ReactNode } from "react";

interface Props {
  url: string;
  status: string;
}
const ProfilePic: NextPage<Props> = (props) => {
  const { url, status } = props;
  const loaderProp = ({ src, width }: ImageLoaderProps) => {
    return `${src}?size=${width}`;
  };
  switch (status) {
    case "online":
      return (
        <div className="relative p-2">
          <Image
            src={url}
            height={128}
            width={128}
            loader={loaderProp}
            className="rounded-full"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <span className="bottom-2 left-24 absolute  w-9 h-9 bg-green-400 border-2 border-Medium-Purple rounded-full"></span>
        </div>
      );
      break;
    case "idle":
      return (
        <div className="relative p-2">
          <Image
            src={url}
            height={128}
            width={128}
            loader={loaderProp}
            className="rounded-full"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <span className="bottom-2 left-24 absolute  w-9 h-9 bg-yellow-300 border-2 border-Medium-Purple rounded-full"></span>
        </div>
      );
      break;
    case "dnd":
      return (
        <div className="relative p-2">
          <Image
            src={url}
            height={128}
            width={128}
            loader={loaderProp}
            className="rounded-full"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <span className="bottom-2 left-24 absolute  w-9 h-9 bg-red-500 border-2 border-Medium-Purple rounded-full"></span>
        </div>
      );
      break;
    case "offline": 
    return (
      <div className="relative p-2">
      <Image
        src={url}
        height={128}
        width={128}
        loader={loaderProp}
        className="rounded-full"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <span className="bottom-2 left-24 absolute  w-9 h-9 bg-gray-500 border-2 border-Medium-Purple rounded-full"></span>
    </div>
    );
    break;
    
  }
  return (
    <div className="relative p-2">
      <Image
        src={url}
        height={128}
        width={128}
        loader={loaderProp}
        className="rounded-full"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <span className="bottom-2 left-24 absolute  w-9 h-9 bg-green-400 border-2 border-Medium-Purple rounded-full"></span>
    </div>
  );
};

export default ProfilePic;
