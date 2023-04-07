const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('attachment')
        .setDescription('attachment example')
        .addAttachmentOption(option => option
            .setName('attach')
            .setDescription('attachment file')
            .setRequired(true)),
    async execute(interaction, client) {
        const file = interaction.options.getAttachment('attach');
        await interaction.reply({ content: `Attachment:\n${file.url}` });
    }
}