const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const teachers = new MessageEmbed()
	.setColor('#143F69')
	.setTitle('List of teachers in this server')
	.addFields(
		{name: 'Ms. Barbeau:', value: '[Schoology Page](https://lms.lausd.net/user/35794485/info)'},
		{name: 'Ms. Fukuji:', value: '[Schoology Page](https://lms.lausd.net/user/45706285/info)'}
	);

    module.exports = {
        data: new SlashCommandBuilder()
            .setName('teachers')
            .setDescription('Pulls up a list of all the teachers in this server and their Schoology pages.'),
        async execute(interaction) {
            await interaction.reply({embeds: [teachers]});
        },
    };