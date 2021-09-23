const {SlashCommandBuilder} = require('@discordjs/builders');

let today = new Date(); // There's probably a better way to do this, but I don't have time to do a cleaner implementation
const firstDay = new Date(today.getFullYear(), 7, 16);
let daysUntilDifference = firstDay.getTime() - today.getTime();
let daysUntil = daysUntilDifference / (1000 * 3600 * 24);
let daysUntilRounded = Math.round(daysUntil);
const lastDay = new Date(today.getFullYear(), 5, 11);
let daysLeftDifference = lastDay.getTime() - today.getTime();
let daysLeft = daysLeftDifference / (1000 * 3600 * 24);
let daysLeftRounded = Math.round(daysLeft);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('daysleft')
		.setDescription('Tells you how many days of school are left.'),
	async execute(interaction) {
		if (today.getTime() < lastDay.getTime()){
            await interaction.reply(`There are ${daysLeftRounded} days left of school.`);
        }
        else if (today.getTime() > lastDay.getTime() && today.getTime() < firstDay.getTime()){
            await interaction.reply(`It\'s currently summer break, and there are ${daysUntilRounded} days left until school starts.`);
        }
	},
};