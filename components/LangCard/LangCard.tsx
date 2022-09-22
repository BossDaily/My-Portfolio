import { NextComponentType, NextPage } from "next";
import { ReactNode } from "react";

type Props = {
  lang: String
  icon: String
};

const LangCard: NextPage<Props> = ({lang, icon}) => {
  return (
    <div className="h-20 flex gap-2 flex-row w-60 bg-Purple-Heart rounded-xl">
      
    </div>
  )
}

export default LangCard