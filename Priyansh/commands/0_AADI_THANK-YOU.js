const fs = require("fs");
module.exports.config = {
        name: "WELCOMe",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "Welcome",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("welcome")==0 || event.body.indexOf("WELCOME")==0 || event.body.indexOf("Welcome")==0 || event.body.indexOf("स्वागत")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 \n_______________________\n\n🙋  🅃🄷🄰🄽🄺  🅈🄾🅄  🙋\n_______________________",
                                attachment: fs.createReadStream(__dirname + `/noprefix/4c8f428fb10d6727910d7020bd63a12b.gif`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥂", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }