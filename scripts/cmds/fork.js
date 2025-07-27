module.exports.config = {
  name: "fork",
  version: 0.2,
  author: "🎀ᵂᴱᴮ_𝐂𝐥𝐢𝐞𝐧𝐭🌐_𝘾𝙝𝙖𝙣𝙣𝙚𝙡_🫩",
  category: "npx",
  description: "🎀ᵂᴱᴮ_𝐂𝐥𝐢𝐞𝐧𝐭🌐_𝐁𝐎𝐓☠️ FORK",
  countdown: 5,
  role: 0,
};

module.exports.onStart = ({}) => {};

module.exports.onChat = async ({ api, event, args }) => {
  try {
    const msg = event.body.toLowerCase();

    if (msg === "/fork" || msg === "fork") {
      api.sendMessage(
        {
          body: 
 `Eyta \n🎀ᵂᴱᴮ_𝐂𝐥𝐢𝐞𝐧𝐭🌐_𝐁𝐎𝐓☠️\n Er fork eta dye apni o banai felen BOT🧠😉
 
  ┏━━━━━━━━━━━━━━━┓\n
    https://github.com/webclientchannel/WEB_CLIENT_MESSENGER_BOT.git\n
  ┗━━━━━━━━━━━━━━━┛
`,
        },
        event.threadID,
        event.messageID
      );
    }
  } catch (err) {
    api.sendMessage(`Error: ${err.message}`, event.threadID, event.messageID);
  }
};
