const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

const hybridSchedule = new MessageEmbed()
	.setColor('#143F69')
	.setImage('https://cdn.schoolloop.com/uimgcdn/aHR0cHM6Ly9lbWVyc29ubXMtbGF1c2QtY2Euc2Nob29sbG9vcC5jb20vdWltZy9maWxlLzE1MDAxNzg5NzM5NzMvMTM4MTgyMjc1NjUzOC8zNDc5MzU0MzkzMzk2NjUwOTgzLnBuZw==%22')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hybridschedule')
		.setDescription('If you run this, you\'ll know what it does.'),
	async execute(interaction) {
		await interaction.reply({content: '**This command is outdated; it is kept due to its historical value.**', embeds: [hybridSchedule]});
	},
};