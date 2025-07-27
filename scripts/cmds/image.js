const axios = require("axios");

const baseApiUrl = async () => {
  const base = await axios.get(
    `https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`
  );
  return base.data.api;
};

 module.exports.config = {
   name: "imagedata",
   aliases: ["imgd","idata","imgdata"],
   version: "1.6.9",
   author: "🎀ᵂᴱᴮ_𝐂𝐥𝐢𝐞𝐧𝐭🌐_𝘾𝙝𝙖𝙣𝙣𝙚𝙡_🫩",
   countDown: 5,
   role: 0,
   description: "Get data from Images",
   category: "image",
   guide: "{pn} reply to an image"
 };
 
 module.exports.onStart = async ({ api, event, args }) => {
   try {
     const img = event.messageReply?.attachments[0]?.url;
     if (!img) {
       return api.sendMessage("🎀 Please reply to an image!🌊\n\n🎀ᵂᴱᴮ_𝐂𝐥𝐢𝐞𝐧𝐭🌐_𝘾𝙝𝙖𝙣𝙣𝙚𝙡_🫩", event.threadID, event.messageID);
     }
     const { data } = await axios.get(`${await baseApiUrl()}/photo-metadata?imageUrl=${encodeURIComponent(img)}`);
     if (!data || data.error) {
       return api.sendMessage("🌪️ error while fetching image data!🦆💨\n\n🎀ᵂᴱᴮ_𝐂𝐥𝐢𝐞𝐧𝐭🌐_𝘾𝙝𝙖𝙣𝙣𝙚𝙡_🫩", event.threadID, event.messageID);
 }
  const imgD = {
    body: `✅ Here's your image data✨\n\n♡ Format: ${data.format}\n♡ Width: ${data.width}px\n♡ Height: ${data.height}px\n♡ File Size: ${data.fileSizeInKB} KB (${data.fileSizeInMB} MB)\n♡ Color Space: ${data.colorSpace}\n♡ Channels: ${data.channels}\n♡ Bit Depth: ${data.bitDepth}\n♡ Is Progressive: ${data.isProgressive}\n♡ Has Alpha: ${data.hasAlpha}\n♡ Density: ${data.density} DPI\n\n🎀ᵂᴱᴮ_𝐂𝐥𝐢𝐞𝐧𝐭🌐_𝘾𝙝𝙖𝙣𝙣𝙚𝙡_🫩`
 };
  return api.sendMessage(imgD, event.threadID, event.messageID);
   } catch (error) {
     api.sendMessage("Error: " + error.message, event.threadID, event.messageID);
   }
 };
