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
    if (!msg.guild) return;
    if (msg.content.startsWith('/kick')) {
        const user = msg.mentions.users.first();
        if (user) {
            const member = msg.guild.member(user);
            if (member) {
                member.kick('Reason, that is displayed in audit logs');
                member.then(() => {
                    msg.reply(`${user.tag} has been successfully kicked!`);
                })
                member.catch(err => {
                    msg.reply('The action is not performable.');
                    console.error(err);
                });
            } else {
                msg.reply(`The user isn't in this server.`)
            }
        } else {
            msg.reply(`You haven't mentioned an user to kick.`)
        }
    }
});

client.login(process.env.BOT_TOKEN);
//©raltec 2020
