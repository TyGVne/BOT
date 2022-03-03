exports.run = async (message, args)=> {
 
var fetch = require("node-fetch");

try 
{
  data = await fetch(`http://${config.ip}/players.json`)
  data = await data.json()
  if (data === null || data === []) var online = 0
  else var online = data.length;

  data = await fetch(`http://${config.ip}/info.json`)
  data = await data.json()

  var embed = new Discord.MessageEmbed()
  .setTitle(config.servername)
  .setThumbnail(config.linkavt)
  .setColor('RANDOM')
  .addFields(
    // { name: "IP:" , value: "```fix\ns1.aethrp.com```", inline: false },
    { name: '**Uptime**'     , value:  data.vars.Uptime, inline: true },
    { name: 'Trong Game', value:  '```yaml\r\n Số Người Chơi : '+ online + "/" +data.vars.sv_maxClients | + ' ' +  data.vars["Công Việc"] + '```' , inline: false },

  )
  .setTimestamp();
  message.reply(embed);

}
catch  { message.reply('`Server đang Offline`') }


}
    
    