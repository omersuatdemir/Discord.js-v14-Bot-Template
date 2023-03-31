//more at https://discordjs.guide/popular-topics/faq.html#how-do-i-ban-a-user

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('ban example')
        .addUserOption(option => option
            .setName('target')
            .setDescription('target user')
            .setRequired(true))
        .addStringOption(option => option
            .setName('reason')
            .setDescription('the reason')),
    async execute(interaction, client) {
        const user = interaction.options.getUser('target');
        const reason = interaction.options.getString('reason') || 'no reason';
        const member = await interaction.guild.members.fetch(user.id).catch(console.error);
        await user.send({
            content: `You have banned from ${interaction.guild.name}\nReason: ${reason}`
        }).catch(console.error);
        
        await member.ban({
            reason: reason
        }).catch(console.error);

        await interaction.reply({
            content: `Banned ${user.tag}`
        })
    }
}