import { NextComponentType, NextPage } from "next";
import { ReactNode } from "react";

import Image from 'next/image'


type Props = {
  children: ReactNode
}

const Title: NextPage<Props> = ({ children }) => {
    
    return (
        <div className="font-helvetica text-white text-6xl font-bold p-10">
          {children}
        </div>
    );
}

export default Title;