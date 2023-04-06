let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
	const sections = [
   {
	title: `💖 Dinuwa Official²⁰²³ 💖 List Options`,
	rows: [
	{title: "✨ | 💖 Dinuwa Official²⁰²³ 💖 Welcome", rowId: `${usedPrefix + command} welcome`},
  {title: "🗣️ | ChatGPT", rowId: `${usedPrefix + command} chatgpt`},
	{title: "🚫 | 💖 Dinuwa Official²⁰²³ 💖 Delete", rowId: `${usedPrefix + command} delete`},
	{title: "👁 | 💖 Dinuwa Official²⁰²³ 💖 Antiviewonce", rowId: `${usedPrefix + command} antiviewonce`}, 
	{title: "🌎 | 💖 Dinuwa Official²⁰²³ 💖 Public", rowId: `${usedPrefix + command} public`},
	{title: "🗣️ | 💖 Dinuwa Official²⁰²³ 💖 Auto-chat", rowId: `${usedPrefix + command} autochat`},
	{title: "🔞 | 💖 Dinuwa Official²⁰²³ 💖 Nsfw", rowId: `${usedPrefix + command} nsfw`},
	{title: "🌟 | 💖 Dinuwa Official²⁰²³ 💖 PremNsfwChat", rowId: `${usedPrefix + command} premnsfwchat`},
	{title: "🔗 | 💖 Dinuwa Official²⁰²³ 💖 Antilink", rowId: `${usedPrefix + command} antilink`},
	{title: "☎ | 💖 Dinuwa Official²⁰²³ 💖 AntiCall", rowId: `${usedPrefix + command} anticall`},
	{title: "🚫 | 💖 Dinuwa Official²⁰²³ 💖 Antidelete", rowId: `${usedPrefix + command} antidelete`},
	{title: "📛 | 💖 Dinuwa Official²⁰²³ 💖 Antitoxic", rowId: `${usedPrefix + command} antitoxic`}, 
	{title: "📩 | 💖 Dinuwa Official²⁰²³ 💖 Antispam", rowId: `$usedPrefix + command} antiSpam`}, 
	{title: "🖼 | 💖 Dinuwa Official²⁰²³ 💖 Autosticker", rowId: `${usedPrefix + command} stiker`}, 
	{title: "⏏️ | 💖 Dinuwa Official²⁰²³ 💖 Autolevelup", rowId: `${usedPrefix + command} autolevelup`},
	{title: "🔎 | 💖 Dinuwa Official²⁰²³ 💖 Detect", rowId: `${usedPrefix + command} detect`},
	{title: "📑 | 💖 Dinuwa Official²⁰²³ 💖 Document", rowId: `${usedPrefix + command} document`},
	{title: "👤 | 💖 Dinuwa Official²⁰²³ 💖 WhiteListMyContact", rowId: `${usedPrefix + command} whitelistmycontact`},
	{title: "❗ | 💖 Dinuwa Official²⁰²³ 💖 Restrict", rowId: `${usedPrefix + command} restrick`},
	{title: "😐 | 💖 Dinuwa Official²⁰²³ 💖 Listen", rowId: `${usedPrefix + command} nyimak`},
	{title: "☑️ | 💖 Dinuwa Official²⁰²³ 💖 Autoread", rowId: `${usedPrefix + command} autoread`},
	{title: "💬 | 💖 Dinuwa Official²⁰²³ 💖 PcOnly", rowId: `${usedPrefix + command} pconly`},
	{title: "🏢 | 💖 Dinuwa Official²⁰²³ 💖 GcOnly", rowId: `${usedPrefix + command} gconly`},
	{title: "📷 | 💖 Dinuwa Official²⁰²³ 💖 SwOnly", rowId: `${usedPrefix + command} swonly`},
	{title: "📬 | 💖 Dinuwa Official²⁰²³ 💖 Getmsg", rowId: `${usedPrefix + command} getmsg`}, 
	{title: "🎌| 💖 Dinuwa Official²⁰²³ 💖 AnimeUpdate", rowId: `${usedPrefix + command} autoupnime`}, 
	]
    },
]

const listMessage = {
  text: 'Here\'s The List Of Functions\nSelect The Function To Turn It On/Off\n\n ',
  footer: `Dinuwa-Official-USER-BOT-V2 • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ\nowner: http://wa.me/94740804536`,
  title: `*${htki} 💖 Dinuwa Official²⁰²³ 💖 𝙾𝙿𝚃𝙸𝙾𝙽𝚂 ${htka}*`,
  buttonText: "💖 Click Here! 💖",
  sections
}

  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
    case 'chatgpt':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.chatgpt = isEnable
      break
     case 'detect':
       if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
           throw false
         }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
       break
           case 'viewonce':
    case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.viewonce = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
    // case 'autodelvn':
    //   if (m.isGroup) {
    //     if (!(isAdmin || isOwner)) {
    //       global.dfail('admin', m, conn)
    //       throw false
    //     }
    //   }
    //   chat.autodelvn = isEnable
    //   break
     case 'document':
       chat.useDocument = isEnable
      break
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
      break
      case 'stiker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.stiker = isEnable
      break
      chat.updateAnimeNews = isEnable
      break
      case 'autoupnime':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.updateAnime = isEnable
      break
      case 'autochat':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autochat = isEnable
      break
      case 'antispam':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiSpam = isEnable
       break
       case 'anticall':
       isAll = true
         if (!isOwner) {
           global.dfail('rowner', m, conn)
           throw false
       }
       chat.antiCall = isEnable
       break
      case 'nsfw':
        if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }}
      chat.nsfw = isEnable
      break
      case 'premnsfwchat':
        if (m.isGroup) {
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }}
      chat.premnsfw = isEnable
      break
    // case 'toxic':
    //   if (m.isGroup) {
    //     if (!(isAdmin || isOwner)) {
    //       global.dfail('admin', m, conn)
    //       throw false
    //     }
    //   }
    //   chat.antiToxic = !isEnable
    //   break
    case 'antitoxic':
     if (m.isGroup) {
      if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn)
      throw false
     }
     }
    chat.antiToxic = isEnable
     break
    case 'autolevelup':
    isUser = true
    user.autolevelup = isEnable
     break
    // case 'mycontact':
    // case 'mycontacts':
    // case 'whitelistcontact':
    // case 'whitelistcontacts':
    // case 'whitelistmycontact':
    // case 'whitelistmycontacts':
    //   if (!isOwner) {
    //     global.dfail('owner', m, conn)
    //     throw false
    //   }
    //   conn.callWhitelistMode = isEnable
    //   break
    case 'restrict':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
    case 'Listen':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['nyimak'] = isEnable
      break
    case 'autoread':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
      break
    case 'pconly':
    case 'privateonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
    case 'gconly':
    case 'grouponly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
    case 'swonly':
    case 'statusonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isEnable
      break
      case 'getmsg':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
      }
      chat.getmsg = isEnable
      break
    default:
      if (!/[01]/.test(command)) return conn.sendMessage(m.chat, listMessage, fakes)
      throw false
  }
  conn.send2ButtonDoc(m.chat, `*${htki} OPTIONS ${htka}*
🗂️ *💖 Dinuwa Official²⁰²³ 💖 Type:* ${type} 
📊 *💖 Dinuwa Official²⁰²³ 💖 Status:* Succes ✅
🎚️ *💖 Dinuwa Official²⁰²³ 💖 Options:* ${isEnable ? 'Enable' : 'Disable'}
📣 *💖 Dinuwa Official²⁰²³ 💖 For:* ${isAll ? 'This Bot' : isUser ? '' : 'This Chats'}
`, wm, `${isEnable ? '✖️ Disable💖' : '✔️ Enable💖'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`, '💖 Menu 💖', '.menu', fakes, adReply)
}
handler.help = ['enable', 'disable'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler
