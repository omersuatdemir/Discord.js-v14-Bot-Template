const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reaction')
        .setDescription('returns reactions'),
    async execute(interaction, client) {

        const message = await interaction.reply({
            content: 'React this message.',
            fetchReply: true
        });

        //two different methods
        /*const emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'emojiname');
        message.react(emoji);

        const reactionEmoji = client.emojis.cache.get('emojiId');
        message.react(reactionEmoji);*/

        message.react('😄');

        const filter = (reaction, user) => {
            return reaction.emoji.name === '😄' && user.id == interaction.user.id
        };

        message.awaitReactions({ filter, max: 4, time: 15000, errors: ['time'] })
            .then((collected) => console.log(collected.size))
            .catch((collected) => {
                console.log(`After 15 seconds, only ${collected.size} out of 4 reacted.`);
            })
    }
}