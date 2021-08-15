const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('github')
		.setDescription('Pulls up a link to the public bot GitHub repo.'),
	async execute(interaction) {
		await interaction.reply('[Emerson Discord Bot GitHub Repository](https://github.com/TheJHive/Emerson-Discord-Bot)');
	},
};