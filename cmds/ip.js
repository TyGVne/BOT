exports.run = async (message, args)=> {
  const exampleEmbed = new Discord.MessageEmbed()
      .setAuthor('𝒲𝑒𝓁𝒸𝑜𝓂𝑒 Family City')
    
      .setTitle('*** Bạn bật F8 và Connect bên dưới nhé ***')
      .addFields(
                  { name: 'Bước 1',             value: '***```Bấm F8 , 1 trong 2 cái```***' },
                  { name: 'Bước 2',             value: '***```Paste link : Connect ndt90family.tk ```***' },
                  { name: 'HOẶC',             value: '***```Paste link : Connect 56e89fb2.lectron.net:1000 ```***' },
                  { name: 'Bước 3',             value: '***```Sau đó ENTER để vào thành phố```***' },
                  { name: 'Family Said',             value: '***" Chúc các bạn online vui vẻ "***' },
         
                )
      .setThumbnail('https://pkmacbook.com/wp-content/uploads/2021/06/hinh-anh-welcome-3d_094125580.jpg')
     .setColor('#ff0000')
      .setTimestamp()
      .setImage('https://cdn.discordapp.com/attachments/697049699193978941/746691133660332092/divider_1.gif')
      .setFooter('© Copyright by Thanoss  ☞ Do not Reup.', 'https://upload.wikimedia.org/wikipedia/vi/c/cd/Thanos_Infinity_4.png')
 message.channel.send(exampleEmbed);
  return; 
} 