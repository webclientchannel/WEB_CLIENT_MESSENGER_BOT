module.exports = {
 config: {
 name: "out",
 author: "🎀ᵂᴱᴮ_𝐂𝐥𝐢𝐞𝐧𝐭🌐_𝘾𝙝𝙖𝙣𝙣𝙚𝙡_🫩",
 role: 2, 
 shortDescription: "Make the bot leave the group",
 category: "admin",
 guide: "{pn}"
 },

 onStart: async function ({ api, event }) {
 const threadID = event.threadID;

 // Check if it's a group chat
 const threadInfo = await api.getThreadInfo(threadID);
 if (!threadInfo.isGroup) {
 return api.sendMessage("Apni parben na ey command use korte🦆💨", threadID);
 }

 await api.sendMessage("🎀Allah Hafez all✨\n\n..Ami ey GROUP e thakar joggo na..😔", threadID, () => {
 api.removeUserFromGroup(api.getCurrentUserID(), threadID);
 });
 }
};
