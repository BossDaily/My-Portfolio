import { NextComponentType, NextPage } from "next";
import Image from "next/image";
import { ReactNode } from "react";
import LangIcon from "./LangIcon";
import LangText from "./LangText";

type Props = {
  lang: string;
  icon: string;
};

const LangCard: NextPage<Props> = ({ lang, icon }) => {
  return (
    <div className="h-20 flex gap-2 flex-row w-60 bg-Purple-Heart rounded-xl justify-center hover:-translate-y-1 hover:scale-110">
      <LangIcon icon={icon} />
      <LangText>
        Javascript
      </LangText>
    </div>
  );
};

export default LangCard;
