let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
let moment = require('moment-timezone')
let time = moment.tz('Asia/Jakarta').format("HH:mm:ss")
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}} 

conn.sendButtonDoc(m.chat, 'ʜᴀɪ,ᴀᴋᴜ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ʏᴀɴɢ ᴅɪʙᴇʀɪ ɴᴀᴍᴀ sᴀᴋᴜʀᴀʙᴏᴛ,ᴀᴋᴜ ᴅɪ ᴋᴇᴍʙᴀɴɢᴋᴀɴ ᴏʟᴇʜ ꜱᴇꜱᴇᴏʀᴀɴɢ ʏᴀɴɢ ʙᴇʀɴᴀᴍᴀ 𝐑𝐚𝐲𝐡𝐚𝐧,ʙᴇʟɪᴀᴜ ᴍᴀꜱɪʜ ᴘᴇᴍᴜʟᴀ ᴅᴀɴ ᴍᴀꜱɪʜ ʙᴇʟᴀᴊᴀʀ ʙᴀɴʏᴀᴋ ʜᴀʟ,ᴅᴀɴ ᴛᴜᴊᴜᴀɴɴʏᴀ ʜᴀɴʏᴀ ɪɴɢɪɴ ᴛᴀᴜ ʙᴇʀʙᴀɢᴀɪ ʜᴀʟ ʏᴀɴɢ ᴀᴅᴀ ᴅɪᴅᴜɴɪᴀ ʙᴏᴛ,ᴜɴᴛᴜᴋ ᴍᴇʟɪʜᴀᴛ ꜰɪᴛᴜʀ ʙᴏᴛ,ꜱɪʟᴀʜᴋᴀɴ ᴋʟɪᴋ ʙᴜᴛᴛᴏɴ ᴅɪʙᴀᴡᴀʜ\n\nɴᴏᴛᴇ: ʜᴀʀᴀᴘ ɢᴜɴᴀᴋᴀɴ ʙᴏᴛ ꜱᴇᴄᴀʀᴀ ʙɪᴊᴀᴋ ᴅᴀɴ ᴊᴀɴɢᴀɴ ᴅɪꜱᴘᴀᴍ', wm, 'ʟɪꜱᴛᴍᴇɴᴜ', '.menulist', fkontak, { contextInfo: {
externalAdReply :{
    showAdAttribution: true,
    mediaUrl: snh,
    mediaType: 2,
    sourceUrl: snh,
    title: 'Jangan Dispam Ya Kak',
    body: wm,
    thumbnail: await(await fetch(img)).buffer(),
}}})
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i

module.exports = handler


