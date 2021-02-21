/*
 * Author: Aditya Moghe
*/
const Discord = require('discord.js');
const fs = require('fs');
const data = require("./data.json");
const client = new Discord.Client();
const prefix = '!';
var user_schedules = new Map();
client.once('ready', () => {
    console.log('ZoomBot is ready!');
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot){
        return;
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    const user_id = message.author.id;

    if (data.user_schedules[user_id] == null){
        class_list = []
        user_schedules[user_id] = class_list;
        data.user_schedules[user_id] = class_list;
    } else {
        data.user_schedules.forEach(classObject => {
          user_schedules.push(classObject);
        });
    }
    console.log(user_schedules);

    if (command == "add"){
        if(args.length!=2){
            return message.channel.send("Add command usage is: !add <Class Name> <Zoom Link>");
        }
        else{
            var class_x = {Name: args[0], Link: args[1]}
            user_schedules[user_id].push(class_x);
            message.channel.send(`Class Added: ${args[0]}`);
        }
    }
    else if (command == "classes"){
        if (user_schedules[user_id].length<=0){
            return message.channel.send("Your schedule is empty!");
        }
        var allClasses = "";
        for (var i = 0; i < data.user_schedules[user_id].length;i++){
            allClasses += data.user_schedules[user_id][i].Name + " " + data.user_schedules[user_id][i].Link + "\n";
        }
        message.channel.send(allClasses);
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

    try {
      data.user_schedules = user_schedules;
      fs.writeFileSync('data.json', JSON.stringify(data));
    } catch (err) {
      console.error(err);
    }

});

client.login('ODEyNzczMjk1OTg3NjIxOTI4.YDFoHg.sXcMgv071mGRVKFYdQ7OCLEcIv8');
