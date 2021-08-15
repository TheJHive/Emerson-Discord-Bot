const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

const calendar = new MessageEmbed()
	.setColor('#143F69')
	.setTitle('Spring 2021 Semester Calendar')
	.setURL('https://docs.google.com/document/d/1bClVuj7aylwYsFeP-VMwqgbhvWLM1LoYjLiWyXR7_UY')
	.setDescription('Calendar of periods for each day in the Spring 2021 Semester')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('calendar')
		.setDescription('(OUTDATED) Pulls up the Google Docs calendar of the Spring 2021 Semester.'),
	async execute(interaction) {
		await interaction.reply({content: '**This command is outdated; it is kept due to its historical value.**', embeds: [calendar]});
	},
};