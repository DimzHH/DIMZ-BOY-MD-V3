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
global.ownername = "𝑂͢𝐺𝐺𝑌⇄𝑆𝛴𝛤"
global.ytname = "YT: 𝑺𝒉𝒊𝒛𝒖𝒌𝒂ᑉᶟ" //ur yt chanel name
global.socialm = "GitHub: DimzHH" //ur github or insta name
global.location = "Indonesia, Jawa timur, Banyuwangi" //ur location

//bot bombdy
global.botname = "𝑯𝒆𝒍𝒍 𝑩𝒐𝒚 𝑴𝑫" //ur bot name
global.websitex = "https://youtube.com/channel/UCWOF5p3b7rRlEgN-f3S3V0w" //ur website
global.vidmenu = { url: 'https://a.uguu.se/zlzQZvXH.mp4' } //gif and video menu
global.packname = "𝑯𝒆𝒍𝒍 𝑩𝒐𝒚 𝑴𝑫"
global.author = "𝑂͢𝐺𝐺𝑌⇄𝑆𝛴𝛤"
global.themeemoji = "❏"
global.reactmoji = "🌚"
global.ownertag = ['6283831717202'] //ur owner tag
global.ownernummenu = ['6283831717202'] //ur owner number in menu and all
global.watermark = "𝑯𝒆𝒍𝒍 𝑩𝒐𝒚 𝑴𝑫" //ur watermark
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
    success: '𝓝𝓲𝓱 𝓫𝓪𝓷𝓰 ✓',
    admin: '𝓜𝓮𝓷𝓾 𝓲𝓷𝓲 𝓱𝓪𝓷𝔂𝓪 𝓾𝓷𝓽𝓾𝓴 𝓪𝓭𝓶𝓲𝓷!',
    botAdmin: '𝓑𝓸𝓽 𝓱𝓪𝓻𝓾𝓼 𝓳𝓪𝓭𝓲 𝓪𝓭𝓶𝓲𝓷 𝓭𝓾𝓵𝓾!',
    owner: '𝓜𝓮𝓷𝓾 𝓲𝓷𝓲 𝓾𝓷𝓽𝓾𝓴 𝓸𝔀𝓷𝓮𝓻 𝓫𝓪𝓷𝓰',
    group: '𝓜𝓮𝓷𝓾 𝓲𝓷𝓲 𝓫𝓾𝓪𝓽 𝓰𝓻𝓾𝓹 𝓫𝓪𝓷𝓰!',
    private: '𝓜𝓮𝓷𝓾 𝓲𝓷𝓲 𝓾𝓷𝓽𝓾𝓴 𝓬𝓱𝓪𝓽 𝓹𝓻𝓲𝓫𝓪𝓭𝓲 𝓫𝓪𝓷𝓰!',
    bot: '𝓜𝓮𝓷𝓾 𝓲𝓷𝓲 𝓾𝓷𝓽𝓾𝓴 𝓫𝓸𝓽 𝓫𝓪𝓷𝓰',
    wait: '𝓑𝓮𝓷𝓽𝓪𝓻 𝔂𝓮 𝓫𝓪𝓷𝓰...',
    linkm: '𝓛𝓲𝓷𝓴 𝓪𝓹𝓪𝓪𝓷 𝓷𝓲𝓬𝓱?',
    error: '𝑬𝒓𝒓𝒐𝒓!',
    ban: '𝒀𝒐𝒖 𝒉𝒂𝒗𝒆 𝒃𝒆𝒆𝒏 𝒃𝒂𝒏𝒏𝒆𝒅 𝒃𝒚 𝒕𝒉𝒆 𝒐𝒘𝒏𝒆𝒓, 𝒊𝒇 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒃𝒆 𝒖𝒏𝒃𝒂𝒏𝒏𝒆𝒅, 𝒄𝒉𝒂𝒕 𝒐𝒘𝒏𝒆𝒓.',
    nsfw: '𝑻𝒉𝒆 𝒏𝒔𝒇𝒘 𝒇𝒆𝒂𝒕𝒖𝒓𝒆 𝒉𝒂𝒔 𝒏𝒐𝒕 𝒃𝒆𝒆𝒏 𝒂𝒄𝒕𝒊𝒗𝒂𝒕𝒆𝒅, 𝒑𝒍𝒆𝒂𝒔𝒆 𝒄𝒐𝒏𝒕𝒂𝒄𝒕 𝒕𝒉𝒆 𝒂𝒅𝒎𝒊𝒏 𝒕𝒐 𝒂𝒄𝒕𝒊𝒗𝒂𝒕𝒆',
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
