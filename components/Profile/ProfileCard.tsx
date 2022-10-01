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

const ProfileCard: NextPage = ({
  discord,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { loading, status } = useLanyard({
    userId: "274973338676494347",
    socket: true,
  });

  return (
    <div className="w-80 h-full bg-Medium-Purple flex flex-col rounded-lg">
      <h1>fortnite</h1>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const discordQuery = await fetch(
    "https://discord.com/api/users/274973338676494347",
    {
      method: "GET",
      headers: {
        Authorization: `Bot ${process.env.DISCORD_SECRET}`,
      },
    }
  );
  const discord: any = await discordQuery
    .json()
    .then(() => console.log(discord));

  return {
    props: {
      discord,
    },
  };
};

export default ProfileCard;
