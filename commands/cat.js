const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cat')
		.setDescription('Sends a random cat from https://aws.random.cat/meow (This is mostly an experiment with REST APIs.)'),
	async execute(interaction) {
        const {file} = await fetch('https://aws.random.cat/meow').then(response => response.json());
		try {
			await interaction.reply({files: [file]});
		} catch (error) {
			console.error(error);
			await interaction.reply({content: 'There was an error while executing this command!', ephemeral: true});
		}
	},
};