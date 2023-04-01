const { SlashCommandBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('modal')
        .setDescription('a test command for modals'),
    async execute(interaction, client) {
        const modal = new ModalBuilder()
            .setCustomId('testModal')
            .setTitle('Modal Title');
        const textInput = new TextInputBuilder()
            .setCustomId('testModalInput')
            .setLabel('Type something.')
            .setRequired(true)
            .setStyle(TextInputStyle.Short);
        modal.addComponents(new ActionRowBuilder().addComponents(textInput));
        await interaction.showModal(modal);
    }
}