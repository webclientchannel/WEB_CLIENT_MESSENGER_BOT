const axios = require("axios");

const baseApiUrl = async () => {
  const base = await axios.get(
    `https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`
  );
  return base.data.api;
};

(module.exports.config = {
  name: "catbox",
  aliases: ["cat","cb"],
  version: "1.6.9",
  author: "🎀ᵂᴱᴮ_𝐂𝐥𝐢𝐞𝐧𝐭🌐_𝘾𝙝𝙖𝙣𝙣𝙚𝙡_🫩",
  role: 0,
  category: "utility",
  Description: "Convert mp4/mp3/image to link",
  countdown: 5,
  guide: {
    en: "reply to a mp4/mp3/image to upload in catbox"
  }
},

module.exports.onStart = async ({ api, event }) => {
  try {
   const allUrl = event.messageReply?.attachments[0]?.url; 
   if (!allUrl) {
        return api.sendMessage("Ekta image ba video diye reply den ${prefix} catbox jate sheta uplode dite pari🎀", event.threadID, event.messageID);
      };
   const msg = await api.sendMessage("✨ Apnar attachment Uploading Hocche.. Kichukkhon opekkha koren✨", event.threadID);

   const { data } = await axios.get(`${await baseApiUrl()}/catbox?url=${encodeURIComponent(allUrl)}`);

  await api.unsendMessage(msg.messageID);

     api.sendMessage(`🎀 Eta Apnar Uploaded Url ✨\n\n`+ data.url , event.threadID, event.messageID);
        
  } catch (e) {
    api.sendMessage(" Apnar video/image Upload kora jacche na😔", event.threadID);
  }
  });
