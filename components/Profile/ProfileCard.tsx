import { GetServerSideProps, InferGetServerSidePropsType, NextComponentType, NextPage } from "next";
import Image from "next/image";
import { ReactNode } from "react";
import { useLanyard } from "react-use-lanyard/dist";

import type { Activity } from "react-use-lanyard/dist";

const ProfileCard: NextPage = ({discord}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { loading, status } = useLanyard({
    userId: "274973338676494347",
    socket: true,
  });
  console.log(discord)
  return (
    <div className="w-80 h-full bg-Medium-Purple flex flex-col rounded-lg">
      <h1>fortnite</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const discordQuery = await fetch(
    "https://discord.com/api/users/274973338676494347",
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.DISCORD_SECRET}`,
      },
    }
  );
  const discord = await discordQuery.json();
  
  return {
    props: {
      discord,
    },
  };
};

export default ProfileCard;
