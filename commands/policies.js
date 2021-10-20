const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const policies = new MessageEmbed()
    .setColor('#143F69')
    .setTitle('Policies and Procedures')
    .setURL('https://emersonms-lausd-ca.schoolloop.com/policiesandprocedures')
    .setDescription('Contains information on School Wide Positive Behavior Intervention and Support, Dress Code, Attendence, Bullying, and more')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('policies')
		.setDescription('Pulls up a link to Emerson\'s Policies and Procedures.'),
	async execute(interaction) {
		await interaction.reply({embeds: [policies]});
	},
};