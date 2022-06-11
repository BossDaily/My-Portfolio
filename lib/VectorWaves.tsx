import { NextComponentType, NextPage } from "next";
import Image from 'next/image'

interface Props {
    url: String
}

const VectorWaves: NextPage<Props> = (props) => {
    const { url } = props
    return (
        <div className={`aspect-[960/300] bg-no-repeat bg-center bg-cover`}>
            <Image layout="fill" src={`${url}`} />
        </div>
    );
}

export default VectorWaves;