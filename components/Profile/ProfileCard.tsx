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
  if (loading === false) {
    return (
      <div className="w-80 h-full bg-Medium-Purple flex flex-col rounded-lg">
        <ProfilePic
          url={`https://cdn.discordapp.com/avatars/${status?.discord_user.id}/${status?.discord_user.avatar}.png`}
          status={status?.discord_status!}
        />
      </div>
    );
  }
};

export default ProfileCard;
