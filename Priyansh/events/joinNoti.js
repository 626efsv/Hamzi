module.exports.config = {
        name: "joinNoti",
        eventType: ["log:subscribe"],
        version: "1.0.1",
        credits: "CatalizCS", //fixing ken gusler
        description: "Notify bot or group member with random gif/photo/video",
        dependencies: {
                "fs-extra": "",
                "path": "",
                "pidusage": ""
        }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

        const path = join(__dirname, "cache", "joinGif");
        if (existsSync(path)) mkdirSync(path, { recursive: true });        

        const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
        const { join } = global.nodemodule["path"];
        const { threadID } = event;
        if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
                api.changeNickname(`{ ${global.config.PREFIX} } × ${(!global.config.BOTNAME) ? "bot" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
                const fs = require("fs");
                return api.sendMessage("Hello Everyone🙋‍♂️", event.threadID, () => api.sendMessage({body:`=𝐎𝐰𝐧𝐞𝐫 ➻ 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 𝐂𝐎𝐍𝐍𝐄𝐂𝐓𝐄𝐃«

𝐁𝐎𝐓  𝐌𝐀𝐃𝐄 𝐁𝐘 𝐀𝐀𝐃𝐈 𝐁𝐀𝐁𝐔
<------------------------------>  
𝐁𝐎𝐓  𝐂𝐎𝐍𝐍𝐄𝐂𝐓𝐄𝐃 𝐒𝐔𝐂𝐂𝐄𝐒𝐅𝐔𝐋  

𝐀𝐏𝐏𝐑𝐎𝐕𝐀𝐋 𝐀𝐋𝐋𝐎𝐖 𝐈𝐍 𝐓𝐇𝐈𝐒 𝐆𝐑𝐎𝐔𝐏
<──────────────────── >

𝐒𝐄 𝐇𝐄𝐋𝐏 𝐓𝐎 𝐒𝐄𝐄 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 
\n\nUse ${global.config.PREFIX}help to see commands.\n\nexample :\n${global.config.PREFIX}video7 (video songs)\n${global.config.PREFIX}music (audio songs)\n${global.config.PREFIX}help2 (command list)\n${global.config.PREFIX}info 
<<<<<------------------------------>>>>>
𝐀𝐍𝐃 𝐅𝐎𝐑 𝐀𝐍𝐘 𝐑𝐄𝐏𝐎𝐑𝐓 𝐎𝐑 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐁𝐎𝐓 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑

=𝐎𝐰𝐧𝐞𝐫 ➻     𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮

𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 𝐥𝐢𝐧𝐤 😊 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 :- ☞ 

https://www.facebook.com/profile.php?id=100066401546757&mibextid=ZbWKwL

𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐒𝐈𝐓𝐄: N/A

☢️ 𝐅𝐎𝐑 𝐀𝐍𝐘 𝐊𝐈𝐍𝐆 𝐎𝐅𝐅 𝐇𝐄𝐋𝐏 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐎𝐍 𝐈𝐍𝐒𝐓𝐀 𝐈𝐃: N/A

https://www.instagram.com/aadi_singh__143?igsh=MXVneXZ6bzR4bHhvcg==￼

☣️Email: aadibroken046@gmail.com

⚠️Wp: 9548950035 `, attachment: fs.createReadStream(__dirname + "/cache/DhFHY1LcrjWZwBRkMlrtOdHr7QOeiGFMZqBGa4AEErRO.mp4")} ,threadID));
        }
        else {
                try {
                        const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
                        let { threadName, participantIDs } = await api.getThreadInfo(threadID);

                        const threadData = global.data.threadData.get(parseInt(threadID)) || {};
                        const path = join(__dirname, "cache", "joinGif");
                        const pathGif = join(path, `${threadID}.gif`);

                        var mentions = [], nameArray = [], memLength = [], i = 0;

                        for (id in event.logMessageData.addedParticipants) {
                                const userName = event.logMessageData.addedParticipants[id].fullName;
                                nameArray.push(userName);
                                mentions.push({ tag: userName, id });
                                memLength.push(participantIDs.length - i++);
                        }
                        memLength.sort((a, b) => a - b);

                        (typeof threadData.customJoin == "undefined") ? msg = "𝐖𝐞𝐥𝐜𝐨𝐦𝐞   𝐓𝐨  𝐀𝐚𝐝𝐢  𝐛𝐚𝐛𝐮  𝐁𝐨𝐭  😇 ──────────────────\n𝐇𝐄𝐋𝐋𝐎 𝐁𝐀𝐁𝐘\n──────────────────\n🆆 🅴🅻🅻 🅲🅾🅼 🅴\n𝐍𝐄𝐖\n──────────────────\n[ {name} ]\n──────────────────\n𝐌𝐘 𝐆𝐑𝐎𝐔𝐏\n {threadName} \n𝐌𝐀𝐉𝐄 𝐊𝐀𝐑𝐎\n──────────────────𝐎𝐑 𝐓𝐔𝐌 𝐈𝐒 𝐆𝐑𝐎𝐔𝐏 𝐊𝐄 {soThanhVien} 𝐌𝐄𝐌𝐁𝐀𝐑 𝐇𝐎 𝐄𝐍𝐉𝐎𝐘 𝐊𝐀𝐑𝐎 𝐌𝐀𝐉𝐄 𝐋𝐎\n──────────────────\n──────────────────\n=𝐎𝐰𝐧𝐞𝐫 ➻    🌹 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 🌹" : msg = threadData.customJoin;
                        msg = msg
                        .replace(/\{name}/g, nameArray.join(', '))
                        .replace(/\{type}/g, (memLength.length > 1) ?  'You' : 'Friend')
                        .replace(/\{soThanhVien}/g, memLength.join(', '))
                        .replace(/\{threadName}/g, threadName);

                        if (existsSync(path)) mkdirSync(path, { recursive: true });

                        const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

                        if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
                        else if (randomPath.length != 0) {
                                const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
                                formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
                        }
                        else formPush = { body: msg, mentions }

                        return api.sendMessage(formPush, threadID);
                } catch (e) { return console.log(e) };
        }
                    }