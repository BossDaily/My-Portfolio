"use client"

import { NextPage } from "next";
import { ReactNode } from "react";

type Props = {
    children: ReactNode
}
const HeroContainer: NextPage<Props> = ({ children }) => {
    return (
        <div className="grid grid-rows-1 gap-8 sm:grid-cols-1 font-header items-center text-6xl">
            {children}
        </div>
    );
}

export default HeroContainer;