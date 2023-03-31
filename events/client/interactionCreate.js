const { InteractionType } = require('discord.js');

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (interaction.isChatInputCommand()) {
            const command = client.commands.get(interaction.commandName);
            if (!command) {
                return;
            }

            try {
                await command.execute(interaction, client);
            } catch (error) {
                console.log(error);
                await interaction.reply({
                    content: 'Something went wrong while command executing...',
                    ephemeral: true
                })
            }
        } else if (interaction.isButton()) {
            const button = client.buttons.get(interaction.customId);
            if (!button) return new Error('There is no code for this button.');
            try {
                await button.execute(interaction, client);
            } catch (error) {
                console.log(error);
            }
        } else if (interaction.isStringSelectMenu()) {
            const menu = client.selectMenus.get(interaction.customId);
            if (!menu) return new Error('There is no code for this selectmenu.');
            try {
                await menu.execute(interaction, client);
            } catch (error) {
                console.log(error);
            }
        } else if (interaction.type == InteractionType.ModalSubmit) {
            const modal = client.modals.get(interaction.customId);
            if (!modal) return new Error('There is no code for this modal.');
            try {
                await modal.execute(interaction, client);
            } catch (error) {
                console.log(error);
            }
        } else if (interaction.isContextMenuCommand()) {
            const contextCommand = client.commands.get(interaction.commandName);
            if (!contextCommand) return new Error('There is no code for this context command.');
            try {
                await contextCommand.execute(interaction, client);
            } catch (error) {
                console.log(error);
            }
        } else if (interaction.type == InteractionType.ApplicationCommandAutocomplete) {
            const command = client.commands.get(interaction.commandName);
            if (!command) return new Error('There is no code for this auto complete.');

            try {
                await command.autocomplete(interaction, client);
            } catch (error) {
                console.log(error);
            }
        }
    }
}