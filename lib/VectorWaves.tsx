const VectorWaves = ({url}: string) => {
    return (
        <div className={`aspect-[960/300] w-full bg-no-repeat bg-center bg-cover bg-[url(${url})]`}></div>
    );
}

export default VectorWaves;