
import { NextPage } from "next";
import Image from "next/image";
import { ReactNode } from "react";

type Props = {
    icon: string
    stat: string
}
const StatsItem: NextPage<Props> = ({ icon, stat }) => {
    return (
        <div className="p-8 flex flex-col items-center">
            <Image
                src={icon}
                height={100}
                width={100}
                className="brightness-0 invert"
                style={{
                    maxWidth: "100%",
                    height: "auto"
                }} />
            <p className="mt-1 font-medium text-3xl text-center">{stat}</p>
        </div>
    );
}

export default StatsItem;