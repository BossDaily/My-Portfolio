import StatsItem from "./StatsItem";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import StatsContainer from "./StatsContainer";


const Stats = () => {
    return (
        <div>
            <StatsContainer>
                <StatsItem stat="faffdhsjfksdahjfks" icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'/>
                <StatsItem stat="faffdhsjfksdahjfks" icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'/>
                <StatsItem stat="faffdhsjfksdahjfks" icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'/>
            </StatsContainer>
        </div>
    );
}

export default Stats;