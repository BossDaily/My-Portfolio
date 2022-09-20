import { NextPage } from "next";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const CardContainer: NextPage<Props> = ({ children }) => {
  return (
    <div className="snap-x snap-proximity sm:px-6 sm:pb-0 pt-4 pb-2 sm:w-auto rounded-xl flex-none w-60 grid grid-cols-1 sm:grid-cols-8  md:grid-cols-3 gap-2 md:pt-12">
      {children}
    </div>
  );
};

export default CardContainer;
