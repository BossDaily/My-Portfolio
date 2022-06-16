import Image from "next/image";
import Img from "./Img";
import Status from "./Status";

const Avatar = () => {
    return (
        <div className="relative">
            <Img url="https://cdn.discordapp.com/avatars/274973338676494347/2af179fb4264675156eb2081fea20a51.png" />
            <Status />
        </div>
    );
}

export default Avatar;