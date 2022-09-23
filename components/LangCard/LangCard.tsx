import { NextComponentType, NextPage } from "next";
import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  lang: string;
  icon: string;
};

const LangCard: NextPage<Props> = ({ lang, icon }) => {
  return (
    <div className="h-20 flex gap-2 flex-row w-60 bg-Purple-Heart rounded-xl content-center">
      <div className="p-2">
        <Image
          src={icon}
          className="rounded-2xl p-2"
          height={64}
          width={64}
          layout="fixed"
        />
      </div>
    </div>
  );
};

export default LangCard;
