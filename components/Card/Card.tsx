import { NextComponentType, NextPage } from "next";

type Props = {};

const Card: NextPage<Props> = (props) => {
  return (
    <div className="bg-Windsor rounded-xl max-w-sm shadow-md">
      <a href="#">
        <img
          src="https://media.discordapp.net/attachments/762750140250718220/1008154919372599366/unknown.png?width=1456&height=910"
          className="rounded-t-xl"
        />
      </a>
      <div className="p-5">
        <a className="">
          <h5 className="text-2xl mb-2 font-bold font-helvetica tracking-tight ">ComparatorCraftSMP</h5>
        </a>
      </div>
    </div>
  );
};

export default Card;
