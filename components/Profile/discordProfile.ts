const discordProfile = async (discordId) => {
  const discord = await fetch(`https://discord.com/api/users/${discordId}`)
}
export default discordProfile