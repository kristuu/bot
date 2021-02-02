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
        if (msg.startsWith('/stunda')) {
            msg.channel.send('@everyone');
            const embed = new Discord.MessageEmbed()
                .setTitle('TIEŠSAISTES STUNDA')
                .setAuthor('Fizika')
                .setDescription('Spied uz saites, lai pievienotos stundai: ')
                .setFooter('ID: 1234 5678 9101, Passcode: 123456');
            msg.channel.send.embed()
        };
    };
});

client.login(process.env.BOT_TOKEN);
//©raltec 2020
