module.exports = {
  config: {
    name: "ping",
    aliases: ["ms"],
    version: "1.0",
    author: "🎀ᵂᴱᴮ_𝐂𝐥𝐢𝐞𝐧𝐭🌐_𝘾𝙝𝙖𝙣𝙣𝙚𝙡_🫩",
    role: 0,
    shortDescription: {
      en: "Displays the current ping of the bot's system."
    },
    longDescription: {
      en: "Displays the current ping of the bot's system."
    },
    category: "System",
    guide: {
      en: "Use {p}ping to check the current ping of the bot's system."
    }
  },
  onStart: async function ({ api, event, args }) {
    const timeStart = Date.now();
    await api.sendMessage("Checking 🎀ᵂᴱᴮ_𝐂𝐥𝐢𝐞𝐧𝐭🌐_𝐁𝐎𝐓☠️ ping", event.threadID);
    const ping = Date.now() - timeStart;
    api.sendMessage(`The current ping is ${ping}ms.`, event.threadID);
  }
};
