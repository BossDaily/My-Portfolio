import Image from "next/image";
import Img from "./Img";
import { useLanyard } from "react-use-lanyard/dist";
import type { Activity } from "react-use-lanyard/dist";
import { NextComponentType, NextPage, NextPageContext } from "next";
import { Tooltip } from "flowbite-react";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "../../@/components/ui/avatar";

const DiscordAvatar: NextPage = () => {
  const { loading, status } = useLanyard({
    userId: "274973338676494347",
    socket: true,
  });

  const platform = status?.active_on_discord_desktop ? "Desktop" : "Mobile";

  if (loading === false && status?.discord_status === "online") {
    return (
      <div className="relative overflow-visible justify-self-center items-center">
        <Tooltip
          content={`Online on Discord ${platform}`}
          style="dark"
          placement="bottom"
          trigger="hover"
          animation="duration-500"
        >
          <Avatar className="ring ring-[#3ba55d] w-max h-max">
            <AvatarImage
              src={`https://cdn.discordapp.com/avatars/${status.discord_user.id}/${status.discord_user.avatar}.png`}
              className="max-w-sm max-h-sm"
            />
          </Avatar>
        </Tooltip>
      </div>
    );
  } else if (loading === false && status?.discord_status === "idle") {
    return (
      <div className="relative overflow-visible justify-self-center items-center">
        <Tooltip
          content={`Online on Discord ${platform}`}
          style="dark"
          placement="bottom"
          trigger="hover"
          animation="duration-500"
        >
          <Avatar className="ring ring-[#faa81a] w-max h-max">
            <AvatarImage
              src={`https://cdn.discordapp.com/avatars/${status.discord_user.id}/${status.discord_user.avatar}.png`}
              className="max-w-sm max-h-sm"
            />
          </Avatar>
        </Tooltip>
      </div>
    );
  } else if (loading === false && status?.discord_status === "dnd") {
    return (
      <div className="relative overflow-visible justify-self-center items-center">
        <Tooltip
          content={`Online on Discord ${platform}`}
          style="dark"
          placement="bottom"
          trigger="hover"
          animation="duration-500"
        >
          <Avatar className="ring ring-[#ed4245] w-max h-max">
            <AvatarImage
              src={`https://cdn.discordapp.com/avatars/${status.discord_user.id}/${status.discord_user.avatar}.png`}
              className="max-w-sm max-h-sm"
            />
          </Avatar>
        </Tooltip>
      </div>
    );
  } else if (loading === false && status?.discord_status === "offline") {
    return (
      <div className="relative overflow-visible justify-self-center items-center">
        <Tooltip
          content={`Online on Discord ${platform}`}
          style="dark"
          placement="bottom"
          trigger="hover"
          animation="duration-500"
        >
          <Avatar className="ring ring-[#747f8d] w-max h-max">
            <AvatarImage
              src={`https://cdn.discordapp.com/avatars/${status.discord_user.id}/${status.discord_user.avatar}.png`}
              className="max-w-sm max-h-sm"
            />
          </Avatar>
        </Tooltip>
      </div>
    );
  }
};

export default DiscordAvatar;
