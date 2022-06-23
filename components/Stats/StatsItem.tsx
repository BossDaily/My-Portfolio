import { NextPage } from "next";
import { ReactNode } from "react";

type Props = {
    children: ReactNode
}
const StatsItem: NextPage<Props> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default StatsItem;