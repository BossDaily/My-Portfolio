import { NextPage } from "next";
import { ReactNode } from "react";

type Props = {
    children: ReactNode
}
const StatsContainer: NextPage<Props> = ({ children }) => {
    return (
        <div className="bg-Windsor max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 rounded-xl">
            <div className="flex flex-row gap-4 rounded-xl sm:flex-col">
                {children}
            </div> 
        </div>
    );
}

export default StatsContainer;