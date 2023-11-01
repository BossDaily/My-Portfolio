export const config = {
  discordId: "YOUR_DISCORD_ID",
  projects: [
    {
      name: "Observer Bot",
      url: "https://github.com/ComparatorCraftSMP/observer-bot-ts",
      btnName: "Repo",
      thumbnail:
        "https://media.discordapp.net/attachments/762750022495764491/1008492252978479204/Discord_gjFYUMtrES.png",
      description: `Observer Bot is a Discord bot I built for my Minecraft server in
      Discord.js. This bot mainly queries stats from a Minecraft server
      with ServerTAP installed and shows them in a Discord embed. I made
      this because a lot of other solutions to do this sucked so I
      thought I would make one myself. The bot also shows information
      about the Discord server it is on, and members in the Discord
      server. And soon it will be able to show stats about the Minecraft
      server.`,
      tags: [
        "Discord.js",
        "Typescript",
        "Node.js",
        "Minecraft",
        "REST-API",
        "SQLite",
      ],
    },
    {
      name: "Analog",
      url: "https://github.com/analog-org",
      btnName: "Repo",
      thumbnail:
        "https://media.discordapp.net/attachments/762750022495764491/1008503532212723833/firefox_l4bUPTd4zu.png",
      description: `Analog is a project im working on that will be the best open
      source discord bot available. I intend it to be easy to self-host,
      have a webpanel, and have a plugin system/plugin market place. Im
      working on building a bot template for building Discord bots in
      Typescript, and another one for building bots with Typescript and
      NextJS. Analog will also need a plugin repo, a landing page, and
      several documentation pages.`,
      tags: [
        "Discord.js",
        "Typescript",
        "Sapphire.js",
        "REST-APIs",
        "Prisma",
        "MySQL",
        "Svelte",
        "Svelte-Kit",
        "TailwindCSS",
      ],
    },
    {
      name: "S.I.M.P.S",
      url: "https://github.com/simpsmc",
      btnName: "Repo",
      thumbnail:
        "https://media.discordapp.net/attachments/762750022495764491/1008503532212723833/firefox_l4bUPTd4zu.png",
      description: `S.I.M.P.S. stands for Server Integrated Multi Punishment System,
      aims to be an innovative and new global ban list of problematic
      players in smaller Minecraft SMP communities. I built them a
      Discord bot that admins can use to add, edit, and view the database of
      players from Discord. This bot is functional but the repo is private at the moment.`,
      tags: [
        "Discord.js",
        "Typescript",
        "REST-APIs",
        "Prisma",
        "MySQL",
        "Minecraft",
      ],
    },
  ],
  languages: [{ type: "language", languages: [{ name: "name", img: "img" }] }],
};
