import { NextPage } from "next";
import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const CardContainer: NextPage<Props> = ({children}) => {
  return (
    <div>
      Enter
    </div>
  );
}


export default CardContainer;