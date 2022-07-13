import type { NextComponentType, NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BottomVectorWaves from '../components/Waves/BottomVectorWaves'
import TopVectorWaves from '../components/Waves/TopVectorWaves'
import Avatar from '../components/Avatar/Avatar'
import HeroContainer from '../components/Hero/HeroContainer'
import TypewriterComponent from 'typewriter-effect'
import StatsContainer from '../components/Stats/StatsContainer'
import StatsItem from '../components/Stats/StatsItem'
import { gql } from '@apollo/client'
import client from '../apollo-client'


const Home: NextPage = ({codeTime, github}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="m-0 font-helvetica text-white bg-[#10002B]">
      <section>
        <HeroContainer>
          <h1>Hello Im BossDaily 👋</h1>
          <div className="flex-none flex-nowrap">
            <Avatar />
          </div>
            <TypewriterComponent
              options={{
                strings: ['Discord Bot Dev', 'Web Developer', 'Aspiring App Developer', 'Open Source Enthusiast', 'Minecraft server owner', 'Sigma Male'],
                autoStart: true,
                loop: true
                
              }}
            />  
        </HeroContainer>
      </section>
      <TopVectorWaves url={'hero_layered_waves1.svg'} />
      <section className="bg-[#C77DFF]">
        <div className="items-center" >
          <StatsContainer>
            <StatsItem stat="faffdhsjfksdahjfks" icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'/>
            <StatsItem stat={`${codeTime.data.text} programmed`} icon='https://site-assets.fontawesome.com/releases/v6.1.1/svgs/solid/display-code.svg'/>
            <StatsItem stat="faffdhsjfksdahjfks" icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'/>
          </StatsContainer>
        </div>
      </section>
      <BottomVectorWaves url={'stats_bottom_wave2.svg'} />
      <section >
        <h1>I am BossDaily</h1>
        <p>I am BossDaily, one of the greatest programmers to ever touch a computer. I program using pen and paper, I remember and then manually switch transistors. Compiliers? Languages? Only losers use those. I can make any program I can think of within 2 hours, I've made fully custom everything because I am afraid the government has a backdoor in everything. I live in a van and I travel america living off of fastfood, willpower, and github sponsorships.</p>
      </section>
      <TopVectorWaves url="bottom-wave4.svg" />
      <section className="bg-[#C77DFF]">
        <h1>I am BossDaily</h1>
        <p>I am BossDaily, one of the greatest programmers to ever touch a computer. I program using pen and paper, I remember and then manually switch transistors. Compiliers? Languages? Only losers use those. I can make any program I can think of within 2 hours, I've made fully custom everything because I am afraid the government has a backdoor in everything. I live in a van and I travel america living off of fastfood, willpower, and github sponsorships.</p>
      </section>
      <BottomVectorWaves url="top-layered-waves4.svg" />
      <section>
        <h1>I am BossDaily</h1>
        <p>I am BossDaily, one of the greatest programmers to ever touch a computer. I program using pen and paper, I remember and then manually switch transistors. Compiliers? Languages? Only losers use those. I can make any program I can think of within 2 hours, I've made fully custom everything because I am afraid the government has a backdoor in everything. I live in a van and I travel america living off of fastfood, willpower, and github sponsorships.</p>
      </section>
      <TopVectorWaves url="bottom-layered-waves2.svg" />
      <section className="bg-[#C77DFF]">
        <h1>I am BossDaily</h1>
        <p>I am BossDaily, one of the greatest programmers to ever touch a computer. I program using pen and paper, I remember and then manually switch transistors. Compiliers? Languages? Only losers use those. I can make any program I can think of within 2 hours, I've made fully custom everything because I am afraid the government has a backdoor in everything. I live in a van and I travel america living off of fastfood, willpower, and github sponsorships.</p>
      </section>
    </div>
  )
}

export const getServerSideProps:GetServerSideProps = async () => {

    
  const waka = await fetch('https://wakatime.com/api/v1/users/current/all_time_since_today', {
      method: 'GET',
      headers: {'content-type': 'application/json', 'Authorization': `Basic ${process.env.WAKATIME}` }
  })
  const codeTime = await waka.json()
  
  const github = await client.query({
    query: gql`
      query($login: String!, $includeUserRepositories: Boolean) {
        user(login: $login) {
          repositoriesContributedTo(includeUserRepositories: $includeUserRepositories) {
            totalCount
          }
          contributionsCollection {
            totalCommitContributions
          }
        }
      }
    `,
    variables: {
      "login": "BossDaily",
      "includeUserRepositories": true
    }
  })
  
  return {
      props:{
          codeTime,
          github
      }
  }
}


export default Home
