exports.run = async (message, args)=> {
  let roomCommand = config.blacklistnganhdata["med"].commandroomid

  if (roomCommand != message.channel.id ) return message.reply('`Lệnh Này Chỉ Có Thể Sử Dụng ở ` <#' + roomCommand +'>' )
 
  // if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('`Bạn Không Có Quyền Sử Dụng Lệnh Này`');
  // if(((message.member._roles) && (message.member._roles.includes('744420299151245424')) ) || (message.author.id == '435839749358616587') ){} else return message.reply('`Bạn Không Có Quyền Sử Dụng Lệnh Này`')

  if ((!args[1]) || (!args[2])) return  message.reply(":warning: :warning: **SAI CÚ PHÁP**:warning: :warning: \n *Gỡ BlackList*:     `!MEDUNBAN [Link steam] [Lý Do]`");
  if ((args[1].indexOf('https://steamcommunity.com/profiles/') != 0) || (args[1].length <= 36) )  
    if (args[1].indexOf('steamcommunity.com') == -1 ) return message.reply('`Link Steam Không Hợp Lệ`')
  else 
    return message.reply('`Link Steam Sai Định Dạng ` (<https://steamcommunity.com/profiles/xxxxxxxxxxxxxx>)')

  let steamid = args[1].replace('https://steamcommunity.com/profiles/', '').replace('/','').trim()
  let linksteam =  'https://steamcommunity.com/profiles/' +steamid 
  let lydo = message.content.replace(config.prefix , '').replace(args[0] , '').replace(args[1], '').trim()
  
  let banroomid = config.blacklistnganhdata["med"].banroomid
  let banchannel = client.channels.cache.get(banroomid);

  let banroom2id = config.blacklistnganhdata["med"].banroom2id
  let banchannel2 = client.channels.cache.get(banroom2id);

  let banlogid = config.blacklistnganhdata["med"].banlogid
  let banlogchannel = client.channels.cache.get(banlogid);
  
  let resuft = message.guild.members.cache.find( f => f.user.id === message.author.id)
  let name = resuft.nickname || message.author.username

  let check = await MongoClient.db("bannganh").collection("medban").find({"steamid" : `${steamid}` }).toArray()
  if ( check.length == 0 ) return message.reply('`Người này chưa bị blacklist`')


  let embed = new Discord.MessageEmbed()
   
  .setColor([0, 0, 255])
  .addFields(
    {  name: 'Gỡ Blacklist Bác Sĩ: ', value: 'Người Gỡ Blacklist: '+ name + '\r\nNgười Được Gỡ Blacklist: **' + check[0].username + "** \r\nLý Do: *" + lydo + "*\r\nLink Steam: " + linksteam   }
  )

   banchannel.send(embed);

  let  embed2 = new Discord.MessageEmbed()
  .setColor([0, 0, 255])
  .addFields(
    {  name: 'Tiến Hành Gỡ Blacklist: ', value:'Người Được Gỡ Blacklist: **' + check[0].username+ "**\r\nLý Do: *" + lydo + "*\r\nLink Steam: " + linksteam}
  )
  banchannel2.send(embed2);



  await MongoClient.db("bannganh").collection("medban").deleteMany({"steamid" : `${steamid}` })

  let d = new Date();
  let minutenow= d.getMinutes();
  let hournow = d.getHours();
  let datenow = d.getDate();
  let monthnow = d.getMonth()+1;
  let yearnow = d.getFullYear();
  let timenow =(hournow + ':' + minutenow + ' Ngày ' + datenow + '/' + monthnow + '/' + yearnow);

  banlogchannel.send ("**" + name + "** đã UnBan **" + check[0].username + "** (`ID steam: "+ check[0].steamid + "`- Lý Do: *" + lydo + "*. - `" + timenow + '` ');
  message.reply(":white_check_mark: **UNBAN THÀNH CÔNG**:white_check_mark: ");
}

