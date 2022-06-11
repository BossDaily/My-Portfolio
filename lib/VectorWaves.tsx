import { NextComponentType, NextPage } from "next";

interface Props {
    url: String
}

const VectorWaves: NextPage<Props> = (props) => {
    const { url } = props
    return (
        <div className={`aspect-[960/300] w-full bg-no-repeat bg-center bg-cover bg-[url(${url})]`}></div>
    );
}

export default VectorWaves;