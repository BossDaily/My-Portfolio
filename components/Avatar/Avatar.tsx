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
                <Img url="https://cdn.discordapp.com/avatars/274973338676494347/2af179fb4264675156eb2081fea20a51.png" borderColor="" />
            </div>
        )
    }

}

export default Avatar;