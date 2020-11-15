const rooms=[
{
  id:1,
  num:1,
  num2:1,
  description:'highly ventilated',
  name:'mariana',
  capacity:4,
  price:2500,
  floor:7,
  url:'https://tse3.mm.bing.net/th?id=OIP.Qe9-c0BCcjou-oALrLbUGwHaE7&pid=Api&P=0&w=234&h=156',
  info:'All our guestrooms are elegantly furnished with handmade furniture include luxury en-suite facilities with complimentary amenities pack, flat screen LCD TV, tea/coffee making facilities, fan, hairdryer and the finest pure white linen and towels.'

}
,
{
    id:2,
    num:2,
    num2:1,
    description:'quality infrastructure',
    name:'gloria',
    capacity:1,
    price:1800,
    floor:4,
    url:'data:image/jpeg;base64,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',
    info:'Our king size four poster provides views over landscaped gardens. It has a seating area, ample storage, digital safe, minibar and luxurious duck down bedding.'
  },
{
      id:3,
      num:3,
      num2:1,
    description:'posh',
    name:'seral',
    capacity:2,
    price:1500,
    floor:3,
    url:'https://tse1.mm.bing.net/th?id=OIP.6UnSL_scRvQbAZP-2frLRwHaE7&pid=Api&P=0&w=228&h=152',
    info:'Our king size sleigh bedded also provides views over landscaped gardens. It has ample storage, a seating area, digital safe, minibar and luxurious duck down bedding.'
  },
  {
    id:4,
    num:4,
    num2:1,
    description:'cool surrounding',
    name:'puriata',
    capacity:5,
    price:2000,
    floor:3,
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyxcY2ovTMabr-8PKbwCAtyQDnRTTtVgoEww&usqp=CAU',
    info:'Our Deluxe king size room has a seating area, ample storage, digital safe, minibar and luxurious duck down bedding. This room can also be configured with an extra roll-away bed for families of 3'
  },
  {
      id:5,
      num:5,
      num2:1,
    description:'highly fascinating colours',
    name:'flatinane',
    capacity:5,
    price:1900,
    floor:5,
    url:'https://tse1.mm.bing.net/th?id=OIP.qfeVlmARZ3FqVD4ekxMcFwHaEK&pid=Api&P=0&w=316&h=179',
    info:'Our Deluxe Twin/Large Double also provides views over landscaped gardens. It has a seating area, digital safe, minibar and luxurious duck down bedding. This room can be configured with either 2 single beds or zip and linked to provide a large double bed.'
  },
 {
    id:6,
    num:6,
    description:'good for kids',
    name:'solvane',
    capacity:4,
    price:2300,
    floor:2,
    url:'https://tse1.mm.bing.net/th?id=OIP.f2SUalCbGrjP0Qm-pfHEzQHaE8&pid=Api&P=0&w=266&h=178',
    info:'As our smallest budget rooms, the Compact bedrooms are suited for single occupancy or short-stay double occupancy as they have limited space and storage.'
  },
  {
    id:7,
    num:7,
    num2:1,
    description:'good for one night stay',
    name:'mavericia',
    capacity:3,
    price:4500,
    floor:6,
    url:'https://tse1.mm.bing.net/th?id=OIP.xQKWzj-5l0YI6L-JArk9xwHaFI&pid=Api&P=0&w=234&h=163',
    info:'This is the perfect suite to accommodate a family! It offers two separate bedrooms, with a double bed and bunk bed respectively and a bathroom with a walk-in shower'
  },
  {
    id:8,
    num:8,
    num2:1,
    description:'highly entertaining with game zone just by side ',
    name:'glovirana',
    capacity:2,
    price:3000,
    floor:1,
    url:'data:image/jpeg;base64,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',

    info:'Designed to inspire rest and relaxation, our sleek, modern guest rooms create a feeling of home with peaceful color tones and mountain chic décor. Each room features a king-sized bed or two queen-sized beds, air conditioning and full-size bathroom with granite counter tops and marble floors. Deluxe rooms come fully equipped with state-of-the-art amenities including a Samsung smart TV, iHome docking station, USB ports, Keurig Coffee Brewer, mini-fridge, humidifier, in-room safe, plush robes and slippers, and Wi-Fi. All rooms are non-smoking and views vary from beautiful mountain scenery to the iconic Vail Village and our own Pool One.'
  },
 {
    id:9,
    num:9,
    num2:1,
    description:'for foodies, with cafe just by side',
    name:'perciant',
    capacity:2,
    price:2400,
    floor:5,
    url:'https://tse3.mm.bing.net/th?id=OIP.lg_WcWT1lYcKOvzE6bY_tQHaE8&pid=Api&P=0&w=270&h=181',
    info:'Luxury One Bedroom Suites feature a bedroom with king-sized bed, an oversized bathroom with double vanity and marble floors; and a separate sitting area with gas fireplace, and a wet bar. Each suite also offers spectacular views of Vail Mountain.'
  },
  {
    id:10,
    num:10,
    num2:1,
    description:'budget friendly',
    name:'coral',
    capacity:3,
    price:2200,
    floor:2,
    url:'https://tse1.mm.bing.net/th?id=OIP.0xZqr5rv59ytlNRDGaMwRQHaEP&pid=Api&P=0&w=314&h=181',
    info:'Smart hospitality with amazing mountain views, fine fabrics, art and wooden furnishings, these rooms offer Pirin Mountain view. Relax in the cozy double or twin bed or enjoy a glass of wine on your private balcony and unwind'
  },
  {
    id:11,
    num:11,
    num2:1,
    description:'good for moderate expenses',
    name:'flambiant',
    capacity:5,
    price:2000,
    floor:3,
    url:'https://tse3.mm.bing.net/th?id=OIP.Azwohoz7xjvhehhAzP0rVAHaFI&pid=Api&P=0&w=259&h=180',

    info:'This is the perfect suite to accommodate a family! It offers two separate bedrooms, with a double bed and bunk bed respectively and a bathroom with a walk-in shower.'
  },
  {
    id:12,
    num:12,
    num2:1,
    description:'most expensive one with almost all facilities!!!',
    name:'glamouren',
    capacity:3,
    price:5500,
    floor:4,
    url:'https://tse3.mm.bing.net/th?id=OIP.FmeKXG9_QIqBgDA5Z_YvpAHaFH&pid=Api&P=0&w=237&h=165',

    info:'Experience the beauty of an Executive Room at PREMIER. Spacious rooms decorated in contemporary style with wooden furnishing offering views of the town of Bansko and hotel surrounding area. '

  },{
    id:13,
    num:13,
    num2:1,
    description:'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray',
    name:'mariguana',
    capacity:4,
    price:2500,
    floor:7,
    url:'https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-1.jpeg?raw=true',
    info:'All our guestrooms are elegantly furnished with handmade furniture include luxury en-suite facilities with complimentary amenities pack, flat screen LCD TV, tea/coffee making facilities, fan, hairdryer and the finest pure white linen and towels.'
  
  }
  ,
  {
      id:14,
      num:14,
      num2:1,
      description:'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray',
      name:'gloricia',
      capacity:1,
      price:1800,
      floor:4,
      url:'https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-12.jpeg?raw=true',
      info:'Our king size four poster provides views over landscaped gardens. It has a seating area, ample storage, digital safe, minibar and luxurious duck down bedding.'
    },
  {
        id:15,
        num:15,
        num2:1,
      description:'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray',
      name:'sentinum',
      capacity:2,
      price:1500,
      floor:3,
      url:'https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-2.jpeg?raw=true',
      info:'Our king size sleigh bedded also provides views over landscaped gardens. It has ample storage, a seating area, digital safe, minibar and luxurious duck down bedding.'
    },
    {
      id:16,
      num:16,
      num2:1,
      description:'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray',
      name:'vedurus',
      capacity:5,
      price:2000,
      floor:3,
      url:'https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-3.jpeg?raw=true',
      info:'Our Deluxe king size room has a seating area, ample storage, digital safe, minibar and luxurious duck down bedding. This room can also be configured with an extra roll-away bed for families of 3'
    },
    {
        id:17,
        num:17,
        num2:1,
      description:'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray',
      name:'floraine',
      capacity:5,
      price:1900,
      floor:5,
      url:'https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-4.jpeg?raw=true',
      info:'Our Deluxe Twin/Large Double also provides views over landscaped gardens. It has a seating area, digital safe, minibar and luxurious duck down bedding. This room can be configured with either 2 single beds or zip and linked to provide a large double bed.'
    },
   {
      id:18,
      num:18,
      description:'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray',
      name:'silana',
      capacity:4,
      price:2300,
      floor:2,
      url:'https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-5.jpeg?raw=true',
      info:'As our smallest budget rooms, the Compact bedrooms are suited for single occupancy or short-stay double occupancy as they have limited space and storage.'
    },
    {
      id:19,
      num:19,
      num2:1,
      description:'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray',
      name:'maveric',
      capacity:3,
      price:4500,
      floor:4,
      url:'https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-6.jpeg?raw=true',
      info:'This is the perfect suite to accommodate a family! It offers two separate bedrooms, with a double bed and bunk bed respectively and a bathroom with a walk-in shower'
    },
    {
      id:20,
      num:20,
      num2:1,
      description:'highly entertaining with game zone just by side ',
      name:'titanus',
      capacity:2,
      price:3000,
      floor:5,
      url:'https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-11.jpeg?raw=true',
  
      info:'Designed to inspire rest and relaxation, our sleek, modern guest rooms create a feeling of home with peaceful color tones and mountain chic décor. Each room features a king-sized bed or two queen-sized beds, air conditioning and full-size bathroom with granite counter tops and marble floors. Deluxe rooms come fully equipped with state-of-the-art amenities including a Samsung smart TV, iHome docking station, USB ports, Keurig Coffee Brewer, mini-fridge, humidifier, in-room safe, plush robes and slippers, and Wi-Fi. All rooms are non-smoking and views vary from beautiful mountain scenery to the iconic Vail Village and our own Pool One.'
    },
   {
      id:21,
      num:21,
      num2:1,
      description:'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray',
      name:'petriart',
      capacity:2,
      price:2400,
      floor:1,
      url:'https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-7.jpeg?raw=true',
      info:'Luxury One Bedroom Suites feature a bedroom with king-sized bed, an oversized bathroom with double vanity and marble floors; and a separate sitting area with gas fireplace, and a wet bar. Each suite also offers spectacular views of Vail Mountain.'
    },
    {
      id:22,
      num:22,
      num2:1,
      description:'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray',
      name:'carvan',
      capacity:3,
      price:2200,
      floor:3,
      url:'https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-8.jpeg?raw=true',
      info:'Smart hospitality with amazing mountain views, fine fabrics, art and wooden furnishings, these rooms offer Pirin Mountain view. Relax in the cozy double or twin bed or enjoy a glass of wine on your private balcony and unwind'
    },
    {
      id:23,
      num:23,
      num2:1,
      description:'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray',
      name:'glora',
      capacity:5,
      price:2000,
      floor:2,
      url:'https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-9.jpeg?raw=true',
  
      info:'This is the perfect suite to accommodate a family! It offers two separate bedrooms, with a double bed and bunk bed respectively and a bathroom with a walk-in shower.'
    },
    {
      id:24,
      num:24,
      num2:1,
      description:'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray',
      name:'fab',
      capacity:3,
      price:5500,
      floor:3,
      url:'https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-10.jpeg?raw=true',
  
      info:'Experience the beauty of an Executive Room at PREMIER. Spacious rooms decorated in contemporary style with wooden furnishing offering views of the town of Bansko and hotel surrounding area. '
  
    }




]
export default rooms