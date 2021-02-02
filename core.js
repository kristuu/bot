const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    const prefix = '/';

    if (message.guild === null) {
        if (message.author != client.user.id) {
        receivedm(message);
        }
    } else {
        if (message.content.startsWith(prefix)) {
            if (message.content === prefix + 'dm') {
                dm(message);
            }
        } 
    }
})

function dm(message) {
	var admin = ["482586747201519617"]; // can dm users via bot, using the /dm command
	if (admin.includes(message.author.id) == true) {
		const split = message.content.split(">");
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
}

client.on('message', message => {
    if (message.author.id === '482586747201519617') {
        if (message.content.startsWith('/stunda')) {
            // message.channel.send('@everyone');
            const embed = new Discord.MessageEmbed()
                .setThumbnail('https://lh3.googleusercontent.com/proxy/bk3MS2-oJeoNu4GPT6-Cvn5GTt6q8MmO6gohbTYLBFVg1pl-wjBBTlX4NPjxJgDCe3Kpx6yoQesCSjF7wDkwovii2ichXU-BuAFeo1CIJ_d5')
                .setTitle('Fizika')
                .setAuthor('TIEŠSAISTES STUNDA')
                .setURL('https://google.lv/')
                .setFooter('ID: 1234 5678 9101, Passcode: 123456')
                .addFields(
                { name: 'SĀKUMS 10:10, 03/02/2021', value: 'Lai pievienotos stundai, spied uz zili iekrāsotā teksta', inline: true },
                { name: 'Stundas tēma:', value: 'Praktiskais darbs - spēks un paātrinājums', inline: true }
                );
            message.channel.send(embed);
            message.delete();
        };
    };
});

client.login(process.env.BOT_TOKEN);
//©raltec 2020
