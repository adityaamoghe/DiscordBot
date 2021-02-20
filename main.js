/*
 * Author: Aditya Moghe
*/
const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!';

client.once('ready', () => {
    console.log('ZoomBot is ready!');
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot){
        return;
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'tester'){
        message.channel.send('Hello Aditya!');
    }

    else if(command === 'useless'){
        message.channel.send('https://theuselessweb.com/');
        
    }

    else if(command === 'schedule'){
        message.channel.send('1.    Class One');
        message.channel.send('2.    Class Two');
        message.channel.send('3.    Class Three');
        
    }


});

client.login('ODEyNzczMjk1OTg3NjIxOTI4.YDFoHg.sXcMgv071mGRVKFYdQ7OCLEcIv8');