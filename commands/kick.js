//more at https://discordjs.guide/popular-topics/faq.html#how-do-i-kick-a-guild-member

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('kicks user')
        .addUserOption(option => option
            .setName('target')
            .setDescription('the user you want to kick')
            .setRequired(true))
        .addStringOption(option => option
            .setName('reason')
            .setDescription('the reason for kicking the user')),
    async execute(interaction, client) {
        const user = interaction.options.getUser('target');
        const reason = interaction.options.getString('reason') || 'no reason';
        const member = await interaction.guild.members.fetch(user.id).catch(console.error);
        await user.send({
            content: `You have kicked from ${interaction.guild.name}\nReason: ${reason}`
        }).catch(console.error);

        await member.kick(reason).catch(console.error);

        await interaction.reply({
            content: `Kicked ${user.tag}`
        })
    }
}