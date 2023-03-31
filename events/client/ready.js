const { ActivityType } = require('discord.js');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {

        console.log(`Logged as ${client.user.tag}`);

        // rpc (rich presence status)
        client.user.setPresence({ activities: [{ name: 'starting the bot', type: ActivityType.Watching }], status: 'online' });

        setInterval(() => {
            const options = [
                {
                    type: ActivityType.Listening,
                    text: 'for commands',
                    status: 'idle'
                },
                {
                    type: ActivityType.Playing,
                    text: 'chess',
                    status: 'dnd'
                },
                {
                    type: ActivityType.Watching,
                    text: 'the server',
                    status: 'online'
                },
                {
                    type: ActivityType.Competing,
                    text: 'in a tournament',
                    status: 'online'
                }
            ]
            const index = Math.floor(Math.random() * (options.length));
            client.user.setPresence({
                activities: [{
                    name: options[index].text,
                    type: options[index].type
                }],
                status: options[index].status
            });
        }, 10 * 1000);


    }
}