const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

const help = new MessageEmbed()
	.setColor('#143F69')
	.setTitle('Commands List')
	.setDescription('Here are my commands. All commands start with `/`\n**I am not the definitive source of information!** Always check official websites before blindly trusting me.\nMany commands here were only relevant during online/hybrid school and are now outdated. They are kept due to historical value.')
	.addFields(
		{name: '`/help`', value: 'If you\'ve run this command, you know what it does now.', inline: true},
		{name: '`/credits`', value: 'Shows the credits of the bot programmers. (Literally one kid who looked at a bunch of websites)', inline: true},
		{name: '`/calendar`', value: 'Pulls up the Google Docs calendar of the Spring 2021 Semester.', inline: true},
		{name: '`/teachers`', value: 'Pulls up a list of all the teachers in this server and their Schoology pages.', inline: true},
		{name: '`/emerson-site`', value: 'Pulls up the link to the Emerson Community Charter website on Schoolloop.', inline: true},
		{name: '`/office-hours`', value: 'Pulls up a list of the teachers\' office hour Zoom times.', inline: true},
		{name: '`/online-schedule`', value: 'Displays the weekly schedule calendar of periods and times for **online** classes.', inline: true},
		{name: '`/hybrid-schedule`', value: 'Displays the weekly schedule calendar of periods and times for **hybrid** classes.', inline: true},
		{name: '`/tutoring`', value: 'Displays the tutoring schedule of teachers.', inline: true},
		{name: '`/lunch-groups`', value: 'Pulls up a list of Lunch Time Student Group Zoom links.', inline: true},
		{name: '`/parent-portal`', value: 'Pulls up the link to the LAUSD Parent Portal Student Login, where you can get your SSID.', inline: true},
		{name: '`/days-left`', value: 'Tells you how many days of school are left.', inline: true},
		{name: '`/role`', value: 'Gives you certain roles based off of what you use the command with. **Use `/r-help` for a guide to this command!**', inline: true},
		{name: '`/camp-emerson`', value: 'This command is deprecated.', inline: true},
		{name: '`/policies`', value: 'Pulls up a link to Emerson\'s Policies and Procedures.', inline: true},
		{name: '`/buttons`', value: 'Makes buttons that do nothing.', inline: true},
		{name: '`/github`', value: 'Pulls up a link to the public bot GitHub repo.', inline: true},
		{name: '`/invite-bot`', value: 'Gives you a link to add this bot to your own server!', inline: true},
		{name: '`/fart`', value: 'fart', inline: true}
	);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('If you run this, you\'ll know what it does.'),
	async execute(interaction) {
		await interaction.reply({embeds: [help]});
	},
};