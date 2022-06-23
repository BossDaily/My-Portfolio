import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import { ReactNode } from "react";

type Props = {
    icon: IconName
    stat: string
}
const StatsItem: NextPage<Props> = ({ icon, stat }) => {
    return (
        <div>
            <li className="p-8">
                <FontAwesomeIcon icon={icon} />
                <p className="mt-1 text-10xl font-medium">{stat}</p>
            </li>
        </div>
    );
}

export default StatsItem;