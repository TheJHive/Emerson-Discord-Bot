const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

const lunchGroups = new MessageEmbed()
	.setColor('#143F69')
	.setTitle('Lunch Time Student Groups')
	.setDescription('Zoom links to Lunch Time Student Groups')
	.addFields(
		{name: 'Ms. Stuback:', value: '[Tuesdays - Virtual Games](https://lausd.zoom.us/j/86829474922)'},
		{name: 'Ms. Denmark:', value: '[Thursdays - Virtual Games](https://lausd.zoom.us/j/88063416174) Passcode: 942583'},
		{name: 'Ms. Nakada / Ms. Montgomery:', value: '[Thursdays - Prep for Black History assembly](https://lausd.zoom.us/j/89616593281)'},
		{name: 'Mrs. Scatolini:', value: '[Fridays - Re-aloud books, poetry](https://lausd.zoom.us/j/86768712414)'},
		{name: 'Mrs. Wilson:', value: '[Wednesdays - Artists Forum](https://lausd.zoom.us/j/85721052868)'},
		{name: 'Ms. Farahmand:', value: '[Wednesdays - 6th graders "Get to Know Me"](https://lausd.zoom.us/j/86218487091)'},
		{name: 'Mr. Tarula:', value: '[Wednesdays - Gender and Sexuality Alliance (GSA) - 2:30](https://lausd.zoom.us/j/9631712734)'},
		{name: 'Ms. Muckenthaler:', value: '[Wednesdays - Free-for-All](https://lausd.zoom.us/j/89472759017)'},
		{name: 'Ms. Muckenthaler:', value: '[Tuesdays 2:30 - 3:30 support group (grief support and just kids struggling right now)](https://lausd.zoom.us/j/88180349377)'},
	);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lunchgroups')
		.setDescription('Pulls up a list of Lunch Time Student Group Zoom links.'),
	async execute(interaction) {
		await interaction.reply({content: '**This command is outdated; it is kept due to its historical value.**', embeds: [lunchGroups]});
	},
};