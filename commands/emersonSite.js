const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

const emersonSite = new MessageEmbed()
	.setColor('#143F69')
	.setTitle('Emerson Schoolloop Website')
	.setURL('https://emersonms-lausd-ca.schoolloop.com')
	.setDescription('Emerson Community Charter website on Schoolloop')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('emerson-site')
        .setDescription('Pulls up the link to the Emerson Community Charter website on Schoolloop.'),
    async execute(interaction) {
        await interaction.reply({embeds: [emersonSite]});
    },
};