import { NextPage } from "next";
import { ReactNode } from "react";

type Props = {
    children: ReactNode
}
const HeroContainer: NextPage<Props> = ({ children }) => {
    return (
        <div className="flex flex-col gap-8 sm:flex-row font-header items-center text-6xl">
            {children}
        </div>
    );
}

export default HeroContainer;