import { randomBytes } from 'crypto'

let handler = async (m, { conn, text }) => {
let imgr = flaaa.getRandom()
  let chats = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
  let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
  let teks = text ? text : cc.text
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
  for (let id of chats) {
  await delay(1500)
  await conn.sendHydrated(id, "*「 Broadcast 」* \n\n" + text, wm, imgr + 'Broadcast', sgc, 'Link', null, null, [[null, null]], m)
  }
  m.reply('Selesai Broadcast All Chat :)')
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i

handler.owner = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
const delay = time => new Promise(res => setTimeout(res, time))
const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
