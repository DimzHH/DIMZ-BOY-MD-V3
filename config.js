//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Cheems Bot MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//
//recode kar ke youtube pe upload kar rhe ya
//codes copy kar ke apne script me dal rhe
//hai to, description me xeon ka yt channel
// ka link paste kr dena as a cradit or github 
//repo me bhi tag kardena baki jo
//bhi karna hai apki marzi, thank you!🦄
//════════════════════════════//
//If you recode and uploading on your channel
//or copy pasting the codes in ur script, 
//i give permission to do as long as you
//put Xeons youtube channel link in the video
//description and tag me on githuh repo, 
//thank you🦄
//════════════════════════════//

const fs = require("fs")
const chalk = require("chalk")

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = true //auto reading in gc (true to on, false to off)
global.autoReadAll = false // auto reading in all pchat gc and status (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['6283831717202'] //ur owner number
global.ownername = "©𝐃𝐢𝐦𝐳𝐁𝐨𝐭𝐳"
global.ytname = "YT: 𝑺𝒉𝒊𝒛𝒖𝒌𝒂ᑉᶟ" //ur yt chanel name
global.socialm = "GitHub: DimzHH" //ur github or insta name
global.location = "Indonesia, Jawa timur, Banyuwangi" //ur location

//bot bombdy
global.botname = "𝐃𝐢𝐦𝐳 𝐁𝐨𝐭𝐳 𝐌𝐃" //ur bot name
global.websitex = "https://youtube.com/channel/UCWOF5p3b7rRlEgN-f3S3V0w" //ur website
global.vidmenu = { url: 'https://a.uguu.se/zlzQZvXH.mp4' } //gif and video menu
global.packname = "𝐃𝐢𝐦𝐳 𝐁𝐨𝐭𝐳 𝐌𝐃"
global.author = "©𝐃𝐢𝐦𝐳𝐁𝐨𝐭𝐳"
global.themeemoji = "❏"
global.reactmoji = "🤠"
global.ownertag = ['6283831717202'] //ur owner tag
global.ownernummenu = ['6283831717202'] //ur owner number in menu and all
global.watermark = "©𝐃𝐢𝐦𝐳 𝐁𝐨𝐭𝐳 𝐌𝐃" //ur watermark
global.botscript = "https://github.com/DimzHH/DIMZ-BOY-MD-V3"
global.linkz1 = "https://chat.whatsapp.com/ByTXrvAsVD89mGHy4i1Wu2"
global.linkz2 = "https://chat.whatsapp.com/BAWiSyIHWSeCjA8CEQ8rCQ"

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//database
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.lolhuman = "KaysaS"
global.sessionName = "session"
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: '𝑁𝑖ℎ 𝐵𝑎𝑛𝑔🗿',
    admin: '𝑀𝑒𝑛𝑢 𝑖𝑛𝑖 𝑏𝑢𝑎𝑡 𝑎𝑑𝑚𝑖𝑛 𝑡𝑜𝑑!',
    botAdmin: '𝐵𝑜𝑡 ℎ𝑎𝑟𝑢𝑠 𝑗𝑎𝑑𝑖 𝑎𝑑𝑚𝑖𝑛 𝑑𝑢𝑙𝑢!',
    owner: '𝑀𝑒𝑛𝑢 𝑖𝑛𝑖 ℎ𝑎𝑛𝑦𝑎 𝑢𝑛𝑡𝑢𝑘 𝑜𝑤𝑛𝑒𝑟🤓',
    group: '𝑀𝑒𝑛𝑢 𝑖𝑛𝑖 𝑏𝑢𝑎𝑡 𝑔𝑟𝑢𝑝 𝑏𝑎𝑛𝑔!',
    private: '𝑀𝑒𝑛𝑢 𝑖𝑛𝑖 𝑢𝑛𝑡𝑢𝑘 𝑐ℎ𝑎𝑡 𝑝𝑟𝑖𝑏𝑎𝑑𝑖!',
    bot: '𝑀𝑒𝑛𝑢 𝑖𝑛𝑖 𝑢𝑛𝑡𝑢𝑘 𝑏𝑜𝑡!',
    wait: '𝐵𝑒𝑛𝑡𝑎𝑟 𝑦𝑒 𝑘𝑜𝑛𝑡𝑜𝑙...',
    linkm: '𝐴𝑝𝑎𝑎𝑛 𝑛𝑖𝑐ℎ?',
    error: '𝑬𝒓𝒓𝒐𝒓!',
    ban: '𝒀𝒐𝒖 𝒉𝒂𝒗𝒆 𝒃𝒆𝒆𝒏 𝒃𝒂𝒏𝒏𝒆𝒅 𝒃𝒚 𝒕𝒉𝒆 𝒐𝒘𝒏𝒆𝒓, 𝒊𝒇 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒃𝒆 𝒖𝒏𝒃𝒂𝒏𝒏𝒆𝒅, 𝒄𝒉𝒂𝒕 𝒐𝒘𝒏𝒆𝒓.',
    nsfw: '𝑁𝑠𝑓𝑤 𝑚𝑒𝑛𝑢 𝑡𝑖𝑑𝑎𝑘 𝑎𝑘𝑡𝑖𝑓, 𝑠𝑖𝑙𝑎ℎ𝑘𝑎𝑛 𝑐ℎ𝑎𝑡 𝑎𝑑𝑚𝑖𝑛 𝑢𝑛𝑡𝑢𝑘 𝑚𝑒𝑛𝑔𝑎𝑘𝑡𝑖𝑓𝑘𝑎𝑛',
    banChat: '𝑻𝒉𝒆 𝒃𝒐𝒕 𝒘𝒂𝒔 𝒃𝒂𝒏𝒏𝒆𝒅 𝒊𝒏 𝒕𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑, 𝒑𝒍𝒆𝒂𝒔𝒆 𝒄𝒐𝒏𝒕𝒂𝒄𝒕 𝒕𝒉𝒆 𝒐𝒘𝒏𝒆𝒓 𝒕𝒐 𝒖𝒏𝒃𝒂𝒏'
}
global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}
// api website by xenz
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// key
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}
//menu logo maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
