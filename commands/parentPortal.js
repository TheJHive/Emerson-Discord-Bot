const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const parentPortal = new MessageEmbed()
	.setColor('#143F69')
	.setTitle('LAUSD Parent Portal Student Login')
	.setURL('https://parentportalapp.lausd.net/parentaccess/studentLogin.jsp')
	.setDescription('**Reminder:** Don\'t put @mymail.lausd.net in the email section')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('parentportal')
		.setDescription('Pulls up the link to the LAUSD Parent Portal Student Login, where you can get your SSID.'),
	async execute(interaction) {
		await interaction.reply({embeds: [parentPortal]});
	},
};