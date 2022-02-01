// Require the necessary discord.js classes
const { Client, Intents, MessageAttachment, MessageEmbed } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log(`Bot is ready as: ${client.user.tag}`);
});

/* client.on('message', (message) => {
    //Recibe el mensaje
    console.log('perez');
}); */

client.on("messageCreate", async message  => {
    if (message.author.bot) return false;

    console.log(`Message from ${message.author.username}: ${message.content}`);

    if (message.content === '!off') {
        client.user.setStatus('dnd');
        message.channel.send(`Ahora estoy desactivado`);
        console.log(client.user.presence.status);
    }

    if (message.content === '!on') {
        client.user.setStatus('online');
        message.channel.send(`Ahora estoy activado`);
        console.log(client.user.presence.status);
    }

    if (message.content === 'ping') {
        message.reply('pong!');
    }

    if (message.content === 'hello') {
        message.channel.send(`Hello! ${message.author}`);
    }

    if (message.content.includes('!test')) {
        message.channel.send(`You are testing!!!`);
    }

    if (message.content === '!nico') {
        message.channel.send(`https://nick-portafolio.herokuapp.com/`);
    }

    if (message.content === '!pretty') {
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Some title')
            .setURL('https://discord.js.org/')
            .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
            .setDescription('Some description here')
            .setThumbnail('https://i.imgur.com/AfFp7pu.png')
            .addFields(
                { name: 'Regular field title', value: 'Some value here' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
            )
            .addField('Inline field title', 'Some value here', true)
            .setImage('https://i.imgur.com/AfFp7pu.png')
            .setTimestamp()
            .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

        message.channel.send({ embeds: [embed] });
    }

    /* if (message.content.startsWith('!clean')) {
        async function clear() {
            try {
                // await msg.delete();
                const fetched = await message.channel.messages.fetch({limit: 99});
                message.channel.bulkDelete(fetched);;
                console.log('Messages deleted');
            }
            catch (e) {
                console.log(e);
            }
        }
        clear();
    } Not working message eraser */ 

});

// Login to Discord with your client's token
client.login('OTI4Mjk0MzA3Nzg0NDQ2MDA0.YdWrcQ.Hb3SxEucnKNbiIGwvWyP8a_5JgI');