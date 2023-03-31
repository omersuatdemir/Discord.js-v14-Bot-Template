//more at https://discordjs.guide/interactions/select-menus.html#select-menus

const { SlashCommandBuilder, StringSelectMenuBuilder, ActionRowBuilder, StringSelectMenuOptionBuilder, setPosition } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('selectmenu')
        .setDescription('Sends "selectMenu1"'),
    async execute(interaction, client) {
        const menu = new StringSelectMenuBuilder()
            .setCustomId('selectMenu1')
            .setMinValues(1)
            .setMaxValues(1)
            .setOptions(
                new StringSelectMenuOptionBuilder({
                    label: 'Option 1',
                    value: 'some link 123'
                }),
                new StringSelectMenuOptionBuilder({
                    label: 'Option 2',
                    value: 'some link 456'
                })
            )

        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(menu)],
        })
    },
}