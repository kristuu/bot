const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
	client.user.setActivity(); 
});

client.on('message', message => {
    if (message.author.id === '482586747201519617') {
        if (message.content.startsWith('/stunda')) {
            message.channel.send('@everyone');
            const stundaEmbed = {
				color: 0xFCFCFC,
				title: 'EIKT tehnisko darbu pamatiemaņas PA2',
				url: 'https://us05web.zoom.us/j/86872407614?pwd=L1FtejhWTG1IZjZPelV4ekxWYnd1QT09',
				author: {
					name: 'TIEŠSAISTES STUNDA',
					icon_url: 'https://files.mykoob.lv/media/user_data/710646/profile_image/profile_small_6ca84f0abd1be5022ff61a970e175613734ca1ba6ed97012cf16427d2fc272028b973668b94d1ef7e591306c97f078b564e0acbd07436c5e92fc89e5e56a797e.jpg',
					url: 'https://lv.linkedin.com/in/makolv',
				},
				description: 'Lai pieslēgtos stundai, spied uz priekšmeta nosaukuma',
				thumbnail: {
					url: 'https://lh3.googleusercontent.com/proxy/bk3MS2-oJeoNu4GPT6-Cvn5GTt6q8MmO6gohbTYLBFVg1pl-wjBBTlX4NPjxJgDCe3Kpx6yoQesCSjF7wDkwovii2ichXU-BuAFeo1CIJ_d5',
				},
				fields: [
					{
						name: 'SĀKUMS',
						value: '13:30, 03/02/2021',
						inline: true,
					},
					{
						name: 'PLATFORMA',
						value: 'Zoom',
						inline: true,
					},
					{
						name: '\u200b',
						value: '\u200b',
						inline: false,
					},
					{
						name: 'STUNDAS TĒMA',
						value: 'Nav informācijas',
						inline: false,
					},
					{
						name: 'PIEKĻUVES ID',
						value: 'ID: 868 7240 7614, Passcode: zdXF4Z',
						inline: false,
					},
				],
				timestamp: new Date(),
				footer: {
					text: 'leprikons @ 2021',
					icon_url: 'https://media.discordapp.net/attachments/806122097734451220/806188966570229790/c1073552d7dbea3da1b605de2d7c4ff6.png',
				},
			};
            message.channel.send({ embed: stundaEmbed });
            message.delete();
        };
    };
});

client.on('message', message => {
    if (message.author.id === '482586747201519617') {
        if (message.content.startsWith('/eikt')) {
            message.channel.send('@everyone');
            const embed = new Discord.MessageEmbed()
                .setThumbnail('https://lh3.googleusercontent.com/proxy/bk3MS2-oJeoNu4GPT6-Cvn5GTt6q8MmO6gohbTYLBFVg1pl-wjBBTlX4NPjxJgDCe3Kpx6yoQesCSjF7wDkwovii2ichXU-BuAFeo1CIJ_d5')
                .setTitle('EIKT nozares tehnisko darbu pamatiemaņas PA2')
                .setAuthor('TIEŠSAISTES STUNDA')
                .setURL('https://us05web.zoom.us/j/86872407614?pwd=L1FtejhWTG1IZjZPelV4ekxWYnd1QT09')
                .setFooter('ID: 868 7240 7614, Passcode: zdXF4Z')
                .addFields(
                { name: 'SĀKUMS: 13:30', value: 'Lai pievienotos stundai, spied uz zili iekrāsotā teksta', inline: true },
                { name: 'Stundas tēma:', value: 'N/A', inline: true }
                );
            message.channel.send(embed);
            message.delete();
        };
    };
});

client.on('message', message => {
	const prefix = "/";
	
	if (message.guild === null) {
		if (message.author != client.user.id) {
			receivedm(message)
		}
	} else {
		if (message.content.startsWith(prefix)) {
			if (message.content == prefix + "results") {
				results(message)
			} else
			if (message.content.startsWith(prefix + "dm")) {
				dm(message)
			}
			if (message.content.startsWith(prefix + "fine")) {
				issuefine(message)
			}
		}
	}
});

function dm(message) {
	var admin = ["746662409724231798","482586747201519617","290452091946663936"]; //can dm users via bot, using the /dm command
	if (admin.includes(message.author.id) == true) {
		const split = message.content.split(",");
		const targetid = split[1]
		const letter = split[2]
		if (targetid == "undefined" || targetid == null || targetid == "" && letter == "undefined" || letter == null || letter == "") {
			message.channel.send("Command format: ``/dm,[USER_ID],[MESSAGE]``")
		} else
		if (targetid == "undefined" || targetid == null || targetid == "") {
			message.channel.send("❗ Missing ``USER_ID``!\nType ``/dm`` to see the full command.")
			message.react("❌")
		} else
		if (letter == "undefined" || letter == null || letter == "") {
			message.channel.send("❗ Missing ``MESSAGE``!\nType ``/dm`` to see the full command.")
			message.react("❌")
		} else {
			client.users
				.fetch(targetid)
				.then(user => {
					user.send(letter)
					message.react('✅')
				})
				.catch(err => {
					if (err === "DiscordAPIError: 404: Not Found") {
						message.channel.send("❗ Something went wrong! Refer to the error log below.\n\n``User with this ID hasn't been found! Error:\n" + err + '``')
					} else {
						message.channel.send('❗ Something went wrong! Refer to the error log below.\n\n``' + err + '``\n(Bot administrator contacted: <@746662409724231798>)')
					}
					message.react('❌')  
    				})
		}
	} else {
		message.channel.send("❗ Insufficient permissions")
	}
	message.delete();
}
function receivedm(message) {
	if (message.attachments.size > 0) {
		message.channel.send(">>> ❗ This bot cannot transfer images or files - please send a link of your image or file.\nThe message you sent has been rejected - if you sent any text with the image, please include it in the next message you send.")
	} else {
	let botdms = client.channels.cache.get("799266353999642664")
	const dmreceivedEmbed = new Discord.MessageEmbed()
	.setColor('#2dcc70')
	.setAuthor(message.author.tag + "   |   " + message.author, message.author.avatarURL())
	.setDescription(message.content)
	botdms.send(dmreceivedEmbed);
	}
}
async function issuefine(message) {
	if (message.channel.id == "799266353999642664") {
		var speeder
		const split = message.content.split(" ");
		const username = split[1]
		const plate = split[2]
		const allowedspeed = split[3]
		const actualspeed = split[4]
		const date = split[5]
		const time = split[6]
		const location = split[7]
		const difference = Number(actualspeed) - Number(allowedspeed)
		
		var today = new Date();
		var dd = String(today.getDate());
		var mm = String(today.getMonth()); //January is 0!
		var yyyy = today.getFullYear();
		const monthNamesArray = ["Janvārī", "Februārī", "Martā", "Aprīlī", "Maijā", "Jūnijā", "Jūlijā", "Augustā", "Septembrī", "Oktobrī", "Novembrī", "Decembrī"];
		var monthName = monthNamesArray[today.getMonth()]
		
		const fineEmbed = new Discord.MessageEmbed()
		.setColor('#011d4d')
		.setTitle('ADMINISTRATĪVĀ PĀRKĀPUMA\nPROTOKOLS-PAZIŅOJUMS')
		.setAuthor("Valsts policijas Vidzemes reģiona pārvalde")
		.setThumbnail('https://i.gyazo.com/fe9f314bd6df1ec33e7c26df5014076b.jpg')
		.setDescription("Sastādīts Luganes pilsētā, Šautuves ielā 2, " + yyyy + ". gada " + dd + ". " + monthName + ".")
		.addFields(
		{ name: 'Atļautais ātrums', value: allowedspeed, inline: true },
		{ name: 'Faktiskais ātrums', value: actualspeed + " (+" + difference + ")", inline: true },
		{ name: 'Vadītāja ID', value: username, inline: false },
		{ name: 'Numurzīme', value: plate, inline: true },
		{ name: 'Pārkāpums fiksēts', value: date + ", " + time + ", " + location, inline: false }
		)
		const guild = await client.guilds.fetch('705686666043457606')
		speeder = guild.members.cache.find((member) => member.displayName == username)
		speeder.send(fineEmbed)
	}
}

client.login(process.env.BOT_TOKEN);
//©raltec 2020
