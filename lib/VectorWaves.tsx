import { NextComponentType, NextPage } from "next";
import Image from 'next/image'

interface Props {
    url: String
}

const VectorWaves: NextPage<Props> = (props) => {
    const { url } = props
    return (
        <Image className={`aspect-[960/300] bg-no-repeat bg-center bg-cover`} layout="fill" src={`${url}`} />
    );
}

export default VectorWaves;