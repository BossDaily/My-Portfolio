import { NextPage } from "next";
import { ReactNode } from "react";

type Props = {
    children: ReactNode
}
const StatsContainer: NextPage<Props> = ({ children }) => {
    return (
        <div className="bg-Windsor max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 rounded-xl">
            <ul className="grid grid-cols-2 gap-4 rounded-xl lg:grid-cols-4">
                {children}
            </ul> 
        </div>
    );
}

export default StatsContainer;