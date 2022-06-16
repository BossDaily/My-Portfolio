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
        />
    );
}

export default Img;