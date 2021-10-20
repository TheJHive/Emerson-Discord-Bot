const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invitebot')
		.setDescription('Gives you a link to add this bot to your own server!'),
	async execute(interaction) {
		await interaction.reply('Click [here](https://www.youtube.com/watch?v=dQw4w9WgXcQ) to add this bot to your own server!');
	},
};