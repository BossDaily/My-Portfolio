import Image from "next/image";
import Img from "./Img";

const Avatar = () => {
    return (
        <div className="relative">
            <Img url='https://cdn.discordapp.com/avatars/274973338676494347/2af179fb4264675156eb2081fea20a51.png?size=1024' />
        </div>
    );
}

export default Avatar;