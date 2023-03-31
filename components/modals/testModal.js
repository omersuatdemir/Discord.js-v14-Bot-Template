module.exports = {
    data: {
        name: 'testModal',
    },
    async execute(interaction, client){
        await interaction.reply({
            content: 'Modal input: ' + interaction.fields.getTextInputValue('testModalInput')
        });
    }
}