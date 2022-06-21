import type { NextComponentType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BottomVectorWaves from '../components/Waves/BottomVectorWaves'
import TopVectorWaves from '../components/Waves/TopVectorWaves'
import Avatar from '../components/Avatar/Avatar'
import HeroContainer from '../components/Hero/HeroContainer'
import TypewriterComponent from 'typewriter-effect'

const Home: NextPage = () => {
  return (
    <div className="m-0 font-helvetica text-white bg-[#10002B]">
      <section>
        <HeroContainer>
          <TypewriterComponent
            options={{
              loop={true}
            }}
          />
          <Avatar />
        </HeroContainer>
      </section>
      <TopVectorWaves url={'hero_layered_waves1.svg'} />
      <section className="bg-[#C77DFF]">
        <p>I am BossDaily, one of the greatest programmers to ever touch a computer. I program using pen and paper, I remember and then manually switch transistors. Compiliers? Languages? Only losers use those. I can make any program I can think of within 2 hours, I've made fully custom everything because I am afraid the government has a backdoor in everything. I live in a van and I travel america living off of fastfood, willpower, and github sponsorships.</p>
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
