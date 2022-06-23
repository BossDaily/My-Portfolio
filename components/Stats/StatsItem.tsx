import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import { ReactNode } from "react";

type Props = {
    icon: string
    stat: string
}
const StatsItem: NextPage<Props> = ({ icon, stat }) => {
    return (
        <div>
            <li className="p-8">
                <FontAwesomeIcon />
                <p className="mt-1 text-10xl font-medium">Websites</p>
            </li>
        </div>
    );
}

export default StatsItem;