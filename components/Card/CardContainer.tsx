import { NextPage } from "next";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const CardContainer: NextPage<Props> = ({ children }) => {
  return (
    <div className="snap-x snap-proximity sm:px-6 sm:pb-0 pt-4 pb-2 rounded-xl flex sm:flex-none sm:grid flex-cols sm:grid-cols-8 overflow-x-auto md:grid-cols-3 gap-2 md:pt-12 sm:overflow-x-visible">
      {children}
    </div>
  );
};

export default CardContainer;
