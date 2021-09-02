const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

const rHelp = new MessageEmbed()
	.setColor('#143569')
	.setTitle('Role Command Help')
	.setDescription('To get roles through the role command, you must enter the initial command, `e!role` and then an argument, which would be the role name. There are different categories of roles in this command. You can only have one role per category.')
	.addFields(
		{name: 'Class Roles', value: 'Highly Accelerated\nAccelerated\nGeneral Ed', inline: true},
		{name: 'Example Command', value: 'Command: `/role highly accelerated`\nThe bot will give me the Highly Accelerated role. (Arguments are not case sensitive, so capitalization does not matter.)'},
		{name: 'These roles are not mandatory or required.', value: 'They also do not change what channels you can and cannot see.'}
	)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rhelp')
		.setDescription('Displays a guide to the /role command.'),
	async execute(interaction) {
		await interaction.reply({embeds: [rHelp]});
	},
};