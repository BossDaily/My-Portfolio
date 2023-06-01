"use client"

import { NextPage } from "next";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const LangCardContainer: NextPage<Props> = ({ children }) => {
  return (
    <div className=" px-4 py-8 mx-auto sm:px-6 lg:px-8 rounded-xl flex flex-col sm:flex-row flex-initial flex-wrap">
      <div className="flex flex-col gap-8 rounded-xl lg:grid lg:grid-row lg:grid-cols-3 xl:grid-cols-4">
        {children}
      </div>
    </div>
  );
};

export default LangCardContainer;