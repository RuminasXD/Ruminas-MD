import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.packname, global.author)
    if (stiker) return await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, null, adReply)
    throw stiker.toString()
}

handler.customPrefix = /^(huuu)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
 "https://telegra.ph/file/70bdbcdccfb8b8fbfd6ac.png",//Ok Bang [ANM]
 "https://telegra.ph/file/903dbd6f6190a7d068b0b.png",//mengsenyum [ANM]
 "https://telegra.ph/file/971105914f40c0bed5e7a.png",//emuach [ANM]
 "https://telegra.ph/file/6a182392daa480860955f.png",//Tumru [ANM]
 "https://telegra.ph/file/f43c2067e10b19219a0da.png",//hutao kasih jempol [ANM]
 "https://telegra.ph/file/c9efb557c4df3a4e97541.png",//bilek amat hidup :) [ANM]
 "https://telegra.ph/file/0ecab7d01579895ce5c2c.png",//rimuru Â¹ [ANM]
 "https://telegra.ph/file/0738f0bc1a6cc71b25374.png",//raiden ngambek [ANM]
 "https://telegra.ph/file/a574d51acd213ad5f9018.png",//loli ngudud [ANM]
 "https://telegra.ph/file/0589eaf2a29652b1b785d.png",//tatapan cintaðŸ—¿ [ANM]
]
