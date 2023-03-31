module.exports = {
    data: {
        name: 'button1'
    },
    async execute(interaction, client) {
        await interaction.reply(`button1 reply message`);
    }
}