import { NextPage } from "next";
import { ReactNode } from "react";

type Props = {
    children: ReactNode
}
const StatsContainer: NextPage<Props> = ({ children }) => {
    return (
        <div className="bg-Windsor max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8 rounded-xl flex flex-col sm:flex-row  ">
            <div className="flex flex-col gap-20 rounded-xl lg:flex-row">
                {children}
            </div> 
        </div>
    );
}

export default StatsContainer;