const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.guild === null) {
    //    space for dm commands  
    } else {
        if (message.content == 'ping?') {
                    var a = ['array1', 'array2', 'tu esi padla']
                    message.react(':clown:')
                    message.channel.send(a[Math.floor(Math.random() * a.length)]);
            }
    }
});

client.login(process.env.BOT_TOKEN);
//©raltec 2020
