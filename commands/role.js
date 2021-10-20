const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('role')
		.setDescription('Gives you a role of your class type. Use `/rhelp` for a guide to this command!')
        .addStringOption(option => option.setName('input').setDescription('Enter the role of your class type.').setRequired(true)),
	async execute(interaction) {
        if (interaction.member.roles.cache.has('844002210471608340') || interaction.member.roles.cache.has('844002375501217842') || interaction.member.roles.cache.has('844002450976538624')){
            await interaction.reply('You already have a class role! Ask a staff member if you need to change it.');
            return;
        }
		const argument = interaction.options.getString('input').trim();
        switch (argument) {
            case 'highly accelerated':
                await interaction.member.roles.add(interaction.guild.roles.cache.find(role => role.id == '844002210471608340'));
                await interaction.reply('You have been given the Highly Accelerated role!');
                break;
            case 'accelerated':
                await interaction.member.roles.add(interaction.guild.roles.cache.find(role => role.id == '844002375501217842'));
                await interaction.reply('You have been given the Accelerated role!');
                break;
            case 'general ed':
                await interaction.member.roles.add(interaction.guild.roles.cache.find(role => role.id == '844002450976538624'));
                await interaction.reply('You have been given the General Ed role!');
                break;
            default:
                await interaction.reply('That\'s not a role! Use /r-help for a guide to the role command.');
        }
	},
};