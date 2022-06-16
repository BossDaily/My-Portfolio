import Image from "next/image";
import { NextPage, NextComponentType } from "next";

interface Props {
    url: string
    
}

const Img: NextPage<Props> = (props) => {
    const { url } = props

    const loaderProp =({ src, width }) => {
        return `${src}?size=${width}`;
      }

    return (
        <Image 
            src={url}
            alt='BossDailys pfp'
            className="w-10 h-10 rounded-full"
            height={1024}
            width={1024}
            loader={loaderProp}
        />
    );
}

export default Img;