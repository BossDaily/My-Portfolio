import { Button } from "flowbite-react";
import { NextComponentType, NextPage } from "next";
import { ReactNode } from "react";

type Props = {
  children: ReactNode
  title: string
  link: string
  thumbnail: string
  btnName: string
};

const Card: NextPage<Props> = ({ children, title, link, thumbnail, btnName }) => {
  return (
    <div className="bg-Windsor w-80 rounded-xl shadow-md m-5 lg:max-w-sm max-h-sm sm:w-auto flex flex-col">
      <a href={link}>
        <img
          src={thumbnail}
          className="rounded-t-xl"
        />
      </a>
      <div className="p-5">
        <a className="">
          <h5 className="text-2xl mb-2 font-bold font-helvetica tracking-tight ">
            {title}
          </h5>
        </a>
        <p className="mb-3 ">
          {children}
        </p>
        <a href={link}>
          <Button color="purple">{btnName}</Button>
        </a>
      </div>
    </div>
  );
};

export default Card;
