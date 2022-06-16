import Image from "next/image";
import { NextPage, NextComponentType } from "next";

interface Props {
    url: string
    
}

const Img: NextPage<Props> = (props) => {
    const { url } = props

    return (
        <Image 
            src={url}
            alt='BossDailys pfp'
            placeholder='blur'
            className="w-10 h-10 rounded-full"
            blurDataURL={url}
            layout='fill'
        />
    );
}

export default Img;