//more at https://discordjs.guide/popular-topics/faq.html#how-do-i-timeout-a-guild-member

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('timeout')
        .setDescription('timeout user')
        .addUserOption(option => option
            .setName('target')
            .setDescription('the user you want to timeout')
            .setRequired(true))
        .addNumberOption(option => option
            .setName('minutes')
            .setDescription('how many minutes for timeout')
            .setRequired(true))
        .addStringOption(option => option
            .setName('reason')
            .setDescription('the reason for timeout the user')),
    async execute(interaction, client) {
        const user = interaction.options.getUser('target');
        const reason = interaction.options.getString('reason') || 'no reason';
        const minutes = interaction.options.getNumber('minutes');
        const member = await interaction.guild.members.fetch(user.id).catch(console.error);
        await user.send({
            content: `You have kicked from ${interaction.guild.name}\nReason: ${reason}`
        }).catch(console.error);

        await member.timeout(minutes * 60 * 1000, reason).catch(console.error);

        await interaction.reply({
            content: `Timed Out ${user.tag}`
        })
    }
}