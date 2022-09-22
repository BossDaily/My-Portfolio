import { NextComponentType, NextPage } from "next";
import { ReactNode } from "react";

type Props = {
  lang: String
  icon: String
};

const LangCard: NextPage<Props> = ({lang, icon}) => {
  return (
    <div className="h-10 flex gap-2 flex-row w-40 bg-Purple-Heart">

    </div>
  )
}

export default LangCard