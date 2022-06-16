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
        
        <div className=" rounded-full ring p-1 overflow-visible max-w-sm" style={{ '--tw-ring-color': 'rgb(22 163 74)'}}>
            <Image 
            src={url}
            alt='BossDailys pfp'
            className="rounded-full"
            height={1024}
            width={1024}
            loader={loaderProp}
            />
        </div>
    );
}

export default Img;