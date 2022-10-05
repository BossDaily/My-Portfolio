import { Progress } from "flowbite-react";
import { NextComponentType, NextPage } from "next";
import Image, { ImageLoaderProps } from "next/image";
import { ReactNode } from "react";

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

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2 p-2 text-ellipsis overflow-hidden">
        <div className="relative">
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
          <ActivityText>{artist.replace(';', ',')}</ActivityText>
          <ActivityText>{album}</ActivityText>
        </div>
      </div>
      <div>
        <Progress progress={0} />
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
