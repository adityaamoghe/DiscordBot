/*
 * Author: Aditya Moghe
*/
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
var class_list = [];
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
    else if (command == "add"){
        if(!args.length){
            return message.channel.send("Please provide the class name and zoom link you would like to add");
        }
        else{
            var class_x = {Name: args[0], Link: args[1]}
            class_list.push(class_x);
            message.channel.send(`Class Added: ${args[0]}`);
        }
    }
    else if (command == "classes"){
        for (x in class_list){
            message.channel.send(class_list[x]);
        }
    }
    //process.exit();
});

client.login('ODEyNzczMjk1OTg3NjIxOTI4.YDFoHg.sXcMgv071mGRVKFYdQ7OCLEcIv8');