import { NextPage } from "next";
import { ReactNode } from "react";

type Props = {
    children: ReactNode
}
const HeroContainer: NextPage<Props> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default HeroContainer;