import { NextComponentType, NextPage } from "next";
import Image from "next/image";
import { ReactNode } from "react";
import LangIcon from "./LangIcon";

type Props = {
  lang: string;
  icon: string;
};

const LangCard: NextPage<Props> = ({ lang, icon }) => {
  return (
    <div className="h-20 flex gap-2 flex-row w-60 bg-Purple-Heart rounded-xl content-center">
      <LangIcon icon={icon} />

    </div>
  );
};

export default LangCard;
