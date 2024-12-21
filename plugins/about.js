


const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: "dev",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*𝗛𝗜𝗜𝗜 🐱 ${pushname}*

*╰┈───────────────•*
*╭┈───────────────•*
*│  𝚃𝙴𝚁𝚁𝙰 𝙼𝙳 𝙲𝚁𝙴𝙰𝚃𝙾𝚁 :
*│  
*│  𝙳𝙰𝙳𝙳𝚈 𝙸𝙶𝚆𝙴
*│  𝙶𝙸𝚃𝙷𝚄𝙱: https://GitHub.com/DADDY-IGWE
*│  𝚌𝚑𝚊𝚗𝚗𝚎𝚕: https://whatsapp.com/channel/0029VaydjpS7z4kekYAreA2Y
*|𝚛𝚎𝚙𝚘 𝚋𝚘𝚝: https://GitHub.com/DADDY-IGWE/TERRA_MD-V2
*│  
*│  ©𝗜𝗚𝗪𝗘𝗕𝗢𝗧𝗭 𝗶𝗻𝗰
*╰┈───────────────•*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
