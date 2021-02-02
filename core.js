const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', msg => {
    if (msg.guild === null) {
        msg.client.send('Gay');
    } else {
        if (msg.content == 'ping?') {
                    var a = ['tu esi padla']
                    msg.react('🤡')
                    msg.channel.send(a[Math.floor(Math.random() * a.length)]);
            }
    }
});

client.login(process.env.BOT_TOKEN);
//©raltec 2020
