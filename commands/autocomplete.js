//more at https://discordjs.guide/slash-commands/autocomplete.html

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('autocomplete')
        .setDescription('autocomplete example')
        .addStringOption(option => option
            .setName('animals')
            .setDescription('select or type an animal.')
            .setAutocomplete(true)
            .setRequired(true)),
    async autocomplete(interaction, client) {
        const focusedValue = interaction.options.getFocused();
        const choices = ['monkey', 'gorilla', 'chimp', 'elephant', 'duck'];
        const filtered = choices.filter(choice => choice.startsWith(focusedValue));
        await interaction.respond(
            filtered.map(choice => ({ name: choice, value: choice })),
        );
    },
    async execute(interaction, client) {
        const option = interaction.options.getString('animals');
        await interaction.reply('You select: ' + option);
    }
}