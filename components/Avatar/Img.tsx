import Image from "next/image";
import { NextPage, NextComponentType } from "next";

interface Props {
    url: string
    borderColor: string
    
}

const Img: NextPage<Props> = (props) => {
    const { url, borderColor } = props

    const loaderProp =({ src, width }) => {
        return `${src}?size=${width - 56}`;
      }

    return (
        <Image 
            style={{ '--tw-ring-color': 'rgb(22 163 74)' }}
            src={url}
            alt='BossDailys pfp'
            className="w-10 h-10 rounded-full ring p-1 overflow-visible"
            height={1024}
            width={1024}
            loader={loaderProp}
        />
    );
}

export default Img;