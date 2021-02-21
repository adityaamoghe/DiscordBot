/*
 * Author: Aditya Moghe
*/
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const user_schedules = new Map();
client.once('ready', () => {
    console.log('ZoomBot is ready!');
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot){
        return;
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    const user_id = command.author;
    
    // if(command === 'tester'){
    //     message.channel.send('Hello Aditya!');
    // }

    // else if(command === 'useless'){
    //     message.channel.send('https://theuselessweb.com/');

    // }

    // else if(command === 'schedule'){
    //     message.channel.send('1.    Class One');
    //     message.channel.send('2.    Class Two');
    //     message.channel.send('3.    Class Three');

    // }
    if (command == "add"){
        if(args.length!=2){
            return message.channel.send("Add command usage is: !add <Class Name> <Zoom Link");
        }
        else{
            if(user_schedules[user_id] == null){
                class_list = []
                user_schedules[user_id] = class_list;
            }
            var class_x = {Name: args[0], Link: args[1]}
            user_schedules[user_id].push(class_x);
            message.channel.send(`Class Added: ${args[0]}`);
        }
    }
    else if (command == "classes"){
        if (user_schedules[user_id].length<=0){
            return message.channel.send("Your schedule is empty!");
        }
        for (var i = 0; i<user_schedules[user_id].length;i++){
            message.channel.send(user_schedules[user_id][i].Name + " " + user_schedules[user_id][i].Link);
        }
    }
    else if(command == "remove"){
        if(args.length!=1){
            return message.channel.send("Remove command usage is: !remove <Class Name>");
        }
        else if(user_schedules[user_id].length<=0){
            return message.channel.send("There is nothing to remove!");
        }
        for(var i = 0;i<class_list.length;i++){
            if(class_list[i].Name == args[0]){
                class_list.splice(i,1);
                message.channel.send(args[0] + " was removed");
            }
        }
    }
    //process.exit();
});

client.login('ODEyNzczMjk1OTg3NjIxOTI4.YDFoHg.sXcMgv071mGRVKFYdQ7OCLEcIv8');