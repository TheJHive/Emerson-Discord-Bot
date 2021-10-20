const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dog')
		.setDescription('Sends a random dog from https://dog.ceo/api/breeds/image/random'),
	async execute(interaction) {
        const {message} = await fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json());
		try {
			await interaction.reply({files: [message]});
		} catch (error) {
			console.error(error);
			await interaction.reply({content: 'There was an error while executing this command!', ephemeral: true});
		}
	},
};