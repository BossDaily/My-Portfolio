"use client"

import Image, { ImageLoaderProps } from "next/image";
import { NextPage, NextComponentType } from "next";

interface Props {
    url: string
    borderColor: string
    
}

const Img: NextPage<Props> = (props) => {
    const { url, borderColor } = props

    const loaderProp =({ src, width }: ImageLoaderProps) => {
        return `${src}?size=${width - 56}`;
      }

    return (
        <div className="rounded-full ring  p-1 overflow-visible max-w-sm max-h-sm" style={{ '--tw-ring-color': `${borderColor}` }}>
            <Image
                src={url}
                alt='BossDailys pfp'
                className="rounded-full"
                height={1024}
                width={1024}
                loader={loaderProp}
                style={{
                    maxWidth: "100%",
                    height: "auto"
                }} />
        </div>
    );
}

export default Img;