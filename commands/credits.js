const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const credits = new MessageEmbed()
	.setColor('#143F69')
	.setTitle('Credits')
	.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
	.setDescription('Bot made by <@702952339547357255>')
	.addFields(
		{name: '(He really didn\'t make the bot)', value: '~~(He just threw together stuff from StackOverflow, tutorials and the Discord.js Guide)~~\nIt\'s much more sophisticated now, please can we say I made it?'},
		{name: 'Dependencies:', value: 'The node packages the bot uses'},
		{name: 'Discord.js', value: 'For obvious reasons\n[Website](https://discord.js.org/#/)'},
		{name: 'dotenv', value: 'For storage of bot token and authorization\n[npm page](https://www.npmjs.com/package/dotenv)'},
		{name: 'Node Cron', value: 'For scheduled class reminders\n[npm page](https://www.npmjs.com/package/node-cron)'},
		{name: 'And one more thing', value: 'A huge thank-you to the [Discord.js Guide](https://discordjs.guide/).'}
	);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('credits')
		.setDescription('Shows the credits of the bot programmers. (Literally one kid who looked at a bunch of websites)'),
	async execute(interaction) {
		await interaction.reply({embeds: [credits]});
	},
};