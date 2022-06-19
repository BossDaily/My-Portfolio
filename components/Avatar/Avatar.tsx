import Image from "next/image";
import Img from "./Img";
import { useLanyard } from "react-use-lanyard/dist";
import type { Activity } from "react-use-lanyard/dist";
import { NextComponentType, NextPage, NextPageContext } from "next";
import { Tooltip } from "flowbite-react";

const Avatar: NextPage = () => {

    const { loading, status } = useLanyard({
        userId: '274973338676494347',
        socket: true
    })

    const platform = status?.active_on_discord_desktop ? 'Desktop' : 'Mobile'
    

    if (loading === false && status?.discord_status === "online"){
        return (
            <div className="relative overflow-visible">
                <Tooltip content={`Online on Discord ${platform}`} style="dark" placement="bottom" trigger="hover" animation="duration-500" >
                    <Img url={`https://cdn.discordapp.com/avatars/${status.discord_user.id}/${status.discord_user.avatar}.png`} borderColor="rgb(59, 165, 93)" />
                </Tooltip>
            </div>
        )
    } else if (loading === false && status?.discord_status === "idle") {
        return (
            <div className="relative overflow-visible">
                <Tooltip content={`Idle on Discord ${platform}`} style="dark" placement="bottom" trigger="hover" animation="duration-500">
                    <Img url={`https://cdn.discordapp.com/avatars/${status.discord_user.id}/${status.discord_user.avatar}.png`} borderColor="rgb(250, 168, 26)" />
                </Tooltip>
            </div>
        )
    } else if (loading === false && status?.discord_status === "dnd") {
        return (
            <div className="relative overflow-visible">
                <Tooltip content={`DND on Discord ${platform}`} style="dark" placement="bottom" trigger="hover" animation="duration-500">
                    <Img url={`https://cdn.discordapp.com/avatars/${status.discord_user.id}/${status.discord_user.avatar}.png`} borderColor="rgb(237, 66, 69)" />
                </Tooltip>
            </div>
        )
    } else if (loading === false && status?.discord_status === "offline") {
        return (
            <div className="relative overflow-visible">
                <Tooltip style="dark" placement="bottom" trigger="hover" animation="duration-500">
                    <Img url={`https://cdn.discordapp.com/avatars/${status.discord_user.id}/${status.discord_user.avatar}.png`} borderColor="rgb(116, 127, 141)" />
                </Tooltip>
            </div>
        )
    }

}

export default Avatar;