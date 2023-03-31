const { token, dbToken } = require('./config.json');
const { connect } = require('mongoose');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('fs');

const client = new Client({ intents: 32767 });
client.commands = new Collection();
client.buttons = new Collection();
client.selectMenus = new Collection();
client.modals = new Collection();
client.commandArray = [];

const functionFolders = fs.readdirSync(`./functions`);
for (const folder of functionFolders) {
    const functionFiles = fs.readdirSync(`./functions/${folder}`).filter(file => file.endsWith('js'));
    for (const file of functionFiles) {
        require(`./functions/${folder}/${file}`)(client);
    }
}

client.handleEvents();
client.handleCommands();
client.handleComponents();
client.login(token);

(async () => {
    await connect(dbToken).catch(console.error);
})();