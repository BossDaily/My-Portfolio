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
import ProfileSpotify from "./ProfileSpotify";
import { Card } from "../../@/components/ui/card";

const ProfileCard: NextPage = () => {
  const { loading, status } = useLanyard({
    userId: "274973338676494347",
    socket: true,
  });

  const spotifyCheck = () => {
    if (status?.spotify) {
      return (
        <ProfileSpotify
          image={status.spotify.album_art_url}
          album={status.spotify.album}
          artist={status.spotify.artist}
          title={status.spotify.song}
          startTimestamp={status.spotify.timestamps.start}
          endTimestamp={status.spotify.timestamps.end}
        />
      );
    }
  };
  if (loading === false) {
    return (
      <div>
        <Card
          key="1"
          className="rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto hover:shadow-xl transition-all duration-200 bg-Medium-Purple flex flex-col"
        >
          <ProfilePic
            url={`https://cdn.discordapp.com/avatars/${status?.discord_user.id}/${status?.discord_user.avatar}.png`}
            status={status?.discord_status!}
          />
          <div className="m-2 bg-Purple-Heart rounded-xl">
            <h1 className="font-helvetica font-bold text-2xl p-2">
              {status?.discord_user.username}
            </h1>
            <ProfileActivityContainer>
              {spotifyCheck()}
              {status?.activities.map((activity) => {
                if (activity.type === 0) {
                  return (
                    <ProfileActivity
                      details={activity.details!}
                      largeImage={activity.assets?.large_image!}
                      smallImage={activity.assets?.small_image!}
                      name={activity.name}
                      state={activity.state}
                      applicationId={activity.application_id!}
                    />
                  );
                }
              })}
            </ProfileActivityContainer>
          </div>
        </Card>
      </div>
    );
  }
};

export default ProfileCard;
{
  /* <div className="w-80 max-h-full bg-Medium-Purple flex flex-col rounded-lg"> */
}
