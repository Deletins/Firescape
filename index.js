const Discord = require('discord.js');
const {prefix, token } = require('./config.json');
const client = new Discord.Client();
const rng = Math.floor(Math.random() * 10)
const x = 0
const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

client.on('message', async message => {
    if(message.author.bot || message.channel.type === "dm") return;
    const messageArray = message.content.split(" ");
    const args = message.content.substring(message.content.indexOf(` `)+1);
    if(message.content === `~reactions`){
        message.delete()
        let embed = new Discord.MessageEmbed()
        .setTitle('Roles')
        .setDescription('1️⃣ - Remote\n2️⃣ - In-Person Group 1\n3️⃣ - In-Person Group 2\n😴 - Band role\n🅰️ - Attendance notifications\n🅱️ - Class notifications\n🎮 - Epic Gamer')
        .setColor('RED')
        let MessageEmbed = await message.channel.send(embed)
        MessageEmbed.react('1️⃣')
        MessageEmbed.react('2️⃣')
        MessageEmbed.react('3️⃣')
        MessageEmbed.react('😴')
        MessageEmbed.react('🅰️')
        MessageEmbed.react('🅱️')
        MessageEmbed.react('🎮')
    }
})

client.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    
    if (user.bot) return;
    if (!reaction.message.guild) return;
    
    if (reaction.emoji.name === '1️⃣') {
        await reaction.message.guild.members.cache.get(user.id).roles.add("766326716460171265")
        console.log("RemoteAdded")
        client.users.cache.get(user.id).send('You have been added to the Remote role.');
    } else if (reaction.emoji.name === '2️⃣') {
        await reaction.message.guild.members.cache.get(user.id).roles.add("766326717814931507")
        console.log("IPGroup1Added")
        client.users.cache.get(user.id).send('You have been added to the IPGroup1 role.');
    } else if (reaction.emoji.name === '3️⃣') {
        await reaction.message.guild.members.cache.get(user.id).roles.add("766326799302787182")
        console.log("IPGroup2Added")
        client.users.cache.get(user.id).send('You have been added to the IPGroup2 role.');
    } else if (reaction.emoji.name === '🅰️') {
        await reaction.message.guild.members.cache.get(user.id).roles.add("766710005134524426")
        console.log("AttendanceAdded")
        client.users.cache.get(user.id).send('You have been added to the Attendance Notifications role.');
    } else if (reaction.emoji.name === '🅱️') {
        await reaction.message.guild.members.cache.get(user.id).roles.add("766709850775617586")
        console.log("ClassAdded")
        client.users.cache.get(user.id).send('You have been added to the Class Notifications role.');
    } else if (reaction.emoji.name === '🎮') {
        await reaction.message.guild.members.cache.get(user.id).roles.add("759050265688014858")
        console.log("GamerAdded")
        client.users.cache.get(user.id).send('You have been added to the Epic Gamer role.')
    } else if (reaction.emoji.name === '😴') {
        await reaction.message.guild.members.cache.get(user.id).roles.add("773721883744534561")
        console.log("Band added")
        client.users.cache.get(user.id).send('You have been added to the Band role.')
    } else if (reaction.emoji.name === '📌') {
        reaction.message.pin()
        client.users.cache.get(user.id).send(`You pinned a message!`)
    }
})

client.on("messageReactionRemove", async (reaction,user) => {
    console.log("ReactionRemoved")
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.emoji.name === '1️⃣') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove("766326716460171265")
            console.log("RemoteRemove")
            client.users.cache.get(user.id).send('You have been removed from the Remote role.');
    } else if (reaction.emoji.name === '2️⃣') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove("766326717814931507")
            console.log("IPGroup1Remove")
            client.users.cache.get(user.id).send('You have been removed from the IPGroup1 role.');
    } else if (reaction.emoji.name === '3️⃣') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove("766326799302787182")
            console.log("IPGroup2Remove")
            client.users.cache.get(user.id).send('You have been removed from the IPGroup2 role.');
    } else if (reaction.emoji.name === '🅰️') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove("766710005134524426")
            console.log("AttendanceRemove")
            client.users.cache.get(user.id).send('You have been removed from the Attendance Notifications role.');
    } else if (reaction.emoji.name === '🅱️') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove("766709850775617586")
            console.log("ClassRemove")
            client.users.cache.get(user.id).send('You have been removed from the Class Notifications role.');
    } else if (reaction.emoji.name === '🎮') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove("759050265688014858")
            console.log("GamerRemove")
            client.users.cache.get(user.id).send('You have been removed from the Epic Gamer role.')
    } else if (reaction.emoji.name === '😴') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove("773721883744534561")
            console.log("BandRemove")
            client.users.cache.get(user.id).send('You have been removed from the Band role.')
    }
})

client.once('ready', () => {
    console.log('ready!!!!')
    client.user.setActivity(`Use "~help" for help!`);
})

client.on('message', async message => {
    if(message.author.bot || message.channel.type === "dm") return;
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
     if (command === 'period') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        else if (args[0] === '1') {
            message.delete()
            return client.channels.cache.get('764170719084544010').send(`
Hey, <@&766709850775617586>!
Period 1 is starting!
            `)
        }
        else if (args[0] === '2') {
            message.delete()
            return client.channels.cache.get('764170719084544010').send(`
Hey, <@&766709850775617586>!
Period 2 is starting!
            `)
        }
        else if (args[0] === '3') {
            message.delete()
            return client.channels.cache.get('764170719084544010').send(`
Hey, <@&766709850775617586>!
Period 3 is starting!
            `)
        }
        else if (args[0] === '4') {
            message.delete()
            return client.channels.cache.get('764170719084544010').send(`
Hey, <@&766709850775617586>!
Period 4 is starting!
            `)
        }
        else if (args[0] === '5') {
            message.delete()
            return client.channels.cache.get('764170719084544010').send(`
Hey, <@&766709850775617586>!
Period 5 is starting!
            `)
        }
        else if (args[0] === '6') {
            message.delete()
            return client.channels.cache.get('764170719084544010').send(`
Hey, <@&766709850775617586>!
Period 6 is starting!
            `)
        }
        else if (args[0] === '7') {
            message.delete()
            return client.channels.cache.get('764170719084544010').send(`
Hey, <@&766709850775617586>!
Period 7 is starting!
            `)
        }
        else if (args[0] === '7') {
            message.delete()
            return client.channels.cache.get('764170719084544010').send(`
Hey, <@&766709850775617586>!
Period 8 is starting!
            `)
        }
        else if (args[0] === '7') {
            message.delete()
            return client.channels.cache.get('764170719084544010').send(`
Hey, <@&766709850775617586>!
            `)
        }
        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    }
})

client.on('message', message => {
    //console.log(message.content);

    if(message.content === '~help') {
        message.channel.send(`
        These are my commands!
            
**~server** - I display information about the server
**~info** - I display information about your account
**~jar** - what the fuck
**~rng** - I say a number from 1 to 10
**~class** - Use the arguments: math, ela, history, russian, gym, chemistry, and stem to send a message to the Class Notifications role
    `)
    } else if(message.content === '~server') {
        message.channel.send(`Server name: ${message.guild.name}\nMember count: ${message.guild.memberCount}\nServer created on: ${message.guild.createdAt}\nServer created by: ${message.guild.owner.displayName}\nServer's logo: ${message.guild.iconURL({ format: "png", dynamic: true })}`)
    } else if(message.content === '~info') {
        message.channel.send(`You joined Discord at: ${message.author.createdAt}\nYour name is: ${message.author.username}\nYour avatar is: ${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
    } else if(message.content === '~jar') {
        message.channel.send("https://cdn.discordapp.com/attachments/443591340538724355/764667653927075878/jar_1.png\nhttps://cdn.discordapp.com/attachments/720776715168776247/764915226503544832/test2.mp4\nhttps://cdn.discordapp.com/attachments/443591340538724355/764667654698434580/jar_2.png")
    } else if(message.content === '~rng') {
        message.channel.send(`${Math.floor(Math.random() * 10)}`)
    } 
})

client.on('message', message => {
    if(message.content === '~day a') {
        message.delete()
        setTimeout(function(){
            message.channel.send(`
Hey, <@&766709850775617586>!
Period 1 is starting!
            `)
            console.log("1")
            setTimeout(function(){
                message.channel.send(`
Hey, <@&766709850775617586>!
Period 2 is starting!
                `)
                console.log("2")
                setTimeout(function(){
                    message.channel.send(`
Hey, <@&766709850775617586>!
Period 3 is starting!
                    `)
                    console.log("3")
                }, 7200000)
            }, 7200000)
        }, 0)
    } else if(message.content === '~day b') {
        message.delete()
        setTimeout(function(){
            message.channel.send(`
Hey, <@&766709850775617586>!
Period 4 is starting!
            `)
            console.log("4")
            setTimeout(function(){
                message.channel.send(`
Hey, <@&766709850775617586>!
Period 5 is starting!
                `)
                console.log("5")
                setTimeout(function(){
                    message.channel.send(`
Hey, <@&766709850775617586>!
Period 6 is starting!
                    `)
                    console.log("6")
                }, 7200000)
            }, 7200000)
        }, 0)
    } else if(message.content === '~day c') {
        message.delete()
        setTimeout(function(){
            message.channel.send(`
Hey, <@&766709850775617586>!
Period 7 is starting!
            `)
            console.log("7")
            setTimeout(function(){
                message.channel.send(`
Hey, <@&766709850775617586>!
Period 8 is starting!
                `)
                console.log("8")
                setTimeout(function(){
                    message.channel.send(`
Hey, <@&766709850775617586>!
Period 9 is starting!
                    `)
                    console.log("9")
                }, 7200000)
            }, 7200000)
        }, 0)
    } 
})

client.login(token)