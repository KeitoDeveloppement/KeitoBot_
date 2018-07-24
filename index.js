const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("!");
var randnum = 0;

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'Modérer et Administrer', type: 0 } });
    console.log("Je suis prêt à rendre service à Keito_ !");
});

bot.login(process.env.TOKEN);

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'bienvenue');
    let role = member.guild.roles.find("name", "Follow");
    channel.send(`**${member.user.username}** a rejoint le serveur ! Bienvenue à toi :smile: !`)
    member.addRole(role);
    member.sendMessage(`Bienvenue sur le serveur Discord Officiel de Keito_ ${member.user.username} !\n\nJe t'invite à lire les règles du serveur dans le salon **"📝règles📝"**.\nSi tu veux savoir les commandes que je peux faire, tapes !help dans le salon "🤖commandes-bot🤖".\nSi tu as besoin d'aide à propos du bot et que je ne peut pas répondre à ta question, je t'invite a contacter mon créateur, @Birsol#1319 !`)
    console.log("Une personne a rejoint le serveur !")
  });

bot.on('message', message => {

    if (message.content.toUpperCase().includes('PUTE')) {
        message.delete()
        message.author.send("S'il te plaît, ne dis pas d'insultes !")
    }

    if (message.content.toUpperCase().includes('PUTIN')) {
        message.delete()
        message.author.send("S'il te plaît, ne dis pas d'insultes !")
    }

    if (message.content.toUpperCase().includes('FDP')) {
        message.delete()
        message.author.send("S'il te plaît, ne dis pas d'insultes !")
    }

    if (message.content.toUpperCase().includes('CUL')) {
        message.delete()
        message.author.send("S'il te plaît, ne dis pas d'insultes !")
    }

    if (message.content.toUpperCase().includes('NIQUE')) {
        message.delete()
        message.author.send("S'il te plaît, ne dis pas d'insultes !")
    }

    if (message.content.toUpperCase().includes('NTM')) {
        message.delete()
        message.author.send("S'il te plaît, ne dis pas d'insultes !")
    }

    if (message.content.toUpperCase().includes('CHIER')) {
        message.delete()
        message.author.send("S'il te plaît, ne dis pas d'insultes !")
    }

    if (message.content.toUpperCase().includes('TG')) {
        message.delete()
        message.author.send("S'il te plaît, ne dis pas d'insultes !")
    }

    if (message.content.toUpperCase().includes('SUCK')) {
        message.delete()
        message.author.send("S'il te plaît, ne dis pas d'insultes !")
    }

    if (message.content.toUpperCase().includes('DICK')) {
        message.delete()
        message.author.send("S'il te plaît, ne dis pas d'insultes !")
    }

    if (message.content.toUpperCase().includes('HTTPS://')) {
        if(message.channel.id === '471045474845982721') {
            return;
        }
        if(message.channel.id === '471045583520530433') {
            return;
        }
        if (message.member.roles.find("name", "Modérateur")) {
            return;
        }
        message.delete()
        message.author.send("S'il te plaît, ne fais pas de publicité dans un autre salon que ceux reservés a cet effet !")
    }

    if(message.content === prefix + "twitch") {
        message.reply('La chaîne Twitch de Keito_ est : https://www.twitch.tv/Keito_')
    }
    if(message.content === prefix + "youtube") {
        message.reply('La chaîne YouTube de Keito_ est : https://www.youtube.com/channel/UCu283gUmsWZ7TSbKYX2CpFw')
    }

    if (message.content === prefix + "help"){
        message.reply("La liste des commandes t'as été envoyée en messages privés !")
        var help_embed = new Discord.RichEmbed()
            .setColor('#E5E501')
            .addField("Mes commandes :", "   - !help : Affiche mes commandes disponibles\n- !twitch : Affiche la chaîne Twitch de Keito\n- !youtube : Affiche la chaîne YouTube de Keito_\n")
            .addField("Interactions :", "- Quelle est ma photo de profil ? : Posez moi cette question et je vous donnerai votre photo de profil.")
        message.author.sendEmbed(help_embed);
        console.log("Commande Help demandée");
    }

    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);

    if (msg.startsWith(prefix + 'CLEAR')) {
        async function purge() {
            message.delete();

            if (!message.member.roles.find("name", "Modérateur")) {
                message.channel.send('Tu dois avoir le rôle \`Modérateur\` pour utiliser cette commande !');
                return;
            }

            if (isNaN(args[0])) {
                message.channel.send("Merci d'entrer le nombre de messages à supprimer. \n Usage: " + prefix + "clear <nb_de_messages>");
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]});
            console.log(fetched.size + ' messages trouves, suppression...');

            message.channel.bulkDelete(fetched).then(() => {
                message.channel.send(fetched.size + " messages ont étés supprimés.").then(msg => msg.delete(5000));
            });

        }

        purge();

    }
    if(message.content === prefix + 'commandeautorègles') {
        if (!message.member.roles.find("name", "Modérateur")) {
            message.channel.send('Tu dois avoir le rôle \`Modérateur\` pour utiliser cette commande !');
            return;
        }
        const channel = message.guild.channels.find('name', '📝règles📝');
        message.delete();
        channel.send('Voici quelques règles à **respecter** pour une bonne entente entre les différents joueurs du serveur.\n\n1- Ne pas insulter\n2- Respecter les autres\n3- Ne pas spam\n4- Ne pas envoyer de liens suspects\n5- Ne pas envoyer de photos suspectes\n6- Ne pas avoir de pseudo pouvant choquer\n7- Ne pas mentionner @everyone ou tout autre modérateur sans en avoir une bonne raison\n8- Ne pas utiliser un modificateur de voix dans les salons vocaux\n\nCes règles sont considérées comme **lues** et **approuvées** par les joueurs.')
    }

    if (message.content === 'Quelle est ma photo de profil ?') {
        message.reply(`ta photo de profil est : ${message.author.avatarURL}`);
    }

    if (message.content === "Par qui as-tu été créé ?"){
        message.reply("J'ai été créée par Birsol !")
    }

    if (message.content === "Que la lumière soit !"){
        message.reply("Et la lumière fut !")
    }

    if (message.content === "Quel est le sens de la vie ?"){
        message.reply("42, bien évidemment !")
    }

    if (message.content === "Je m'ennuie..."){
        message.reply("Joue à Rocket League !")
    }

});

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(1);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}
