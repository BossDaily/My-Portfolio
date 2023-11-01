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
import DiscordAvatar from "../components/Avatar/Avatar";
import HeroContainer from "../components/Hero/HeroContainer";
import TypewriterComponent from "typewriter-effect";
import StatsContainer from "../components/Stats/StatsContainer";
import StatsItem from "../components/Stats/StatsItem";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Title from "../components/Title";
import Card from "../components/Card/Card";
import CardContainer from "../components/Card/CardContainer";
import { Tabs, Flowbite } from "flowbite-react";
import LangCard from "../components/LangCard/LangCard";
import LangCardContainer from "../components/LangCard/LangCardContainer";
import ProfileCard from "../components/Profile/ProfileCard";
import { useLanyard } from "react-use-lanyard/dist";
import { ProjectCard } from "../@/components/project-card";
import { config } from "../config";

const Home: NextPage = ({
  codeTime,
  github,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { loading, status } = useLanyard({
    userId: "274973338676494347",
    socket: true,
  });
  return (
    <div className="m-0 font-helvetica text-white bg-[#10002B] flex flex-col gap-2">
      <Head>
        <meta name="theme-color" content="#1da1f2" />
        <meta name="msapplication-TileColor" content="#1da1f2" />
        <title>{status?.discord_user.username} Personal Website</title>
        <meta
          name="twitter:image"
          content={`https://cdn.discordapp.com/avatars/${status?.discord_user.id}/${status?.discord_user.avatar}.png`}
        ></meta>
      </Head>
      <div className="gap-2">
        <div className="flex justify-center items-center">
          <HeroContainer>
            <h1>Hello Im BossDaily 👋</h1>
            <div className="flex-none flex-nowrap">
              <DiscordAvatar />
            </div>
            <TypewriterComponent
              options={{
                strings: [
                  "Discord Bot Dev",
                  "Web Developer",
                  "Aspiring App Developer",
                  "Open Source Enthusiast",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </HeroContainer>
        </div>
        <TopVectorWaves url={"hero_layered_waves1.svg"} />
        <div className="bg-[#C77DFF]">
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
        </div>
        <BottomVectorWaves url={"stats_bottom_wave2.svg"} />
        <div className="flex flex-col gap-4 justify-center items-center">
          <Title>Projects</Title>
          <CardContainer>
            {config.projects.map((project) => (
              <ProjectCard
                btnName={project.btnName}
                link={project.url}
                title={project.name}
                thumbnail={project.thumbnail}
                tags={project.tags}
              >
                {project.description}
              </ProjectCard>
            ))}
          </CardContainer>
        </div>
        <TopVectorWaves url="bottom-wave4.svg" />
        <div className="bg-[#C77DFF] flex flex-col gap-4 justify-center items-center">
          <Title>Tools I use</Title>
          <Tabs.Group style="pills">
            {config.languages.map((lang) => (
              <Tabs.Item title={lang.type}>
                <LangCardContainer>
                  {lang.languages.map((icon) => (
                    <LangCard lang={icon.name} icon={icon.img} />
                  ))}
                </LangCardContainer>
              </Tabs.Item>
            ))}
          </Tabs.Group>
        </div>
        <BottomVectorWaves url="top-layered-waves4.svg" />
        <div className="flex flex-col gap-4 justify-center items-center flex-grow-0">
          <Title>What I'm upto</Title>
          <ProfileCard />
        </div>
        <TopVectorWaves url="bottom-layered-waves2.svg" />
        <div className="bg-[#C77DFF] flex flex-col gap-4 justify-center items-center">
          <h1>I am BossDaily</h1>
          <p>
            Made by BossDaily with Typescript, NextJS, Apollo GraphQL,
            TailwindCSS, Figma, and ❤️ If you want me to work for you, contact
            me at gboys2008@gmail.com or BossDaily#6016 on Discord
          </p>
        </div>
      </div>
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
