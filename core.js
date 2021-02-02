const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', msg => {
    if (msg.guild === null) {
        msg.reply('');
    } else {
        if (msg.content == 'ping?') {
                    var a = ['klasiska padla'];
                    msg.channel.send(a[Math.floor(Math.random() * a.length)]);
                    msg.delete()
            }
    }
});

client.on('message', msg => {
    if (msg.author.id === '482586747201519617') {
        msg.reply('Padla!')
    }
});

client.login(process.env.BOT_TOKEN);
//©raltec 2020
