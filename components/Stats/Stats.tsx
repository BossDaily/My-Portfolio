import StatsItem from "./StatsItem";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import StatsContainer from "./StatsContainer";
import { GetServerSideProps, NextPage } from 'next';







const Stats:NextPage<{ jsonreq:string }> = (props) => {
    console.log(props.jsonreq)
    return (
        <StatsContainer>
            <StatsItem stat={`faffdhsjfksdahjfks ${props.jsonreq}`} icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'/>
            <StatsItem stat="faffdhsjfksdahjfks" icon='https://site-assets.fontawesome.com/releases/v6.1.1/svgs/solid/display-code.svg'/>
            <StatsItem stat="faffdhsjfksdahjfks" icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'/>
        </StatsContainer>
    );
}


export default Stats;