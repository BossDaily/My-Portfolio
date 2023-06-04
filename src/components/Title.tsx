"use client"

import { NextComponentType, NextPage } from "next";
import { ReactNode } from "react";

import Image from "next/image"


type Props = {
  children: ReactNode
}

const Title: NextPage<Props> = ({ children }) => {
    
    return (
        <div className="font-helvetica text-white text-6xl font-bold px-4 pt-20 sm:pt-0 sm:pb-8">
          {children}
        </div>
    );
}

export default Title;