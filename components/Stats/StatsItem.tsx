
import { NextPage } from "next";
import Image from "next/image";
import { ReactNode } from "react";

type Props = {
    icon: string
    stat: string
}
const StatsItem: NextPage<Props> = ({ icon, stat }) => {
    return (
        <div>
            <div className="p-8">
                <Image src={icon} height={100} width={100} className="invert" />
                <p className="mt-1 text-10xl font-medium">{stat}</p>
            </div>
        </div>
    );
}

export default StatsItem;