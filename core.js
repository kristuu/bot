const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', msg => {
    if (msg.guild === null) {
        msg.client.send('');
    } else {
        if (msg.content == 'ping?') {
                    var a = ['tu esi padla']
                    msg.react('🤡')
                    msg.channel.send(a[Math.floor(Math.random() * a.length)]);
            }
    }
});

client.on('message', msg => {
    if (!message.guild) return;
    if (message.content.startsWith('/kick')) {
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member
                    .kick('Reason, that is displayed in audit logs');
                    .then(() => {
                        message.reply(`${user.tag} has been successfully kicked!`);
                    })
                    .catch(err => {
                        message.reply('The action is not performable.');
                        console.error(err);
                    })
            } else {
                message.reply(`The user isn't in this server.`)
            }
        } else {
            message.reply(`You haven't mentioned an user to kick.`)
        }
    }
});

client.login(process.env.BOT_TOKEN);
//©raltec 2020
