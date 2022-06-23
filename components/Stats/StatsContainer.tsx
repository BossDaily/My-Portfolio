import { NextPage } from "next";
import { ReactNode } from "react";

type Props = {
    children: ReactNode
}
const StatsContainer: NextPage<Props> = ({ children }) => {
    return (
        <div className="bg-Windsor p-8 rounded-xl m-10">
            {children}
        </div>
    );
}

export default StatsContainer;