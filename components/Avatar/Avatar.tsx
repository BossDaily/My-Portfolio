import Image from "next/image";
import Img from "./Img";
import { useLanyard } from "react-use-lanyard/dist";
import type { Activity } from "react-use-lanyard/dist";
import { NextPage } from "next";

const Avatar = () => {
    const { loading, status } = useLanyard({
        userId: '274973338676494347',
        socket: true
    })
    console.log(status)
    console.log(loading)
    if (loading === false && status?.discord_status === "online"){
        return (
            <div className="relative overflow-visible">
                <Img url={`https://cdn.discordapp.com/avatars/${status.discord_user.id}/${status.discord_user.avatar}.png`} borderColor="rgb(222, 222, 222)" />
            </div>
        )
    }

}

export default Avatar;