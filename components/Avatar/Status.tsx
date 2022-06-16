import Image from "next/image";
import { NextPage, NextComponentType } from "next";

interface Props {
    color: string

}

const Status = () => {
    return (
        <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full">

        </span>
    );
}

export default Status;