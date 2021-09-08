const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageAttachment} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fart')
		.setDescription('fart'),
	async execute(interaction) {
		await interaction.reply({files: [new MessageAttachment('./fart.mp3')]});
	},
};