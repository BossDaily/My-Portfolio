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
import ProfileActivityContainer from "./ProfileActivityContainer";
import ProfileActivity from "./ProfileActivity";

const ProfileCard: NextPage = () => {
  const { loading, status } = useLanyard({
    userId: "274973338676494347",
    socket: true,
  });
  if (loading === false) {
    return (
      <div className="w-80 max-h-full bg-Medium-Purple flex flex-col rounded-lg">
        <ProfilePic
          url={`https://cdn.discordapp.com/avatars/${status?.discord_user.id}/${status?.discord_user.avatar}.png`}
          status={status?.discord_status!}
        />
        <div className="m-2 bg-Purple-Heart rounded-xl">
          <h1 className="font-helvetica font-bold text-2xl p-2">
            {status?.discord_user.username}#{status?.discord_user.discriminator}
          </h1>
          <ProfileActivityContainer>
            <ProfileActivity
              details="Editing README.md"
              largeImage="565945077491433494"
              name="Visual Studio Code"
              smallImage="565945770067623946"
              state="Workspace: my-portfolio"
              applicationId="383226320970055681"
            />
          </ProfileActivityContainer>
        </div>
      </div>
    );
  }
};

export default ProfileCard;
