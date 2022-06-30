import StatsItem from "./StatsItem";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import StatsContainer from "./StatsContainer";
import { GetServerSideProps } from 'next';


export const getServerSideProps:GetServerSideProps = async (ctx) => {

    const options:RequestInit = {
        method: 'POST',
        headers: {'content-type': 'application/json', Authorization: `Basic ${process.env.WAKATIME}` }
    }
    const reqCodeTime = await fetch('https://wakatime.com/api/v1/users/current/all_time_since_today', options)
    const totalCodeTime = await reqCodeTime.json()

    return {
        props:{
            wakatimeTotal:totalCodeTime.data.text
        }
    }
}



const Stats = (wakatimeTotal: string) => {
    return (
        <StatsContainer>
            <StatsItem stat={`faffdhsjfksdahjfks ${wakatimeTotal}`} icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'/>
            <StatsItem stat="faffdhsjfksdahjfks" icon='https://site-assets.fontawesome.com/releases/v6.1.1/svgs/solid/display-code.svg'/>
            <StatsItem stat="faffdhsjfksdahjfks" icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'/>
        </StatsContainer>
    );
}

export default Stats;