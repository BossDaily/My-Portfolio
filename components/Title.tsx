import { NextComponentType, NextPage } from "next";
import { ReactNode } from "react";

import Image from 'next/image'


type Props = {
  children: ReactNode
}

const Title: NextPage<Props> = ({ children }) => {
    
    return (
        <div className="font-helvetica text-white text-4xl font-bold">
          {children}
        </div>
    );
}

export default Title;