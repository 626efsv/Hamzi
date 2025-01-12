const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports = {
    config: {
        name: "boss",
        version: "1.0.1",
        hasPermssion: 0,
        credits: "SHANKAR SUMAN",
        description: "no prefix",
        usePrefix: false,
        commandCategory: "No command marks needed",
        usages: "Yo Yo",
        cooldowns: 5,
    },

    // Array of Imgur URLs
    handleEvent: async function({ api, event, client, Users, __GLOBAL }) {
        const gifs = [
            "https://i.imgur.com/YyKtaJ0.jpeg",
            "https://i.imgur.com/ohOUkYN.jpeg",
            "https://i.imgur.com/Ncja6rr.jpeg",
            "https://i.imgur.com/jo328Y4.jpeg",
            "https://i.imgur.com/jo328Y4.jpeg",
            "https://i.imgur.com/Svsat8B.jpeg"
        ];

        const message = "𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 𝐁𝐨𝐭 𝐢𝐃 🤖\n\n● ────────────────── ●\n\n𝐌𝐘 𝐎𝐰𝐧𝐞𝐑 𝐒𝐡𝐀𝐀𝐧 𝐊𝐡𝐀𝐧 .... < 𝐄𝐃𝐈𝐓 > .... 🦋🌿𝐀𝐧𝐤𝐇𝐨 𝐌𝐞 𝐏𝐲𝐚𝐑 𝐃𝐢𝐋 𝐌𝐞 𝐊𝐡𝐮𝐌𝐚𝐫 🌬️🌍 ••𝐊𝐚𝐇𝐢 𝐏𝐲𝐚𝐑 𝐓𝐨 𝐍𝐚𝐇𝐢 𝐇𝐨 𝐆𝐚𝐘𝐚 𝐌𝐞𝐫𝐄 𝐒𝐡𝐚𝐚𝐧 𝐊𝐡𝐚𝐧 𝐣𝐢 𝐒𝐞 >³••🕊️🍎\n\n● ────────────────── ●\n\n𝐎𝐰𝐧𝐞𝐫 ➻  𝐒𝐡𝐚𝐚𝐧 𝐊𝐡𝐍";
        const { threadID, messageID } = event;
        const lowerCaseMessage = event.body.toLowerCase();

        if (lowerCaseMessage.startsWith("aadi")) {  
            // Select a random image URL from the array
            const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
            const downloadPath = path.join(__dirname, 'Boss-Jpg-Images.jpg');

            // Download image from the random URL
            request(randomGif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
                const msg = {
                    body: message,
                    attachment: fs.createReadStream(downloadPath)
                };
                api.sendMessage(msg, threadID, messageID);
                api.setMessageReaction("😘", event.messageID, (err) => {}, true);
            });
        }
    },

    run: function({ api, event, client, __GLOBAL }) {
        // Empty run function for module requirements
    },
}