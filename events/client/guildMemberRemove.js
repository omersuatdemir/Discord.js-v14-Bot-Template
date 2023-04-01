const { Events } = require('discord.js');
const { welcomeChannelId } = require('../../config.json');

module.exports = {
    name: Events.GuildMemberRemove,
    async execute(member) {
        member.guild.channels.cache.get(welcomeChannelId).send({ content: `${member.user.tag} has left the server.` });
    },
};