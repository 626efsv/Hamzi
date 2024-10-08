module.exports.config = {
    name: "Birthday",
    version: "7.3.1",
    hasPermssion: 0,
    credits: "AADI BABU", 
    description: "THIS BOT WAS MADE BY MR AADI BABU",
    commandCategory: "PROFILE DP BIRTHDAY",
    usages: "PREFIX MENTIONS",
    cooldowns: 5,
    dependencies: {
        "axios": "",
        "fs-extra": "",
        "path": "",
        "jimp": ""
    }
};

module.exports.onLoad = async() => {
    const { resolve } = global.nodemodule["path"];
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { downloadFile } = global.utils;
    const dirMaterial = __dirname + `/cache/canvas/`;
    const path = resolve(__dirname, 'cache/canvas/f36aae64fe19a07f30c09b1cd9dfae7f.jpg');
    if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://i.imgur.com/ztDdV8F.jpeg", path);
}

async function makeImage({ one, two }) {
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const axios = global.nodemodule["axios"]; 
    const jimp = global.nodemodule["jimp"];
    const __root = path.resolve(__dirname, "cache", "canvas");

    let batgiam_img = await jimp.read(__root + "/frame.jpeg");
    let pathImg = __root + `/batman${one}_${two}.jpeg`;
    let avatarOne = __root + `/avt_${one}.jpeg`;
    let avatarTwo = __root + `/avt_${two}.jpeg`;

    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));

    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));

    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
    batgiam_img.composite(circleOne.resize(230, 230), 540, 120).composite(circleTwo.resize(350, 350), 65, 65);

    let raw = await batgiam_img.getBufferAsync("image/jpeg");

    fs.writeFileSync(pathImg, raw);
    fs.unlinkSync(avatarOne);
    fs.unlinkSync(avatarTwo);

    return pathImg;
}
async function circle(image) {
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}

module.exports.run = async function ({ event, api, args }) {    
    const fs = global.nodemodule["fs-extra"];
    const { threadID, messageID, senderID } = event;
    const mention = Object.keys(event.mentions);
    if (!mention[0]) return api.sendMessage("Please mention 1 person.", threadID, messageID);
    else {
        const one = senderID, two = mention[0];
        return makeImage({ one, two }).then(path => api.sendMessage({ body: "=𝐎𝐰𝐧𝐞𝐫 ➻    🌹 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 🌹●============================================================● 𝐇𝐚𝐏𝐏𝐘 𝐁𝐢𝐫𝐓𝐡𝐝𝐚𝐘 𝐃𝐞𝐚𝐫 ❤️. 𝐇𝐨𝐏𝐞𝐅𝐮𝐥𝐥𝐘 𝐓𝐡𝐢𝐒 𝐁𝐢𝐫𝐓𝐡𝐝𝐚𝐘 𝐁𝐫𝐢𝐧𝐆𝐬 𝐇𝐚𝐏𝐏𝐢𝐧𝐞𝐒𝐒 𝐀𝐧𝐃 𝐒𝐮𝐜𝐜𝐄𝐬𝐬 𝐈𝐧 𝐘𝐨𝐔𝐫 𝐋𝐢𝐅𝐞 😃❤️. 𝐬𝐓𝐚𝐘 𝐇𝐚𝐏𝐏𝐲 😊 𝐒𝐭𝐚𝐘 𝐇𝐞𝐚𝐥𝐓𝐡𝐘", attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
                                      }
