import { NextComponentType, NextPage } from "next";
import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  icon: string;
};

const LangIcon: NextPage<Props> = ({ icon }) => {
  return (
    <div className="py-2 pl-2">
      <Image src={icon} className="rounded-2xl" height={64} width={64} />
    </div>
  );
};

export default LangIcon;
