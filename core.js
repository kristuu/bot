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

client.on('message', message => {
    if (message.author.id === '482586747201519617') {
        if (message.content.startsWith('/stunda')) {
            message.channel.send('@everyone');
            const embed = new Discord.MessageEmbed()
                .setThumbnail('https://lh3.googleusercontent.com/proxy/bk3MS2-oJeoNu4GPT6-Cvn5GTt6q8MmO6gohbTYLBFVg1pl-wjBBTlX4NPjxJgDCe3Kpx6yoQesCSjF7wDkwovii2ichXU-BuAFeo1CIJ_d5')
                .setTitle('Fizika')
                .setAuthor('TIEŠSAISTES STUNDA')
                .setURL('https://google.lv/')
                .setFooter('ID: 1234 5678 9101, Passcode: 123456')
                .addFields(
                { name: 'Lai pievienotos stundai, spied uz zili iekrāsotā teksta', value: 'Sākums - 10:10', inline: false },
                { name: 'Stundas tēma:', value: 'Praktiskais darbs - spēks un paātrinājums', inline: true }
                )
            message.channel.send(embed)
        };
    };
});

client.login(process.env.BOT_TOKEN);
//©raltec 2020
