const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const officeHours = new MessageEmbed()
	.setColor('#143F69')
	.setTitle('Office Hours')
	.setDescription('**Teacher office hours are 2:15 - 2:45 M-F unless stated otherwise below:**')
	.addFields(
		{name: 'Mr. Tarula:', value: '8:30 - 9 a.m. daily', inline: true},
		{name: 'Ms. Reynoso:', value: '8:30 - 9 a.m. M/W/F - 7:30 - 8 a.m. T/Th', inline: true},
		{name: 'Mrs. Nakada:', value: '8:30 - 9 a.m. daily', inline: true},
		{name: 'Mrs. Hernandez:', value: '8:30 - 9 a.m. M/W/F and T/Th by appt.', inline: true},
		{name: 'Mrs. Fukuji:', value: '8:30 - 9 a.m. M/W/F and T/Th by appt.', inline: true},
		{name: 'Mr. Kamm:', value: '8:30 - 9 a.m. daily', inline: true},
		{name: 'Mr. Hastings:', value: '8:30 - 9 a.m. daily via Google voice 949-371-6683, call or text', inline: true}
	);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('officehours')
		.setDescription('(OUTDATED) Pulls up a list of the teachers\' office hour Zoom times.'),
	async execute(interaction) {
		await interaction.reply({content: '**This command is outdated; it is kept due to its historical value.**', embeds: [officeHours]});
	},
};