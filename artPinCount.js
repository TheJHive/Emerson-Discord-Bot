const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('artpincount')
		.setDescription('Gets the amount of messages pinned in #art'),
	async execute(interaction) {
		if (interaction.channel.name !== 'art') {
            await interaction.reply('Please use this in the #art channel!');
        } else {
            interaction.channel.messages.fetchPinned()
                .then(messages => { // This is probably a terrible way of doing this
                    let reply = `The art channel has ${messages.size} pinned messages.`
                    if (messages.size < 50) {
                        interaction.reply(reply);
                    } else if (messages.size = 50) {
                        interaction.reply(reply.concat('\nAn admin will have to make an archival channel for this soon.'));
                    }
                })
        }
	},
};