import Image from "next/image";
import Img from "./Img";
import { useLanyard } from "react-use-lanyard/dist";
import type { Activity } from "react-use-lanyard/dist";
import { NextPage } from "next";

const Avatar: NextPage = () => {
    const { loading, status } = useLanyard({
        userId: '274973338676494347',
        socket: true
    })
    if (loading === false && status?.discord_status === "online"){
        return (
            <div className="relative overflow-visible">
                <Img url={`https://cdn.discordapp.com/avatars/${status.discord_user.id}/${status.discord_user.avatar}.png`} borderColor="rgb(59, 165, 93)" />
            </div>
        )
    } else if (loading === false && status?.discord_status === "idle") {
        return (
            <div className="relative overflow-visible">
                <Img url={`https://cdn.discordapp.com/avatars/${status.discord_user.id}/${status.discord_user.avatar}.png`} borderColor="rgb(250, 168, 26)" />
            </div>
        )
    } else if (loading === false && status?.discord_status === "dnd") {
        return (
            <div className="relative overflow-visible">
                <Img url={`https://cdn.discordapp.com/avatars/${status.discord_user.id}/${status.discord_user.avatar}.png`} borderColor="rgb(237, 66, 69)" />
            </div>
        )
    } else if (loading === false && status?.discord_status === "offline") {
        return (
            <div className="relative overflow-visible">
                <Img url={`https://cdn.discordapp.com/avatars/${status.discord_user.id}/${status.discord_user.avatar}.png`} borderColor="rgb(116, 127, 141)" />
            </div>
        )
    }

}

export default Avatar;