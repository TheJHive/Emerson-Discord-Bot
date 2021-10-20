const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const tutoring = new MessageEmbed()
	.setColor('#143F69')
	.setImage('https://emersonms-lausd-ca.schoolloop.com/file/1500178973973/1424590026792/3160407590931805703.jpg')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tutoring')
		.setDescription('Displays the tutoring schedule of teachers.'),
	async execute(interaction) {
		await interaction.reply({content: '**This command is outdated; it is kept due to its historical value.**', embeds: [tutoring]});
	},
};