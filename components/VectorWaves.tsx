import { NextComponentType, NextPage } from "next";
import Image from 'next/image'

interface Props {
    url: String
}

const VectorWaves: NextPage<Props> = (props) => {
    const { url } = props
    return (
        <div style={{ backgroundImage:`url(${url})` }} className="aspect-[960/300] w-full bg-no-repeat bg-center bg-cover " />
    );
}

export default VectorWaves;