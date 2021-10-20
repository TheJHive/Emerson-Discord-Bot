const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('calculator')
		.setDescription('Put numbers and an operator with this command and the bot will act as a calculator.')
        .addNumberOption(option => option.setName('num1').setDescription('Enter your first number').setRequired(true))
        .addStringOption(option => option.setName('operator').setDescription('Enter your operator (+, -, x, /)').setRequired(true))
        .addNumberOption(option => option.setName('num2').setDescription('Enter your second number').setRequired(true)),
	async execute(interaction) {
        const num1 = interaction.options.getNumber('num1');
		const operator = interaction.options.getString('operator');
        const num2 = interaction.options.getNumber('num2');
        switch (operator) {
            case '+':
                var result = num1 + num2; // So for some reason it won't let me use const or let but var works?
                break;
            case '-':
                var result = num1 - num2;
                break;
            case 'x':
                var result = num1 * num2;
                break;
            case '/':
                var result = num1 / num2;
                break;
            default:
                await interaction.reply('Invalid operator! Try that again.\n(Valid operators: `+` `-` `x` `/`)');
                return;
        }
        if (isNaN(result) || result == Infinity){
            await interaction.reply('Please don\'t divide by zero. It makes my code sad. \:(');
        } else {
            await interaction.reply(`Your answer is ${result}`);
        }
	},
};