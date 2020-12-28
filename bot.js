const client = global.client;

client.on("ready", () => {
    console.log("Bot is ready!");
});

client.on("ready", async () => {
  client.user.setPresence({ activity: { name: "Şahmeran ❤️ Can" }, status: "online" });
  let botVoiceChannel = client.channels.cache.get("792815953871110164");
  if (botVoiceChannel) botVoiceChannel.join().catch(err => console.error("Bot ses kanalına bağlanamadı!"));
});

client.login(global.Settings.Token);