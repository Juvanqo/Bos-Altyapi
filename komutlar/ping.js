const Discord = require('discord.js');

exports.run = async(client, message, args) => {
 
  const embed = new Discord.MessageEmbed()

  .setTitle(`<a:moryildiz:827205449940992000> My Ping <a:moryildiz:827205449940992000>`) 
  .setColor('#7d20db')
  .setFooter('Orés CodShare')
  .setDescription(`<a:moryildiz:827205449940992000> **Ping'im: ${client.ws.ping} Ms**`);

  message.channel.send(embed);

}
exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : ['ping'],
    permLevel : 0
}
 
exports.help = {
    name : 'ping',
    description : "Botun Ping'ini Gösterir" ,
    usage : 'ping'
}
