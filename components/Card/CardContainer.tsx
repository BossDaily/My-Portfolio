import { NextPage } from "next";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const CardContainer: NextPage<Props> = ({ children }) => {
  return (
    <div className=" px-4 py-8 mx-auto sm:px-6 lg:px-8 rounded-xl flex flex-col sm:flex-row flex-initial flex-wrap">
      {children}
    </div>
  );
};

export default CardContainer;
