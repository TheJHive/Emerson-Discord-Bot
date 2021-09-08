require('dotenv').config();

const {Client, Collection, Intents} = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const token = process.env.DISCORD_TOKEN;
const {REST} = require('@discordjs/rest');
const rest = new REST({version: '9'}).setToken(token);
const {Routes} = require('discord-api-types/v9');
const cron = require('node-cron');
const fs = require('fs');

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(token);

const commands = []; // I'll be honest with you, I have no idea what the next 30-something lines do but it works so it stays
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const clientId = '813454981906432021';
const guildId = '755892311380066474';

for (const file of commandFiles){
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
	commands.push(command.data.toJSON());
}

/* //Reminder: Every time you make a new command, run the code at least once with this uncommented.
(async () => {
	try {
		console.log('Started refreshing application (/) commands.');
		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{body: commands},
		);
		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();
*/

cron.schedule('* 15 15 * *', () => {
	client.channels.cache.get('804468992118095922').send('Daily reminder to do your homework!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const {commandName} = interaction;
	if (!client.commands.has(commandName)) return;

	function logInteraction(){
		console.log(`${interaction.user.username} used /${commandName}`);
	};

	try {
		await client.commands.get(commandName).execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({content: 'There was an error while executing this command!', ephemeral: true});
	}
	const collector = interaction.channel.createMessageComponentCollector({time: 15000});

	collector.on('collect', async i => {
		await i.update('I said, they do nothing.');
	});
	logInteraction();
});

const blockedWords = fs.readFileSync('blockedWords.txt').toString().split('\n');

client.on('threadCreate', async thread => {
	if (blockedWords.some(word => thread.name.includes(word))){
		await thread.delete();
		console.log(`A thread by ${thread.ownerId} was deleted: ${thread.name}`);
	}
});

client.on('messageUpdate', async (oldMessage, newMessage) => { // oldMessage is never read but it needs to be there so don't remove it
	if (blockedWords.some(word => newMessage.content.toLowerCase().includes(word))){
		await newMessage.delete();
		console.log(`A message by ${newMessage.author.tag} was deleted after being edited: ${newMessage.content}`);
	}
});

client.on('messageCreate', async message => {
	if (message.channel.name == 'art' && message.attachments.size > 0 && message.member.roles.cache.has('833731538020597831') && !message.content.toLowerCase().includes('don\'t pin')){
		await message.reply(`Great art, ${message.author}!`);
		await message.pin();
		return;
	}
	if (blockedWords.some(word => message.content.toLowerCase().includes(word))){
		await message.delete();
		console.log(`A message by ${message.author.tag} was deleted: ${message.content}`);
		return;
	}
	if (message.embeds[0] && message.embeds[0].title !== null){
		if (blockedWords.some(word => message.embeds[0].title.toLowerCase().includes(word))){
			await message.delete();
			console.log(`A message by ${message.author.tag} was deleted for embed: ${message.content}`);
			return;
		}
	}
	if (message.content == 'ping'){
		await message.reply({content: 'pong', allowedMentions: {repliedUser: false}});
		console.log(`${message.author.tag} pinged`);
		return;
	}
	if (message.content.toLowerCase() == 'egg' && message.author.id !== client.user.id){
		if (Math.floor(Math.random() * 50) == 1){
			await message.reply({content: 'no', allowedMentions: {repliedUser: false}});
			console.log(`${message.author.tag} got the lucky egg no!`);
			return;
		}else{
			await message.channel.send('egg');
			console.log('egg');
			return;
		}
  	}
	return; // I'm leaving this here as legacy code if anyone goes rooting through GitHub. It's unreachable unless this return statement is removed.
           //  Everything else has either been moved to Slash Commands and can be found in the commands folder or deprecated.
          //   I won't be updating any code here, even if some stuff from discord.js in here gets deprecated.
	if (!message.content.startsWith('e!') || message.author.bot){
		return;
	}
	if (message.content.toLowerCase().startsWith('e!')){
		if (message.content.startsWith('e!calc') || message.content.startsWith('e!calculator')){
			let splitStrings = message.content.split(' ');
			let firstNumber = parseInt(splitStrings[1]);
			let secondNumber = parseInt(splitStrings[2]);
			let operator = splitStrings[3];
			// TODO: Fix decimals. This handler is funny but also the equivalent of a duct-taped together birdhouse.
			if (message.content.includes('.')){
				message.reply({content: 'Numbers with decimals are currently not supported because the developer is dumb and doesn\'t know how to make JavaScipt math do that', allowedMentions: {repliedUser: false}});
			}else // This is some serious spaghetti code right here. 
			switch (operator){
				case 'add':
				case '+':
					if (isNaN(firstNumber + secondNumber)){
						message.reply({content: 'You have to put in numbers, not letters, silly!', allowedMentions: {repliedUser: false}});
					}else{
						message.reply({content: `Your answer is **${firstNumber + secondNumber}**.`, allowedMentions: {repliedUser: false}});
					}
					break;
				case 'subtract':
				case '-':
					if (isNaN(firstNumber - secondNumber)){
						message.reply({content: 'You have to put in numbers, not letters, silly!', allowedMentions: {repliedUser: false}});
					}else{
						message.reply({content: `Your answer is **${firstNumber - secondNumber}**.`, allowedMentions: {repliedUser: false}});
					}
					break;
				case 'multiply':
				case 'x':
					if (isNaN(firstNumber * secondNumber)){
						message.reply({content: 'You have to put in numbers, not letters, silly!', allowedMentions: {repliedUser: false}});
					}else{
						message.reply({content: `Your answer is **${firstNumber * secondNumber}**.`, allowedMentions: {repliedUser: false}});
					}
					break;
				case 'divide':
				case '/':
					if (isNaN(firstNumber / secondNumber)){
						message.reply({content: 'You have to put in numbers, not letters, silly!', allowedMentions: {repliedUser: false}});
					}else{
						message.reply({content: `Your answer is **${firstNumber / secondNumber}**.`, allowedMentions: {repliedUser: false}});
					}
					break;
				default:
					message.reply({content: 'Something went wrong with your command. Use `e!c-help` for a guide to the calculator.', allowedMentions: {repliedUser: false}});
					break;
			}
			console.log(`${message.author.tag} ran the calculator with numbers ` + firstNumber + ' and ' + secondNumber + ' with operator ' + operator);
			// What the heck was I doing with this log message
			// Clearly I didn't know how template literals worked and just copy-pasted that
			return;
		};
	}
});
