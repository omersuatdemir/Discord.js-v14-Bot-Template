//more at https://discordjs.guide/interactions/buttons.html#buttons

const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('button')
        .setDescription('button example'),
    async execute(interaction, client) {
        const button = new ButtonBuilder().setCustomId('button1').setLabel('Click Me').setStyle(ButtonStyle.Primary);
        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(button)]
        });
    },
}