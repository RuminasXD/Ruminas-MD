import fetch from 'node-fetch'
import { promises, readFileSync } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss') 
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let pp = hwaifu.getRandom()
    let thum = thumbnailUrl.getRandom()
    let name = await conn.getName(who)
    let pepe = await conn.resize(pp, 350, 400)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    
    let totalf = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
        if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
     
  let cap = `☰ ━━━ ❨ 𝐌𝐄𝐍𝐔 𝐈𝐍𝐅𝐎 ❩ ━━┄┈ ☰
  
➥ *𝐈𝐍𝐅𝐎 USER*
  ◉ 𝐍𝐚𝗺𝐚 : ${name}
  ◉ 𝐒𝐭𝐚𝐭𝐮𝐬 : ${who.premiumTime > 0 ? 'Premium' : 'Free'}
  ◉ L𝐢𝗺𝐢𝐭 : ${limit}
  ◉ S𝐚𝐥𝐝𝗼 : R𝐩 ${money}
  ◉ 𝐄𝐱𝐩 : ${exp}
  ◉ 𝐑𝗼𝐥𝐞 : ${role}
  ◉ 𝐀𝐠𝐞 : ${age}

➥ *𝐈𝐍𝐅𝐎 𝐁𝐎𝐓*
  ◉ R𝐮𝐧𝐧𝐢𝐧𝐠 O𝐧 : linuk
  ◉ M𝗼𝐝𝐞 : Public
  ◉ 𝐓𝐢𝗺𝐞 : ${time} ﹙ɢᴍᴛ +5:30﹚
  ◉ 𝐓𝗼𝐭𝐚𝐥 𝐅𝐞𝐚𝐭𝐮𝐫𝐞 : ${totalf.length}
  ◉ 𝐔𝐬𝐞𝐫 𝐁𝐚𝐧𝐧𝐞𝐝 : ${users.length}
  `
await m.reply('𝗌𝖾𝖽𝖺𝗇𝗀 𝗆𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝗆𝖾𝗇𝗎...')
await conn.sendButton(m.chat, cap, 'ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʜᴀɴ', Buffer.alloc(0), [['List Menu', '.menulist'], ['All Menu', '.? all']], fkontak, { mimetype: "text/rtf", fileName: 'sɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ʜᴀɴ', pageCount: 90000, fileLength: 90000, seconds: 90000, jpegThumbnail: pepe, contextInfo: {
          externalAdReply :{
          showAdAttribution: true,
    mediaUrl: sig,
    mediaType: 2,
    description: "𝗦𝗵𝗶𝗸𝗶𝗺𝗼𝗿𝗶", 
    title: "Follow My Instagram !",
    body: 'Hai ' + name +  ucapan,
    thumbnail: await (await fetch(pp)).buffer(),
    sourceUrl: sig
     }}
  })
}

handler.command = /^(menu|help)$/i

export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
