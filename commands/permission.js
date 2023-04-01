const { SlashCommandBuilder, PermissionFlagsBits, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('permission')
        .setDescription('create role')
        //required permission to use this command
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addStringOption(option => option
            .setName('input')
            .setDescription('name of the role')),
    async execute(interaction, client) {

        // another method interaction.member.roles.cache.some(role => role.name === 'role name');
        if (interaction.member.roles.cache.has('1090003284695191654')) {
            interaction.member.roles.remove('1090003284695191654');
            interaction.reply('Role has been removed.');
        } else {
            interaction.member.roles.add('1090003284695191654');
            interaction.reply('Role has been added.');
        }

        // create role with permission
        //interaction.guild.roles.create({ name: 'Mod', permissions: [PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.KickMembers] });
    }
}