const { SlashCommandBuilder } = require('@discordjs/builders');

const crashMessages = [
    'Well this is a fine situation you\'ve gotten us into.',
    'Oh, what now?',
    'I sure hope you know what you\'re doing.',
    'You\'re mean.',
    'Help!',
    'What\'re ya doin\' around here?',
    ':('
]

module.exports = {
	data: new SlashCommandBuilder()
		.setName('crash')
		.setDescription('Throws an error and stops the bot. (Only the great lord of the bot can use this!)'),
    error: new Error(`The bot's been crashed by command!\n"${crashMessages[Math.floor(Math.random() * crashMessages.length)]}"`),
	async execute(interaction) {
		if (interaction.user.id == '702952339547357255') {
            throw new Error('Bot crashed by command');
        } else {
            await interaction.reply('You can\'t use this command!');
        }
	},
};