import type {
  NextComponentType,
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";
import Head from "next/head";
import Image from "next/image";
import BottomVectorWaves from "../components/Waves/BottomVectorWaves";
import TopVectorWaves from "../components/Waves/TopVectorWaves";
import Avatar from "../components/Avatar/Avatar";
import HeroContainer from "../components/Hero/HeroContainer";
import TypewriterComponent from "typewriter-effect";
import StatsContainer from "../components/Stats/StatsContainer";
import StatsItem from "../components/Stats/StatsItem";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Title from "../components/Title";
import Card from "../components/Card/Card";
import CardContainer from "../components/Card/CardContainer";

const Home: NextPage = ({
  codeTime,
  github,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
              strings: [
                "Discord Bot Dev",
                "Web Developer",
                "Aspiring App Developer",
                "Open Source Enthusiast",
                "Minecraft server owner",
                "Sigma Male",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </HeroContainer>
      </section>
      <TopVectorWaves url={"hero_layered_waves1.svg"} />
      <section className="bg-[#C77DFF]">
        <div className="items-center">
          <StatsContainer>
            <StatsItem
              stat={`${github.data.user.repositoriesContributedTo.totalCount} Projects`}
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            />
            <StatsItem
              stat={`${codeTime.data.text} of programming`}
              icon="https://site-assets.fontawesome.com/releases/v6.1.1/svgs/solid/display-code.svg"
            />
            <StatsItem
              stat={`${github.data.user.contributionsCollection.totalCommitContributions} Contributions`}
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            />
          </StatsContainer>
        </div>
      </section>
      <BottomVectorWaves url={"stats_bottom_wave2.svg"} />
      <section>
        <Title>Projects</Title>
        <CardContainer>
          <Card
            btnName="Repo"
            link="https://github.com/ComparatorCraftSMP/observer-bot"
            title="Observer Bot"
            thumbnail="https://media.discordapp.net/attachments/762750022495764491/1008492252978479204/Discord_gjFYUMtrES.png"
          >
            Observer Bot is a Discord bot I built for my Minecraft server in
            Discord.js. This bot mainly queries stats from a Minecraft server
            with ServerTAP installed and shows them in a Discord embed. I made
            this because a lot of other solutions to do this sucked so I thought
            I would make one myself. The bot also shows information about the
            Discord server it is on, and members in the Discord server. And soon
            it will be able to show stats about the Minecraft server.
          </Card>
          <Card
            btnName="Repo"
            link="https://github.com/ana-log"
            title="Analog"
            thumbnail="https://media.discordapp.net/attachments/762750022495764491/1008503532212723833/firefox_l4bUPTd4zu.png"
          >
            Analog is a project im working on that will be the best open source
            discord bot available. I intend it to be easy to self-host, have a
            webpanel, and have a plugin system/plugin market place. Im working
            on building a bot template for building Discord bots in Typescript,
            and another one for building bots with Typescript and NextJS. Analog
            will also need a plugin repo, a landing page, and several
            documentation pages.
          </Card>
          <Card
            btnName="Repo"
            link="https://github.com/simpsmc"
            title="S.I.M.P.S"
            thumbnail="https://media.discordapp.net/attachments/762750022495764491/1008509095491407942/firefox_bUFD7PrOIK.png"
          >
            S.I.M.P.S. stands for Server Integrated Multi Punishment System,
            aims to be an innovative and new global ban list of problematic
            players in smaller Minecraft SMP communities. Im working on the
            Discord bot admins can use to add and review the database of
            players. This bot will use the framework for Discord bots that I
            built for analog meaning it supports modern Discord API features.
          </Card>
        </CardContainer>
      </section>
      <TopVectorWaves url="bottom-wave4.svg" />
      <section className="bg-[#C77DFF]">
        <h1>I am BossDaily</h1>
        <p>
          I am BossDaily, one of the greatest programmers to ever touch a
          computer. I program using pen and paper, I remember and then manually
          switch transistors. Compiliers? Languages? Only losers use those. I
          can make any program I can think of within 2 hours, I've made fully
          custom everything because I am afraid the government has a backdoor in
          everything. I live in a van and I travel america living off of
          fastfood, willpower, and github sponsorships.
        </p>
      </section>
      <BottomVectorWaves url="top-layered-waves4.svg" />
      {/*
        <TopVectorWaves url="bottom-wave4.svg" />
      <section className="bg-[#C77DFF]">
        <h1>I am BossDaily</h1>
        <p>
          I am BossDaily, one of the greatest programmers to ever touch a
          computer. I program using pen and paper, I remember and then manually
          switch transistors. Compiliers? Languages? Only losers use those. I
          can make any program I can think of within 2 hours, I've made fully
          custom everything because I am afraid the government has a backdoor in
          everything. I live in a van and I travel america living off of
          fastfood, willpower, and github sponsorships.
        </p>
      </section>
      <BottomVectorWaves url="top-layered-waves4.svg" />
      <section>
        <h1>I am BossDaily</h1>
        <p>
          I am BossDaily, one of the greatest programmers to ever touch a
          computer. I program using pen and paper, I remember and then manually
          switch transistors. Compiliers? Languages? Only losers use those. I
          can make any program I can think of within 2 hours, I've made fully
          custom everything because I am afraid the government has a backdoor in
          everything. I live in a van and I travel america living off of
          fastfood, willpower, and github sponsorships.
        </p>
      </section>
      */}

      <TopVectorWaves url="bottom-layered-waves2.svg" />
      <section className="bg-[#C77DFF]">
        <h1>I am BossDaily</h1>
        <p>
          Made by BossDaily with Typescript, NextJS, Apollo GraphQL,
          TailwindCSS, Figma, and ❤️ If you want me to work for you, contact me
          at gboys2008@gmail.com or BossDaily#6016 on Discord
        </p>
      </section>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const waka = await fetch(
    "https://wakatime.com/api/v1/users/current/all_time_since_today",
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Basic ${process.env.WAKATIME}`,
      },
    }
  );
  const codeTime = await waka.json();

  const github = await client.query({
    query: gql`
      query ($login: String!, $includeUserRepositories: Boolean) {
        user(login: $login) {
          repositoriesContributedTo(
            includeUserRepositories: $includeUserRepositories
          ) {
            totalCount
          }
          contributionsCollection {
            totalCommitContributions
          }
        }
      }
    `,
    variables: {
      login: "BossDaily",
      includeUserRepositories: true,
    },
  });

  return {
    props: {
      codeTime,
      github,
    },
  };
};

export default Home;
