import { NextPage } from "next";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const CardContainer: NextPage<Props> = ({ children }) => {
  return (
    <div className=" p-10 mx-auto sm:px-6 lg:px-8 rounded-xl grid grid-col sm:grid-row grid-cols-3 gap-8 sm:grid-cols-1">
      {children}
    </div>
  );
};

export default CardContainer;
