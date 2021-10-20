const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

const row = new MessageActionRow()  
    .addComponents(
        new MessageButton()
            .setCustomId('button1')
            .setLabel('Blurple Button')
            .setStyle('PRIMARY'),
        new MessageButton()
            .setCustomId('button2')
            .setLabel('Gray Button')
            .setStyle('SECONDARY'),
        new MessageButton()
            .setCustomId('button3')
            .setLabel('Green Button')
            .setStyle('SUCCESS'),
        new MessageButton()
            .setCustomId('button4')
            .setLabel('Red Button')
            .setStyle('DANGER')
    )
module.exports = {
	data: new SlashCommandBuilder()
		.setName('buttons')
		.setDescription('Makes buttons that do nothing.'),
	async execute(interaction) {
        await interaction.reply({content: 'These buttons do nothing.', components: [row]});
	},
};