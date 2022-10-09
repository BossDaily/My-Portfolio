import dayjs from "dayjs";
import { Progress } from "flowbite-react";
import { NextComponentType, NextPage } from "next";
import Image, { ImageLoaderProps } from "next/image";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  image: string;
  artist: string;
  album: string;
  title: string;
  startTimestamp: number;
  endTimestamp: number;
}

const ProfileSpotify: NextPage<Props> = (props) => {
  const { image, artist, album, title, startTimestamp, endTimestamp } = props;

  const loaderProp = ({ src, width }: ImageLoaderProps) => {
    return `${src}?size=${width}`;
  };
  const songTime = dayjs(endTimestamp);
  const currentSongTime = dayjs(Date.now() - startTimestamp);
  const songLength = dayjs(endTimestamp - startTimestamp);
  const now = dayjs();

  const currentTimeFormat = () => {
    setTimeLeft(currentSongTime.format("mm:ss"));
  };
  const timer = () => {
    setInterval(currentTimeFormat, 500);
  };

  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const timerID = setTimeout(currentTimeFormat, 1000);
    return () => {
      clearTimeout(timerID);
    };
  }, [timeLeft]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2 px-2 text-ellipsis overflow-hidden">
        <div className="relative flex-none">
          <Image
            src={`${image}`}
            height={64}
            width={64}
            loader={loaderProp}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col text-ellipsis overflow-hidden ">
          <ActivityText>{title}</ActivityText>
          <ActivityText>{artist.replace(/(;)/g, ",")}</ActivityText>
          <ActivityText>{album}</ActivityText>
        </div>
      </div>
      <div className="flex flex-col px-2 pb-2">
        <Progress
          progress={Math.floor(
            (currentSongTime.unix() / songLength.unix()) * 100
          )}
          color="purple"
        />
        <div className="flex flex-row justify-between">
          <span className="text-base font-medium text-blue-700 dark:text-white">
            {timeLeft}
          </span>
          <span className="text-sm font-medium text-blue-700 dark:text-white">{`${songLength.format(
            "mm:ss"
          )}`}</span>
        </div>
      </div>
    </div>
  );
};

interface AProps {
  children: ReactNode;
}

const ActivityText: NextPage<AProps> = ({ children }) => {
  return (
    <p className="font-helvetica font-bold text-left text-ellipsis text-sm">
      {children}
    </p>
  );
};

export default ProfileSpotify;
