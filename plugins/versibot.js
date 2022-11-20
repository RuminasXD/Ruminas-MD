let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
     𝐕𝐞𝐫𝐬𝐢𝗼𝐧 3.05
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', ' *Version BoT* ', 'status@broadcast')
}
handler.help = ['versibot']
handler.tags = ['info']
handler.command = /^(versibot)$/i

export default handler
