import { NextComponentType, NextPage } from "next";
import Image, { ImageLoaderProps } from "next/image";
import { ReactNode } from "react";

interface Props {
  largeImage: string;
  smallImage: string;
  name: string;
  details: string;
  state: string;
  applicationId: string;
}

const ProfileActivity: NextPage<Props> = (props) => {
  const { largeImage, smallImage, name, details, state, applicationId } = props;

  const loaderProp = ({ src, width }: ImageLoaderProps) => {
    return `${src}?size=${width}`;
  };

  return (
    <div className="flex flex-row gap-1 p-2 text-ellipsis overflow-hidden">
      <div className="relative">
        <Image
          src={`https://cdn.discordapp.com/app-assets/${applicationId}/${largeImage}.png`}
          height={64}
          width={64}
          loader={loaderProp}
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col px-4 text-ellipsis overflow-hidden">
        <ActivityText>{name}</ActivityText>
        <ActivityText>{details}</ActivityText>
        <ActivityText>{state}</ActivityText>
      </div>
    </div>
  );
};

interface AProps {
  children: ReactNode
}

const ActivityText:NextPage<AProps> = ({children}) => {
  return (
    <p className="font-helvetica font-bold text-left text-ellipsis">
      {children}
    </p>
  )
}

export default ProfileActivity;