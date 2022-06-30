import StatsItem from "./StatsItem";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import StatsContainer from "./StatsContainer";
import { GetServerSideProps, NextPage } from 'next';

type Wakatime = {
    TotalTime: string
}

export const getServerSideProps:GetServerSideProps = async () => {

    const options:RequestInit = {
        method: 'GET',
        headers: {'content-type': 'application/json', Authorization: `Basic OGQ1YmI5MDctMmY1OC00ODRhLWIxZTMtMTU3OTg5YmJiZjVm` }
    }
    const req = await fetch('https://wakatime.com/api/v1/users/current/all_time_since_today', options)
    const time = await req.json()
    console.log(time)
    return {
        props:{
            wakatimeTotal:time
        }
    }
}



const Stats:NextPage<{ time }> = (props) => {
    console.log(props)
    return (
        <StatsContainer>
            <StatsItem stat={`faffdhsjfksdahjfks ${wakatimeTotal}`} icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'/>
            <StatsItem stat="faffdhsjfksdahjfks" icon='https://site-assets.fontawesome.com/releases/v6.1.1/svgs/solid/display-code.svg'/>
            <StatsItem stat="faffdhsjfksdahjfks" icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'/>
        </StatsContainer>
    );
}

export default Stats;