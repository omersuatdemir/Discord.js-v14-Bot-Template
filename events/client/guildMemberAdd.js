const { Events, EmbedBuilder  } = require('discord.js');
const { welcomeChannelId } = require('../../config.json');

module.exports = {
    name: Events.GuildMemberAdd,
    async execute(member) {
        
        const embed = new EmbedBuilder()
        .setThumbnail(member.user.displayAvatarURL()?member.user.displayAvatarURL():'https://www.google.com/url?sa=i&url=https%3A%2F%2Farchive.org%2Fdetails%2Fdiscordprofilepictures&psig=AOvVaw04fMpwMm3BBxbGsmEgyOpV&ust=1680425789249000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCDjfeniP4CFQAAAAAdAAAAABAD')
        .setColor('Aqua')
        .setTitle('Welcome! 🎉🎉🎉')
        .setDescription(`<@${member.user.id}> joined to ${member.guild.name}\nTotal Member: ${member.guild.memberCount}`);
        //${client.guilds.get(member.guild.id).memberCount}`);

        member.guild.channels.cache.get(welcomeChannelId).send({ embeds: [embed] });
    },
};