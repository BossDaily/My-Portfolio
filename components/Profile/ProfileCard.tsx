import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextComponentType,
  NextPage,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import Image from "next/image";
import { ReactNode } from "react";
import { useLanyard } from "react-use-lanyard/dist";

import type { Activity } from "react-use-lanyard/dist";
import ProfilePic from "./ProfilePic";

const ProfileCard: NextPage = () => {
  const { loading, status } = useLanyard({
    userId: "274973338676494347",
    socket: true,
  });

  return (
    <div className="w-80 h-full bg-Medium-Purple flex flex-col rounded-lg">
      <h1>fortnite</h1>
      <ProfilePic />
    </div>
  );
};


export default ProfileCard;
