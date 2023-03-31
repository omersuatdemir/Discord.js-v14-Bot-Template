//more at https://discordjs.guide/popular-topics/embeds.html#embeds

const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('return my ping!'),
    async execute(interaction, client) {

        const embed = new EmbedBuilder()
            .setColor(0x2cee1a)
            .setTitle('Embed Title')
            .setURL('https://github.com')
            .setDescription('Embed description')
            .setThumbnail('https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png')
            .addFields(
                { name: 'field name', value: 'field value' }
            );

        const message = await interaction.reply({ embeds: [embed] });
    }
}