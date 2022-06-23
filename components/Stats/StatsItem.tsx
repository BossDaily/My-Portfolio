
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
            <li className="p-8">
                <Image src={icon} layout='fill' />
                <p className="mt-1 text-10xl font-medium">{stat}</p>
            </li>
        </div>
    );
}

export default StatsItem;