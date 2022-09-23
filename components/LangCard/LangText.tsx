import { ReactNode } from "react";
import { NextComponentType, NextPage } from "next";

type Props = {
  children: ReactNode;
};

const LangText: NextPage<Props> = ({ children }) => {
  return <div className="font-helvetica font-bold text-3xl pt-4">{children}</div>;
};

export default LangText;
