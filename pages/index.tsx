import type { NextComponentType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BottomVectorWaves from '../components/Waves/BottomVectorWaves'
import TopVectorWaves from '../components/Waves/TopVectorWaves'
import Avatar from '../components/Avatar/Avatar'
import HeroContainer from '../components/Hero/HeroContainer'
import TypewriterComponent from 'typewriter-effect'
import StatsContainer from '../components/Stats/StatsContainer'

const Home: NextPage = () => {
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
        <StatsContainer>
          <li className="p-8">
            <p className="text-2xl font-header">50</p>
            <p className="mt-1 text-lg font-medium">Websites</p>
          </li>
        </StatsContainer>
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


export default Home
