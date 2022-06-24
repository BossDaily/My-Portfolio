
import { NextPage } from "next";
import Image from "next/image";
import { ReactNode } from "react";

type Props = {
    icon: string
    stat: string
}
const StatsItem: NextPage<Props> = ({ icon, stat }) => {
    return (
        <div className="p-8">
            <Image src={icon} height={100} width={100} className="brightness-0 invert" />
            <p className="mt-1 text-20xl font-medium">{stat}</p>
        </div>
    );
}

export default StatsItem;