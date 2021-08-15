require('dotenv').config();

const {Client, Collection, Intents, MessageEmbed} = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const {REST} = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v9');
const token = process.env.DISCORD_TOKEN;
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

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
	commands.push(command.data.toJSON());
}

const rest = new REST({version: '9'}).setToken(token);

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

/* Comment out all of these during vacation times.
// Mondays (This also controls the lunch break and AT lock tasks for all days)
cron.schedule('30 7 * * 1-5', () => {
	client.channels.cache.get('804469098150232085').send('Your AT class may be starting.');
}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
cron.schedule('0 8 * * 1-5', () => {
	client.channels.cache.get('804469098150232085').send('Your AT class may be starting.');
}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
cron.schedule('30 8 * * 1-5', () => {
	client.channels.cache.get('804469098150232085').send('Your AT class may be starting.');
}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
cron.schedule('0 9 * * 1', () => {
	client.channels.cache.get('804469098150232085').send('Class is starting.');
}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
cron.schedule('0 10 * * 1-5', () => {
	client.channels.cache.get('804469098150232085').send('Lunch break is starting.');
}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
cron.schedule('50 10 * * 1', () => {
	client.channels.cache.get('804469098150232085').send('Class is starting.');}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
cron.schedule('0 12 * * 1', () => {
	client.channels.cache.get('804469098150232085').send('Class is starting.');
}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
// Tuesdays and Thursdays
cron.schedule('0 9 * * 2,4', () => {
	client.channels.cache.get('804469098150232085').send('Period 1 is starting.');
}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
cron.schedule('0 11 * * 2,4', () => {
	client.channels.cache.get('804469098150232085').send('Period 3 is starting.');
}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
cron.schedule('20 12 * * 2,4', () => {
	client.channels.cache.get('804469098150232085').send('Period 5 is starting.');
}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
// Wednesdays and Fridays
cron.schedule('0 9 * * 3,5', () => {
	client.channels.cache.get('804469098150232085').send('Period 2 is starting.');
}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
cron.schedule('0 11 * * 3,5', () => {
	client.channels.cache.get('804469098150232085').send('Period 4 is starting.');
}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
cron.schedule('20 12 * * 3,5', () => {
	client.channels.cache.get('804469098150232085').send('Period 6 is starting.');
}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
cron.schedule('30 13 * * 5', () => {
	general.send('gaming time');
});
*/

const blockedWords = fs.readFileSync('blockedWords.txt').toString().split('\n');
client.on('messageCreate', message => {
	if (message.channel.name === 'art' && message.attachments.size > 0 && message.member.roles.cache.has('833731538020597831') && !message.content.toLowerCase().includes('don\'t pin')){
		message.reply(`Great art, ${message.author}!`);
		message.pin();
		return;
	}
	if (blockedWords.some(word => message.content.toLowerCase().includes(word))){
		message.delete();
		console.log(`A message by ${message.author.tag} was deleted: ` + '"' + message.content + '"');
		return;
	}
	if (message.content === 'ping'){
		message.reply({content: 'pong', allowedMentions: {repliedUser: false}});
		console.log(`${message.author.tag} pinged`);
		return;
	}
	if (message.content.toLowerCase() === 'egg' && message.author.id !== client.user.id){
		if (Math.floor(Math.random() * 50) == 1){
			message.reply({content: 'no', allowedMentions: {repliedUser: false}});
			console.log(`${message.author.tag} got the lucky egg no!`);
			return;
		}else{
			message.channel.send('egg');
			console.log('egg');
			return;
		}
  	}
	return; // I'm leaving this here as legacy code if anyone goes rooting through GitHub. It's unreachable unless this return statement is removed.
			//Everything else has either been moved to Slash Commands and can be found in the commands folder or deprecated.
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
			return;
		};
	}
});
