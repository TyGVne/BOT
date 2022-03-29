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
      .setAuthor('𝒲𝑒𝓁𝒸𝑜𝓂𝑒 Family')
      .setDescription(' Cần SP gì ạ')
      .setTitle(config.servername)
      .setThumbnail(config.linkavt)
      .setColor('RANDOM')
      .addFields()
      .setFooter('© Copyright by Thanoss  ☞ Do not Reup.', 'https://upload.wikimedia.org/wikipedia/vi/c/cd/Thanos_Infinity_4.png')
      .setTimestamp();
      message.reply(embed);
    
    }
    catch  { message.reply('`Server đang Offline`') }
}
        
        
