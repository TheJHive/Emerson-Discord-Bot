const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clearconsole')
		.setDescription('Clears the node.js console of whomever is running the bot.'),
	async execute(interaction) {
		if (interaction.member.roles.cache.has('813950270773919774')) {
			await interaction.reply('Console cleared!');
			console.clear();
		} else {
			await interaction.reply('You can\'t use this command!');
		}
	},
};