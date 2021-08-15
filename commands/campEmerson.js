const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('camp-emerson')
		.setDescription('This command is deprecated.'),
	async execute(interaction) {
		await interaction.reply('This command is deprecated.');
	},
};