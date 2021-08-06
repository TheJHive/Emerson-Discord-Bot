require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const cron = require('node-cron');
const fs = require('fs');
require('./server')();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);

const general = client.channels.cache.get('804469176214749214');
let channelsLocked = false; // The whole locking system works around this variable so be careful with it

// "IT'S BROKEN!" -Lando Norris
function lock(){
	//general.parent.updateOverwrite(general.guild.roles.everyone, {SEND_MESSAGES: false});
	channelsLocked = true;
};
function unlock(){
	//general.parent.updateOverwrite(general.guild.roles.everyone, {SEND_MESSAGES: true});
	channelsLocked = false;
};
unlock(); // Yes, this means the bot unlocks the channels every time you start it up. Hopefully this won't cause a problem after perma-online is achieved with UptimeRobot.

/* Comment out all of these during vacation times.
// Mondays (This also controls the lunch break and AT lock tasks for all days)
cron.schedule('30 7 * * 1-5', () => {
	client.channels.cache.get('804469098150232085').send('Your AT class may be starting.');
	if (channelsLocked == false){
		lock();
		general.send('Channels locked.');
		console.log('Channels locked');
	}else{
		return;
	}
}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
cron.schedule('0 8 * * 1-5', () => {
	client.channels.cache.get('804469098150232085').send('Your AT class may be starting.');
	if (channelsLocked == false){
		lock();
		general.send('Channels locked.');
		console.log('Channels locked');
	}else{
		return;
	}
}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
cron.schedule('30 8 * * 1-5', () => {
	client.channels.cache.get('804469098150232085').send('Your AT class may be starting.');
	if (channelsLocked == false){
		lock();
		general.send('Channels locked.');
		console.log('Channels locked');
	}else{
		return;
	}
}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
cron.schedule('0 9 * * 1', () => {
	client.channels.cache.get('804469098150232085').send('Class is starting.');
	if (channelsLocked == false){
		lock();
		general.send('Channels locked.');
		console.log('Channels locked');
	}else{
		return;
	}
}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
cron.schedule('0 10 * * 1-5', () => {
	client.channels.cache.get('804469098150232085').send('Lunch break is starting.');
	if (channelsLocked == true){
		unlock();
		general.send('Channels unlocked.');
		console.log('Channels unlocked.');
	}else{
		return;
	}
}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
cron.schedule('50 10 * * 1', () => {
	client.channels.cache.get('804469098150232085').send('Class is starting.');
	if (channelsLocked == false){
		lock();
		general.send('Channels locked.');
		console.log('Channels locked');
	}else{
		return;
	}
}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
cron.schedule('0 12 * * 1', () => {
	client.channels.cache.get('804469098150232085').send('Class is starting.');
	if (channelsLocked == false){
		lock();
		general.send('Channels locked.');
		console.log('Channels locked');
	}else{
		return;
	}
}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
cron.schedule('0 13 * * 1', () => {
	if (channelsLocked == true){
		unlock();
		general.send('Channels unlocked.');
		console.log('Channels unlocked.');
	}else{
		return;
	}
}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
// Tuesdays and Thursdays
cron.schedule('0 9 * * 2,4', () => {
	client.channels.cache.get('804469098150232085').send('Period 1 is starting.');
	if (channelsLocked == false){
		lock();
		general.send('Channels locked.');
		console.log('Channels locked');
	}else{
		return;
	}
}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
cron.schedule('0 11 * * 2,4', () => {
	client.channels.cache.get('804469098150232085').send('Period 3 is starting.');
	if (channelsLocked == false){
		lock();
		general.send('Channels locked.');
		console.log('Channels locked');
	}else{
		return;
	}
}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
cron.schedule('20 12 * * 2,4', () => {
	client.channels.cache.get('804469098150232085').send('Period 5 is starting.');
	if (channelsLocked == false){
		lock();
		general.send('Channels locked.');
		console.log('Channels locked');
	}else{
		return;
	}
}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
cron.schedule('30 13 * * 2,4', () => {
	if (channelsLocked == true){
		unlock();
		general.send('Channels unlocked.');
		console.log('Channels unlocked.');
	}else{
		return;
	}
}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
// Wednesdays and Fridays
cron.schedule('0 9 * * 3,5', () => {
	client.channels.cache.get('804469098150232085').send('Period 2 is starting.');
	if (channelsLocked == false){
		lock();
		general.send('Channels locked.');
		console.log('Channels locked');
	}else{
		return;
	}
}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
cron.schedule('0 11 * * 3,5', () => {
	client.channels.cache.get('804469098150232085').send('Period 4 is starting.');
	if (channelsLocked == false){
		lock();
		general.send('Channels locked.');
		console.log('Channels locked');
	}else{
		return;
	}
}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
cron.schedule('20 12 * * 3,5', () => {
	client.channels.cache.get('804469098150232085').send('Period 6 is starting.');
	if (channelsLocked == false){
		lock();
		general.send('Channels locked.');
		console.log('Channels locked');
	}else{
		return;
	}
}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
cron.schedule('30 13 * * 3,5', () => {
	if (channelsLocked == true){
		unlock();
		general.send('Channels unlocked.');
		console.log('Channels unlocked.');
	}else{
		return;
	}
}, {
  scheduled: true,
  timezone: 'America/Los_Angeles'
});
cron.schedule('30 13 * * 5', () => {
	general.send('gaming time');
});
*/

const help = new Discord.MessageEmbed()
	.setColor('#143F69')
	.setTitle('Commands List')
	.setDescription('Here are my commands. All commands start with `e!`\n**I am not the definitive source of information!** Always check official websites before blindly trusting me.')
	.addFields(
		{name: '`e!help`', value: 'If you\'ve run this command, you know what it does now.', inline: true},
		{name: '`e!credits`', value: 'Shows the credits of the bot programmers. (Literally one kid who looked at a bunch of websites)', inline: true},
		{name: '`e!calendar`', value: 'Pulls up the Google Docs calendar of the Spring 2021 Semester.', inline: true},
		{name: '`e!teachers`', value: 'Pulls up a list of all the teachers in this server and their Schoology pages.', inline: true},
		{name: '`e!emerson-site`', value: 'Pulls up the link to the Emerson Community Charter website on Schoolloop.', inline: true},
		{name: '`e!office-hours`', value: 'Pulls up a list of the teachers\' office hour Zoom times.', inline: true},
		{name: '`e!online-schedule`', value: 'Displays the weekly schedule calendar of periods and times for **online** classes.', inline: true},
		{name: '`e!hybrid-schedule`', value: 'Displays the weekly schedule calendar of periods and times for **hybrid** classes.', inline: true},
		{name: '`e!tutoring`', value: 'Displays the tutoring schedule of teachers.', inline: true},
		{name: '`e!lunch-groups`', value: 'Pulls up a list of Lunch Time Student Group Zoom links.', inline: true},
		{name: '`e!parent-portal`', value: 'Pulls up the link to the LAUSD Parent Portal Student Login, where you can get your SSID.', inline: true},
		{name: '`e!days-left`', value: 'Tells you how many days of school are left.', inline: true},
		{name: '`e!calc` or `e!calculator`', value: 'Put numbers and an operator with this command and the bot will act as a calculator. **Use `e!c-help` for a guide to this command!**', inline: true},
		{name: '`e!role`', value: 'Gives you certain roles based off of what you use the command with. **Use `e!r-help` for a guide to this command!**', inline: true},
		{name: '`e!camp-emerson`', value: 'Pulls up information about Camp Emerson.', inline: true},
		{name: '`e!invite-bot`', value: 'Gives you a link to add this bot to your own server!', inline: true},
		{name: '`e!fart`', value: 'fart', inline: true}
	);
const credits = new Discord.MessageEmbed()
	.setColor('#143F69')
	.setTitle('Credits')
	.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
	.setDescription('Bot made by <@702952339547357255>')
	.addFields(
		{name: '(He really didn\'t make the bot)', value: '(He just threw together stuff from StackOverflow and tutorials)'},
		{name: 'Dependencies:', value: 'The node packages the bot uses'},
		{name: 'Discord.js', value: 'For obvious reasons\n[Website](https://discord.js.org/#/)'},
		{name: 'dotenv', value: 'For storage of bot token and authorization\n[npm page](https://www.npmjs.com/package/dotenv)'},
		{name: 'Node Cron', value: 'For scheduled class reminders\n[npm page](https://www.npmjs.com/package/node-cron)'}
	);
const calendar = new Discord.MessageEmbed()
	.setColor('#143F69')
	.setTitle('Spring 2021 Semester Calendar')
	.setURL('https://docs.google.com/document/d/1bClVuj7aylwYsFeP-VMwqgbhvWLM1LoYjLiWyXR7_UY')
	.setDescription('Calendar of periods for each day in the Spring 2021 Semester')
const teachers = new Discord.MessageEmbed()
	.setColor('#143F69')
	.setTitle('List of teachers in this server')
	.addFields(
		{name: 'Ms. Barbeau:', value: '[Schoology Page](https://lms.lausd.net/user/35794485/info)'},
		{name: 'Ms. Fukuji:', value: '[Schoology Page](https://lms.lausd.net/user/45706285/info)'}
	);
const emersonSite = new Discord.MessageEmbed()
	.setColor('#143F69')
	.setTitle('Emerson Schoolloop Website')
	.setURL('https://emersonms-lausd-ca.schoolloop.com')
	.setDescription('Emerson Community Charter website on Schoolloop')
const officeHours = new Discord.MessageEmbed()
	.setColor('#143F69')
	.setTitle('Office Hours')
	.setDescription('**Teacher office hours are 2:15 - 2:45 M-F unless stated otherwise below:**')
	.addFields(
		{name: 'Mr. Tarula:', value: '8:30 - 9 a.m. daily', inline: true},
		{name: 'Ms. Reynoso:', value: '8:30 - 9 a.m. M/W/F - 7:30 - 8 a.m. T/Th', inline: true},
		{name: 'Mrs. Nakada:', value: '8:30 - 9 a.m. daily', inline: true},
		{name: 'Mrs. Hernandez:', value: '8:30 - 9 a.m. M/W/F and T/Th by appt.', inline: true},
		{name: 'Mrs. Fukuji:', value: '8:30 - 9 a.m. M/W/F and T/Th by appt.', inline: true},
		{name: 'Mr. Kamm:', value: '8:30 - 9 a.m. daily', inline: true},
		{name: 'Mr. Hastings:', value: '8:30 - 9 a.m. daily via Google voice 949-371-6683, call or text', inline: true}
	);
const onlineSchedule = new Discord.MessageEmbed()
	.setColor('#143F69')
	.setImage('https://cdn.schoolloop.com/uimgcdn/aHR0cHM6Ly9lbWVyc29ubXMtbGF1c2QtY2Euc2Nob29sbG9vcC5jb20vdWltZy9maWxlLzE1MDAxNzg5NzM5NzMvMTM4MTgyMjc1NjUzOC8zMzYyMzkyMTUzMjgwOTQ0MTI2LnBuZw==')
const hybridSchedule = new Discord.MessageEmbed()
	.setColor('#143F69')
	.setImage('https://cdn.schoolloop.com/uimgcdn/aHR0cHM6Ly9lbWVyc29ubXMtbGF1c2QtY2Euc2Nob29sbG9vcC5jb20vdWltZy9maWxlLzE1MDAxNzg5NzM5NzMvMTM4MTgyMjc1NjUzOC8zNDc5MzU0MzkzMzk2NjUwOTgzLnBuZw==%22')
const tutoring = new Discord.MessageEmbed()
	.setColor('#143F69')
	.setImage('https://emersonms-lausd-ca.schoolloop.com/file/1500178973973/1424590026792/3160407590931805703.jpg')
const lunchGroups = new Discord.MessageEmbed()
	.setColor('#143F69')
	.setTitle('Lunch Time Student Groups')
	.setDescription('Zoom links to Lunch Time Student Groups')
	.addFields(
		{name: 'Ms. Stuback:', value: '[Tuesdays - Virtual Games](https://lausd.zoom.us/j/86829474922)'},
		{name: 'Ms. Denmark:', value: '[Thursdays - Virtual Games](https://lausd.zoom.us/j/88063416174) Passcode: 942583'},
		{name: 'Ms. Nakada / Ms. Montgomery:', value: '[Thursdays - Prep for Black History assembly](https://lausd.zoom.us/j/89616593281)'},
		{name: 'Mrs. Scatolini:', value: '[Fridays - Re-aloud books, poetry](https://lausd.zoom.us/j/86768712414)'},
		{name: 'Mrs. Wilson:', value: '[Wednesdays - Artists Forum](https://lausd.zoom.us/j/85721052868)'},
		{name: 'Ms. Farahmand:', value: '[Wednesdays - 6th graders "Get to Know Me"](https://lausd.zoom.us/j/86218487091)'},
		{name: 'Mr. Tarula:', value: '[Wednesdays - Gender and Sexuality Alliance (GSA) - 2:30](https://lausd.zoom.us/j/9631712734)'},
		{name: 'Ms. Muckenthaler:', value: '[Wednesdays - Free-for-All](https://lausd.zoom.us/j/89472759017)'},
		{name: 'Ms. Muckenthaler:', value: '[Tuesdays 2:30 - 3:30 support group (grief support and just kids struggling right now)](https://lausd.zoom.us/j/88180349377)'},
	);
const parentPortal = new Discord.MessageEmbed()
	.setColor('#143F69')
	.setTitle('LAUSD Parent Portal Student Login')
	.setURL('https://parentportalapp.lausd.net/parentaccess/studentLogin.jsp')
	.setDescription('**Reminder:** Don\'t put @mymail.lausd.net in the email section')
const campEmerson = new Discord.MessageEmbed()
	.setColor('#143F69')
	.setTitle('Camp Emerson Info and registration link')
	.setDescription('[**Click here to register for CAMP EMERSON**](https://docs.google.com/forms/d/e/1FAIpQLSdDh7tz0eMHQEnN3Pd4ylkcErQVeUSq24Qr7bI9UhvOi0geFw/viewform)\n\n\nWe are thrilled to once again offer our CAMP EMERSON when incoming students come to the Emerson campus and meet teachers, hear about middle school and best of all, meet new friends!\n\nDue to the pandemic, Emerson is offering Camp Emerson on two days: **1 day for incoming 6th graders, 1 day for incoming 7th graders.** Even though you\'re officially 7th graders, you spent all year online so we want you to come to Emerson in preparation for 7th grade!\n\n**Tuesday, August 10th - 6th grade**\n\n**Wednesday, August 11th - 7th grade**\n\n\n**Both days will be from 9 a.m. to 2** and will go as follows:\n\n 8 - 9 - registration and purchase Emerson uniform shirts and gear.\n\n9 - 10 - parent orientation with Mr. Watson in the auditorium\n\n9-2 - student workshops around campus\n\n**Lunch is provided thanks to PACE.**')
	.setFooter('Source: Emerson Community Charter website')
const cHelp = new Discord.MessageEmbed()
	.setColor('#143569')
	.setTitle('Calculator Command Help')
	.setDescription('To use the calculator, the numbers and operation must be written in a specific order. You can use either `e!calc` or `e!calculator` as the command.')
	.addFields(
		{name: 'Numbers', value: 'The calculator can only have two numbers at a time. The first number you write will be the first in the equation.'},
		{name: 'Operators', value: 'The operator must come after your two numbers. The four supported operators are `add`, `subtract`, `multiply`, and `divide`. Alternatively, you can use `+`, `-` (a hyphen or dash), `x` (must be lowercase), or `/` (only this kind of slash).'},
		{name: 'Example Command', value: 'Command: `e!calc 10 7 subtract`\nThe bot will respond with `Your answer is 3.`'}
	);
const rHelp = new Discord.MessageEmbed()
	.setColor('#143569')
	.setTitle('Role Command Help')
	.setDescription('To get roles through the role command, you must enter the initial command, `e!role` and then an argument, which would be the role name. There are different categories of roles in this command. You can only have one role per category.')
	.addFields(
		{name: 'Class Roles', value: 'Highly Accelerated\nAccelerated\nGeneral Ed', inline: true},
		{name: 'School Type Roles', value: 'Online\nHybrid', inline: true},
		{name: 'Example Command', value: 'Command: `e!role highly accelerated`\nThe bot will give me the Highly Accelerated role. (Arguments are not case sensitive, so capitalization does not matter.)'},
		{name: 'These roles are not mandatory or required.', value: 'They also do not change what channels you can and cannot see.'}
	)
const inviteBot = new Discord.MessageEmbed()
	.setColor('#143569')
	.setTitle('Bot Invite Link')
	.setDescription('Click [**here**](https://www.youtube.com/watch?v=oHg5SJYRHA0) to add this bot to your own server!')
// This bit is used for e!days-left
let today = new Date();
const firstDay = new Date(today.getFullYear(), 7, 16);
let daysUntilDifference = firstDay.getTime() - today.getTime();
let daysUntil = daysUntilDifference / (1000 * 3600 * 24);
let daysUntilRounded = Math.round(daysUntil);
const lastDay = new Date(today.getFullYear(), 5, 11);
let daysLeftDifference = lastDay.getTime() - today.getTime();
let daysLeft = daysLeftDifference / (1000 * 3600 * 24);
let daysLeftRounded = Math.round(daysLeft);

const blockedWords = fs.readFileSync('blockedWords.txt').toString().split('\n');
client.on('message', message => {
	const general = client.channels.cache.get('804469176214749214');
	function lock(){
		general.parent.updateOverwrite(general.guild.roles.everyone, {SEND_MESSAGES: false});
		channelsLocked = true;
	};
	function unlock(){
		general.parent.updateOverwrite(general.guild.roles.everyone, {SEND_MESSAGES: true});
		channelsLocked = false;
	};
	const messageAuthor = message.author;
	if (message.channel.name === 'art' && message.attachments.size > 0 && message.member.roles.cache.has('833731538020597831') && !message.content.toLowerCase().includes('don\'t pin')){
		message.channel.send(`Great art, ${messageAuthor}!`);
		message.pin();
		return;
	}
	if (blockedWords.some(word => message.content.toLowerCase().includes(word))){
		message.delete()
		console.log(`A message by ${messageAuthor.tag} was deleted: ` + '"' + message.content + '"');
		return;
	}
	if (message.content === 'ping'){
		message.channel.send('pong');
		console.log(`${messageAuthor.tag} pinged`);
		return;
	}
	if (message.content.toLowerCase() === 'egg' && messageAuthor.id !== client.user.id){
		if (Math.floor(Math.random() * 50) == 1){
			message.channel.send('no');
			console.log(`${messageAuthor.tag} got the lucky egg no!`);
			return;
		}else{
			message.channel.send('egg');
			console.log('egg');
			return;
		}
  	}
	if (!message.content.startsWith('e!') || messageAuthor.bot){
		return;
	}
	if (message.content.toLowerCase().startsWith('e!')){
		function logCommand(){
			console.log(`${messageAuthor.tag} ran ${message.content}`);
		}
		const command = message.content.slice(2).toLowerCase();
		if (message.content.startsWith('e!calc') || message.content.startsWith('e!calculator')){
			let splitStrings = message.content.split(' ');
			let firstNumber = parseInt(splitStrings[1]);
			let secondNumber = parseInt(splitStrings[2]);
			let operator = splitStrings[3];
			// TODO: Fix decimals. This handler is funny but also the equivalent of a duct-taped together birdhouse.
			if (message.content.includes('.')){
				message.channel.send('Numbers with decimals are currently not supported because the developer is dumb and doesn\'t know how to make JavaScipt math do that');
			}else // This is some serious spaghetti code right here. 
			switch (operator){
				case 'add':
				case '+':
					if (isNaN(firstNumber + secondNumber)){
						message.channel.send('You have to put in numbers, not letters, silly!');
					}else{
						message.channel.send(`Your answer is **${firstNumber + secondNumber}**.`);
					}
					break;
				case 'subtract':
				case '-':
					if (isNaN(firstNumber - secondNumber)){
						message.channel.send('You have to put in numbers, not letters, silly!');
					}else{
						message.channel.send(`Your answer is **${firstNumber - secondNumber}**.`);
					}
					break;
				case 'multiply':
				case 'x':
					if (isNaN(firstNumber * secondNumber)){
						message.channel.send('You have to put in numbers, not letters, silly!');
					}else{
						message.channel.send(`Your answer is **${firstNumber * secondNumber}**.`);
					}
					break;
				case 'divide':
				case '/':
					if (isNaN(firstNumber / secondNumber)){
						message.channel.send('You have to put in numbers, not letters, silly!');
					}else{
						message.channel.send(`Your answer is **${firstNumber / secondNumber}**.`);
					}
					break;
				default:
					message.channel.send('Something went wrong with your command. Use `e!c-help` for a guide to the calculator.');
					break;
			}
			console.log(`${messageAuthor.tag} ran the calculator with numbers ` + firstNumber + ' and ' + secondNumber + ' with operator ' + operator);
			return;
		};
		if (message.content.startsWith('e!role')){
			const argument = message.content.slice(6).trim().toLowerCase();
			switch (argument){
				case 'highly accelerated':
					if (message.member.roles.cache.has('844002210471608340') || message.member.roles.cache.has('844002375501217842') || message.member.roles.cache.has('844002450976538624')){
						message.channel.send('You already have a role of this category! Ask a staff member if you need to change it.');
					}else{
						message.member.roles.add(message.guild.roles.cache.find(role => role.id == '844002210471608340'));
						message.channel.send('You have been given the Highly Accelerated role!');
					}
					break;
				case 'accelerated':
					if (message.member.roles.cache.has('844002210471608340') || message.member.roles.cache.has('844002375501217842') || message.member.roles.cache.has('844002450976538624')){
						message.channel.send('You already have a role of this category! Ask a staff member if you need to change it.');
					}else{
						message.member.roles.add(message.guild.roles.cache.find(role => role.id == '844002375501217842'));
						message.channel.send('You have been given the Accelerated role!');
					}
					break;
				case 'general ed':
					if (message.member.roles.cache.has('844002210471608340') || message.member.roles.cache.has('844002375501217842') || message.member.roles.cache.has('844002450976538624')){
						message.channel.send('You already have a role of this category! Ask a staff member if you need to change it.');
					}else{
						message.member.roles.add(message.guild.roles.cache.find(role => role.id == '844002450976538624'));
						message.channel.send('You have been given the General Ed role!');
					}
					break;
				case 'online':
					if (message.member.roles.cache.has('836733009230692374') || message.member.roles.cache.has('836732949687828500')){
						message.channel.send('You already have a role of this category! Ask a staff member if you need to change it.');
					}else{
						message.member.roles.add(message.guild.roles.cache.find(role => role.id == '836733009230692374'));
						message.channel.send('You have been given the Online role!');
					}
					break;
				case 'hybrid':
					if (message.member.roles.cache.has('836733009230692374') || message.member.roles.cache.has('836732949687828500')){
						message.channel.send('You already have a role of this category! Ask a staff member if you need to change it.');
					}else{
						message.member.roles.add(message.guild.roles.cache.find(role => role.id == '836732949687828500'));
						message.channel.send('You have been given the Hybrid role!');
					}
					break;
				default:
					message.channel.send('That\'s not a role! Use `e!r-help` for a guide to the role command.')
					break;
			}
			console.log(`${messageAuthor.tag} ran e!role with ${argument}`);
			return;
		}
		switch (command){
			case 'help':
				message.channel.send(help);
				logCommand();
				break;
			case 'credits':
			  message.channel.send(credits);
				logCommand();
				break;
			case 'calendar':
				message.channel.send(calendar);
				logCommand();
				break;
			case 'teachers':
				message.channel.send(teachers);
				logCommand();
				break;
			case 'emerson-site':
				message.channel.send(emersonSite);
				logCommand();
				break;
			case 'office-hours':
				message.channel.send(officeHours);
				logCommand();
				break;
			case 'online-schedule':
				message.channel.send(onlineSchedule);
				logCommand();
				break;
			case 'hybrid-schedule':
				message.channel.send(hybridSchedule);
				logCommand();
				break;
			case 'tutoring':
				message.channel.send(tutoring);
				logCommand();
				break;
			case 'lunch-groups':
				message.channel.send(lunchGroups);
				logCommand();
				break;
			case 'parent-portal':
				message.channel.send(parentPortal);
				logCommand();
				break;
			case 'days-left':
				if (today.getTime() < lastDay.getTime()){
					message.channel.send('There are ' + daysLeftRounded + ' days left of school.');
				}else
				if (today.getTime() > lastDay.getTime() && today.getTime() < firstDay.getTime()){
					message.channel.send('It\'s currently summer break, and there are ' + daysUntilRounded + ' days left until school starts.');
				}
				logCommand();
				break;
			case 'camp-emerson':
				message.channel.send(campEmerson);
				logCommand();
				break;
			case 'c-help':
				message.channel.send(cHelp);
				logCommand();
				break;
			case 'r-help':
				message.channel.send(rHelp);
				logCommand();
				break;
			case 'error':
				message.channel.send('```TypeError: Cannot read property \'parent\' of undefined\n    at unlock (/home/runner/Emerson-Discord-Bot/index.js:24:10)\n    at /home/runner/Emerson-Discord-Bot/index.js:27:1\n    at Script.runInContext (vm.js:130:18)\n    at Object.<anonymous> (/run_dir/interp.js:209:20)\n    at Module._compile (internal/modules/cjs/loader.js:999:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)\n    at Module.load (internal/modules/cjs/loader.js:863:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:708:14)\n    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)\n    at internal/main/run_main_module.js:17:47```')
				logCommand();
				break;
			case 'invite-bot':
				message.channel.send(inviteBot);
				logCommand();
				break;
			case 'fart': // why did i make this
				if (message.member.voice.channel){
					message.member.voice.channel.join()
						.then(connection => {
							connection.play('fart.mp3');
							setTimeout(function(){connection.disconnect()}, 4000);
						});
				}else{
					message.channel.send('You must be in a VC to use this command!')
					console.log(`${messageAuthor.tag} tried to fart but wasn't in a VC :(`)
				}
				break;
			case 'lock':
				if (message.member.roles.cache.has('755893494211543161')){
					if (channelsLocked == false){
						lock();
						console.log(`${messageAuthor.tag} locked channels`);
						message.channel.send('Channels locked.');
					}else{
						message.channel.send('The channels are already locked!');
					}
				}else{
					message.channel.send('You don\'t have permission to do that!');
				}
				break;
			case 'unlock':
				if (message.member.roles.cache.has('755893494211543161')){
					if (channelsLocked == true){
						unlock();
						console.log(`${messageAuthor.tag} unlocked channels`);
						message.channel.send('Channels unlocked.');
					}else{
						message.channel.send('The channels are already unlocked!');
					}
				}else{
					message.channel.send('You don\'t have permission to do that!');
				}
				break;
			default:
				message.channel.send('That\'s not a command! Use `e!help` for a list of commands.');
				break;
  		}
		return;
	}
});