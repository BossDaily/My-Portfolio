import StatsItem from "./StatsItem";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import StatsContainer from "./StatsContainer";
import { GetServerSideProps } from 'next';


export const getServerSideProps:GetServerSideProps = async (ctx) => {
    
    const req = await fetch('https://wakatime.com/api/v1/users/current/all_time_since_today')

    return {
        props:{
            data:null
        }
    }
}



const Stats = () => {
    return (
        <StatsContainer>
            <StatsItem stat="faffdhsjfksdahjfks" icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'/>
            <StatsItem stat="faffdhsjfksdahjfks" icon='https://site-assets.fontawesome.com/releases/v6.1.1/svgs/solid/display-code.svg'/>
            <StatsItem stat="faffdhsjfksdahjfks" icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'/>
        </StatsContainer>
    );
}

export default Stats;