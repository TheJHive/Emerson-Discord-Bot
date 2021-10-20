const { SlashCommandBuilder } = require('@discordjs/builders');
require('dotenv').config();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stop')
		.setDescription('Completely stops the bot and takes it offline. (This requires both a special role and a password!)')
        .addStringOption(option => option.setName('password').setDescription('Enter stop password').setRequired(true)),
	async execute(interaction) {
		if (!interaction.member.roles.cache.has('890381479534796831')) {
            await interaction.reply('You can\'t use this command!');
            return;
        }
        if (interaction.options.getString('password').trim() == process.env.STOP_PASSWORD) {
            await interaction.reply('Stopping the bot!\nI sure hope you know what you\'re doing.');
            process.exit();
        } else {
            await interaction.reply('Incorrect password!');
        }
	},
};