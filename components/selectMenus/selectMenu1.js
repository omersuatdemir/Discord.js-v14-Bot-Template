module.exports = {
    data: {
        name: 'selectMenu1',
    },
    async execute(interaction, client) {
        await interaction.reply({
            content: `You select ${interaction.values[0]}`,
        })
    },
};