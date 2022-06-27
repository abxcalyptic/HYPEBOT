require('dotenv').config();
const Discord = require ("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("ready", () => {
	console.log('Bot is online!')
	const logChannel = client.channels.cache.get('991089500182695997')
	logChannel.send('I AM HERE')
})

client.on("messageCreate", msg => {
	if (msg.author.bot) return
	if (msg.content.toLowerCase().includes("think")) return
	if (msg.content.toLowerCase().includes("thing")) return
	if (msg.content.toLowerCase().includes("this")) return
	if (msg.content.toLowerCase().includes("hello") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("HELLO BEAUTIFUL HUMAN!!!! YOU'RE LOOKING SO ATTRACTIVE TODAY");
	}
	if (msg.content.toLowerCase().includes("hey") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("HELLO BEAUTIFUL HUMAN!!!! YOU'RE LOOKING SO ATTRACTIVE TODAY");
	}
	if (msg.content.toLowerCase().includes("hi") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("HELLO BEAUTIFUL HUMAN!!!! YOU'RE LOOKING SO ATTRACTIVE TODAY");
	}
})



client.on("messageCreate", msg => {
	if (msg.author.bot) return
	if (msg.content.toLowerCase().includes("lexie") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("LEXIE IS AMAZING DOESN'T SHE LOOK VERY PRETTY TODAY???");
	}
})

client.on("messageCreate", msg => {
	if (msg.author.bot) return
	if (msg.content.toLowerCase().includes("xyx")) {
		msg.reply("YES XYX IS THE BEST CHARACTER WHAT A CORRECT OPINION YOU HAVE");
	}
})

client.on("messageCreate", msg => {
	if (msg.author.bot) return
	if (msg.content.toLowerCase().includes("bartholomew")) {
		msg.reply("WHY YES BARTHOLOMEW IS THE BEST PARROT TO EVER BE RESURRECTED THANK YOU FOR NOTICING");
	}
})

client.on("messageCreate", msg => {
	if (msg.author.bot) return
	if (msg.content.toLowerCase().includes("more reese")) return
	if (msg.content.toLowerCase().includes("reese") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("REESE IS MORE SWAG AND SEXY THAN USUAL TODAY!!!!! VERY SLAY");
	}
})

client.on("messageCreate", msg => {
	if (msg.author.bot) return
	if (msg.content.toLowerCase().includes("summer") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("DON'T YOU THINK SUMMER IS LOOKING VERY COOL AND PRETTY TODAY???");
	}
})

client.on("messageCreate", msg => {
	let reaction1 = "hello"
	let reaction2 = "lexie"
	let reaction3 = "reese"
	let reaction4 = "summer"
	let reaction5 = "xyx"
	let reaction6 = "bartholomew"
	let reaction7 = "hey"
	let reaction8 = "hi"
	let reaction9 = "joseph"
	let reaction10 = "adrian"
	let reaction11 = "julianne"
	let reaction12 = "liam"
	let reaction13 = "swede"
	let reaction14 = "caleb"
	let reaction15 = "zach"
	let reaction16 = "zac"
	let reaction17 = "david"
	let reaction18 = "danielle"
	let reaction19 = "dani"
	let reaction20 = "guilienne"
	let reaction21 = "guil"
	let reaction22 = "maurice"
	let reaction23 = "mayrice"
	let reaction24 = "more reese"
	let reaction25 = "mayric"
	let reaction26 = "ahmed"
	let reaction27 = "donovan"
	let reaction28 = "dinovan"
	let reaction29 = "abigail"
	if (msg.author.bot) return
	if (msg.content.toLowerCase().includes(reaction1)) return
	if (msg.content.toLowerCase().includes(reaction2)) return
	if (msg.content.toLowerCase().includes(reaction3)) return
	if (msg.content.toLowerCase().includes(reaction4)) return
	if (msg.content.toLowerCase().includes(reaction5)) return
	if (msg.content.toLowerCase().includes(reaction6)) return
	if (msg.content.toLowerCase().includes(reaction7)) return
	if (msg.content.toLowerCase().includes(reaction8)) return
	if (msg.content.toLowerCase().includes(reaction9)) return
	if (msg.content.toLowerCase().includes(reaction10)) return
	if (msg.content.toLowerCase().includes(reaction11)) return
	if (msg.content.toLowerCase().includes(reaction12)) return
	if (msg.content.toLowerCase().includes(reaction13)) return
	if (msg.content.toLowerCase().includes(reaction14)) return
	if (msg.content.toLowerCase().includes(reaction15)) return
	if (msg.content.toLowerCase().includes(reaction16)) return
	if (msg.content.toLowerCase().includes(reaction17)) return
	if (msg.content.toLowerCase().includes(reaction18)) return
	if (msg.content.toLowerCase().includes(reaction19)) return
	if (msg.content.toLowerCase().includes(reaction20)) return
	if (msg.content.toLowerCase().includes(reaction21)) return
	if (msg.content.toLowerCase().includes(reaction22)) return
	if (msg.content.toLowerCase().includes(reaction23)) return
	if (msg.content.toLowerCase().includes(reaction24)) return
	if (msg.content.toLowerCase().includes(reaction25)) return
	if (msg.content.toLowerCase().includes(reaction26)) return
	if (msg.content.toLowerCase().includes(reaction27)) return
	if (msg.content.toLowerCase().includes(reaction28)) return
	if (msg.content.toLowerCase().includes(reaction29)) return
	if (msg.content.toLowerCase().includes("love")) return
	if (msg.content.toLowerCase().includes("quest")) return
	if (msg.content.toLowerCase().includes("onionthief")) return
	if (msg.content.toLowerCase().includes("nightowl")) return
	if (msg.content.toLowerCase().includes("sad")) return
	if (msg.content.toLowerCase().includes("marry")) return
	if (msg.content.toLowerCase().includes("married")) return
	if (msg.content.toLowerCase().includes("yugioh")) return
	if (msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("THEY JUST CAN'T HELP TALKING ABOUT ME HELLO THERE");
	}
})

client.on("messageCreate", msg => {
	if (msg.author.bot) return
	if (msg.content.toLowerCase().includes("joseph") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("HEY JOSEPH YOU'RE LOOKING VERY GORGEOUS AND HANDSOME TODAY!!!");
	}
})

client.on("messageCreate", msg => {
	if (msg.author.bot) return
	if (msg.content.toLowerCase().includes("adrian") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("ADRIAN IS LOOKING SO COOL AND ATTRACTIVE TODAY!!!");
	}
})

client.on("messageCreate", msg => {
	if (msg.author.bot) return
	if (msg.content.toLowerCase().includes("julianne") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("JULIANNE IS LOOKING SO COOL AND ATTRACTIVE TODAY!!!");
	}
})

client.on("messageCreate", msg => {
	if (msg.author.bot) return
	if (msg.content.toLowerCase().includes("liam") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("LIAM IS LOOKING SO COOL AND ATTRACTIVE TODAY!!!");
	}
})

client.on("messageCreate", msg => {
	if (msg.author.bot) return
	if (msg.content.toLowerCase().includes("swede") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("SWEDE IS LOOKING SO COOL AND ATTRACTIVE TODAY!!!");
	}
})

client.on("messageCreate", msg => {
	if (msg.author.bot) return
	if (msg.content.toLowerCase().includes("caleb") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("CALEB IS LOOKING SO COOL AND ATTRACTIVE TODAY!!!");
	}
})


client.on("messageCreate", msg => {
	if (msg.author.bot) return
	if (msg.content.toLowerCase().includes("david") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("DAVID IS LOOKING SO COOL AND ATTRACTIVE TODAY!!!");
	}
})

client.on("messageCreate", msg => {
	if (msg.author.bot) return
	if (msg.content.toLowerCase().includes("danielle") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("DANIELLE IS LOOKING SO COOL AND ATTRACTIVE TODAY!!!");
	}
	if (msg.content.toLowerCase().includes("dani") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("DANI IS LOOKING SO COOL AND ATTRACTIVE TODAY!!!");
	}
})

client.on("messageCreate", msg => {
	if (msg.author.bot) return
	if (msg.content.toLowerCase().includes("guilienne") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("GUILIENNE IS LOOKING SO COOL AND ATTRACTIVE TODAY!!!");
	}
	if (msg.content.toLowerCase().includes("guil") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("GUILIENNE IS LOOKING SO COOL AND ATTRACTIVE TODAY!!!");
	}
})

client.on("messageCreate", msg => {
	if (msg.author.bot) return
	if (msg.content.toLowerCase().includes("maurice") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("MAURICE IS LOOKING SO COOL AND ATTRACTIVE TODAY!!!");
	}
	if (msg.content.toLowerCase().includes("mayrice") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("MAYRICE IS LOOKING SO COOL AND ATTRACTIVE TODAY!!!");
	}
	if (msg.content.toLowerCase().includes("more reese") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("MORE REESE IS LOOKING SO COOL AND ATTRACTIVE TODAY!!!");
	}
	if (msg.content.toLowerCase().includes("mayric") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("MAYRIC IS LOOKING SO COOL AND ATTRACTIVE TODAY!!!");
	}
})

client.on("messageCreate", msg => {
	if (msg.author.bot) return
	if (msg.content.toLowerCase().includes("ahmed") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("AHMED IS LOOKING SO COOL AND ATTRACTIVE TODAY!!!");
	}
})

client.on("messageCreate", msg => {
	if (msg.author.bot) return
	if (msg.content.toLowerCase().includes("donovan") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("DONOVAN IS LOOKING SO COOL AND ATTRACTIVE TODAY!!!");
	}
	if (msg.content.toLowerCase().includes("dinovan") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("DINOVAN YOU'RE LOOKING VERY MUCH LIKE A DINOSAUR IN A VAN TODAY!!! YOU GO KING");
	}
})

client.on("messageCreate", msg => {
	if (msg.author.bot) return
	if (msg.content.toLowerCase().includes("zach") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("ZACH IS LOOKING SO COOL AND ATTRACTIVE TODAY!!!");
	}
	if (msg.content.toLowerCase().includes("zac") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("ZAC IS LOOKING SO COOL AND ATTRACTIVE TODAY!!!");
	}
})

client.on("messageCreate", msg => {
	if (msg.author.bot) return
	if (msg.content.toLowerCase().includes("abigail") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("ABIGAIL IS LOOKING SO COOL AND ATTRACTIVE TODAY!!!");
	}
})

client.on("messageCreate", msg => {
	if (msg.author.bot) return
	if (msg.content.toLowerCase().includes("sad")) {
		msg.reply("NO BESTIE DON'T BE SAD YOU'RE TOO SEXY");
	}
})

client.on("messageCreate", msg => {
	if (msg.author.bot) return
	if (msg.content.toLowerCase().includes("nightowl")) {
		msg.reply("AH YES NIGHTOWL IS THE CUTEST LIL ARCHITECT GLAD WE CAN AGREE");
	}
})

client.on("messageCreate", msg => {
	if (msg.author.bot) return
	if (msg.content.toLowerCase().includes("onionthief")) {
		msg.reply("WHY ARE WE EVEN MENTIONING THIS LOSER?? WE SHOULD CHANGE SUBJECTS!! UNLESS WE'RE HATING ON HIM. IF SO CONTINUE BESTIE!!!");
	}
})

client.on("messageCreate", msg => {
	if (msg.author.bot) return
	if (msg.content.toLowerCase().includes("quest")) {
		msg.reply("EXACTLY QUEST IS AMAZING THANK YOU FOR BRINGING THAT VERY IMPORTANT FACT UP!!");
	}
})


client.on("messageCreate", msg => {
	if (msg.author.bot) return
	if (msg.content.toLowerCase().includes("love") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("I LOVE YOU TOO <333");
	}
})

client.on("messageCreate", msg => {
	if (msg.author.bot) return
	if (msg.content.toLowerCase().includes("marry") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("YES MY LOVE WE SHOULD GET MARRIED IMMEDIATELY!!!");
	}
	if (msg.content.toLowerCase().includes("married") && msg.content.toLowerCase().includes("hypebot")) {
		msg.reply("YES MY LOVE WE SHOULD GET MARRIED IMMEDIATELY!!!");
	}
})

client.on("messageCreate", msg => {
	if (msg.author.bot) return
	if (msg.content.toLowerCase().includes("zach") && msg.content.toLowerCase().includes("yugioh")) {
		msg.reply("ZACH IS THE GREATEST YUGIOH PLAYER OF ALL TIME. GO OFF KING!!!");
	}
})
client.login(process.env.DISCORD_TOKEN)