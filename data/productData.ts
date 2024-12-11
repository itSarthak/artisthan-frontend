export type Data = {
    name: string;
    price: string;
    image: string;
    id: number;
    // description: string;
}
export type TrendingData = {
    name: string;
    price: string;
    oldPrice: string;
    image: string;
    material: string;
    features: string[];
    color: string;
    desc: string;
}

export type ArtisanData = {
    name: string;
    image: string;
    desc: string;
    artisan_id: string;
    craft: string;
    mobile: string;
    gender: string;
    address: string;
    state: string;
}

export const Products: Data[] = [{
    name: 'Royal Rajasthani Necklace',
    price: '₹500000',
    id: 1,
    image:'https://assets5.mirraw.com/images/66043/507641bb18099aa0c3cca1f6acf2cdc7_zoom.jpg?1364577730',
    
      
  },
  {
    name: 'Kanjivaram Saree',
    price: '₹2499',
    id: 2,
    image:
      'https://sp.yimg.com/ib/th?id=OIP.vFj8FO6x97B6rakaDfgYHgHaDS&pid=Api&w=148&h=148&c=7&dpr=2&rs=1',
  },]

  export const TrendingProducts: TrendingData[]=
    [
        {
          "name": "Jewellery",
          "price": "₹650",
          "oldPrice": "₹1599",
          "desc": "Beautiful handmade jewellery crafted by skilled artisans, featuring intricate designs and vibrant colors. A perfect addition to any outfit, whether for everyday wear or special occasions.",
          "material": "Sterling Silver, Semi-Precious Stones",
          "color": "Gold, Silver",
          "features": [
            "Handmade by local artisans",
            "Timeless design for all occasions",
            "Lightweight and comfortable"
          ],
          "image": "https://kameswarijewellers.in/wp-content/uploads/sites/494/2022/10/DNL8H-3-1.jpg"
        },
        {
          "name": "Labbin White Sneakers",
          "price": "₹650",
          "oldPrice": "₹1250",
          "desc": "Labbin White Sneakers offer a blend of comfort and modern style. Made from high-quality materials, these sneakers are designed for durability and all-day wear, perfect for casual or athleisure outfits.",
          "material": "Canvas, Rubber Sole",
          "color": "White",
          "features": [
            "Breathable canvas upper",
            "Rubber sole for enhanced grip",
            "Ideal for casual and sports wear"
          ],
          "image": "https://img.clevup.in/57350/1656955246584_SKU-1083_0.jpeg?width=600&format=webp"
        },
        {
          "name": "Mammoth Handicrafts",
          "price": "₹750",
          "oldPrice": "₹1999",
          "desc": "Mammoth Handicrafts are a unique collection inspired by prehistoric creatures, handcrafted with attention to detail. These artistic pieces are made to stand out in any home decor setting, adding a touch of history and artistry.",
          "material": "Wood, Paint",
          "color": "Natural Wood, Multicolor",
          "features": [
            "Handcrafted with attention to detail",
            "Inspired by prehistoric mammoths",
            "Perfect for home decor or as a gift"
          ],
          "image": "https://www.bakerross.co.uk/craft-ideas/wp-content/uploads/2022/06/TC127-Woolly-Mammoth-2.jpg"
        },
        {
          "name": "Luxury Leather Handbag",
          "price": "₹2000",
          "oldPrice": "₹3500",
          "desc": "Crafted from premium leather, this luxury handbag offers both elegance and durability. The spacious interior and sleek exterior make it ideal for both everyday use and formal occasions.",
          "material": "Genuine Leather",
          "color": "Black, Brown",
          "features": [
            "High-quality leather",
            "Spacious with multiple compartments",
            "Sleek and stylish design"
          ],
          "image": "https://images-cdn.ubuy.co.in/643b2a8339e73a1ff311c800-women-flower-embossed-handbag-ladies.jpg"
        },
        {
          "name": "Vintage Wall Clock",
          "price": "₹950",
          "oldPrice": "₹1800",
          "desc": "This vintage-inspired wall clock brings a classic touch to any room. The elegant design, with antique details and large numbers, makes it a beautiful decorative piece while keeping you on time.",
          "material": "Wood, Glass",
          "color": "Brown, Gold",
          "features": [
            "Classic vintage design",
            "Large, easy-to-read numbers",
            "Silent movement"
          ],
          "image": "https://example.com/vintage-wall-clock.jpg"
        },
        {
          "name": "Handwoven Woolen Throw",
          "price": "₹1200",
          "oldPrice": "₹2000",
          "desc": "This luxurious handwoven woolen throw adds warmth and elegance to any space. Soft to the touch and perfect for cozy evenings or as a decorative piece on your couch.",
          "material": "100% Wool",
          "color": "Beige, Charcoal",
          "features": [
            "Soft and warm",
            "Handwoven with love",
            "Perfect for any season"
          ],
          "image": "https://example.com/woolen-throw.jpg"
        },
        {
          "name": "Boho Macramé Wall Hanging",
          "price": "₹450",
          "oldPrice": "₹1000",
          "desc": "A beautiful and artistic macramé wall hanging that adds a touch of boho chic to your home decor. Perfect for living rooms, bedrooms, or even offices to create a cozy, inviting atmosphere.",
          "material": "Cotton, Wood",
          "color": "Cream, Natural",
          "features": [
            "Handmade with macramé technique",
            "Adds texture and style to any room",
            "Versatile home decor item"
          ],
          "image": "https://example.com/macrame-wall-hanging.jpg"
        }
      ]

export const artisans: ArtisanData[]=[
    {
      "name": "CHANDANI",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/1.jpg",
      "desc": "Specializes in creating intricate embroidered and crocheted goods, showcasing cultural artistry.",
      "artisan_id": "CRLUC1338851",
      "craft": "Embroidered & Crochetted goods",
      "mobile": "9026317859",
      "gender": "Female",
      "address": "CHANDPUR BIKAPUR 224204",
      "state": "BIKAPUR"
    },
    {
      "name": "SHASHI KALA",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/2.jpg",
      "desc": "Crafts exquisite embroidered and crocheted goods with attention to traditional patterns.",
      "artisan_id": "CRLUC1338855",
      "craft": "Embroidered & Crochetted goods",
      "mobile": "9794946694",
      "gender": "Female",
      "address": "TENDUA MAFI BIKAPUR 224204",
      "state": "BIKAPUR"
    },
    {
      "name": "JAG PRASAD",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/3.jpg",
      "desc": "Expert in terracotta art, creating beautiful and functional clay items.",
      "artisan_id": "CRLUC1338859",
      "craft": "Terracotta",
      "mobile": "8400536175",
      "gender": "Male",
      "address": "TORO MAFI DARAB GANJ 224204",
      "state": "DARAB GANJ"
    },
    {
      "name": "SANJAY KUMAR",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/4.jpg",
      "desc": "Produces stunning terracotta products with a blend of modern and traditional designs.",
      "artisan_id": "CRLUC1338862",
      "craft": "Terracotta",
      "mobile": "7753017383",
      "gender": "Male",
      "address": "TORO MAFI DARAB GANJ BIKAPUR 224204",
      "state": "DARAB GANJ"
    },
    {
      "name": "RANI BI",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/5.jpg",
      "desc": "Creates high-quality carpets and floor coverings, preserving traditional weaving techniques.",
      "artisan_id": "CRBLC 63336",
      "craft": "Carpet & other floor coverings",
      "mobile": "8954613492",
      "gender": "Female",
      "address": "213DAHAGAWAN SAHSWAN BADAUN BADAUN BADAUN 243638",
      "state": "BADAUN"
    },
    {
      "name": "AHMAT JAHAN",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/6.jpg",
      "desc": "Masterful in crafting luxurious carpets and floor coverings with intricate designs.",
      "artisan_id": "CRBLC 63337",
      "craft": "Carpet & other floor coverings",
      "mobile": "9720394214",
      "gender": "Female",
      "address": "179TO 396DEHGAWAN BADAUN BADAUN 243638",
      "state": "BADAUN"
    },
    {
      "name": "GULAB JANAN",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/7.jpg",
      "desc": "Expert in embroidered and crocheted goods, blending tradition and creativity.",
      "artisan_id": "CRBRB 105948",
      "craft": "Embroidered & Crochetted goods",
      "mobile": "7505432545",
      "gender": "Female",
      "address": "GANDHI NAGAR NAWABGANJ 225001",
      "state": "NAWABGANJ"
    },
    {
      "name": "JAIDA KHATOON",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/8.jpg",
      "desc": "Creates vibrant embroidered and crocheted goods, reflecting cultural heritage.",
      "artisan_id": "CRBRB 105949",
      "craft": "Embroidered & Crochetted goods",
      "mobile": "8738948432",
      "gender": "Female",
      "address": "P/50 NALA PEERBATAWAN 225001",
      "state": "PEERBATAWAN"
    },
    {
      "name": "syed huda mohammad",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/9.jpg",
      "desc": "Specializes in hand embroidery, producing intricate textile designs.",
      "artisan_id": "CRSHC1066604",
      "craft": "Textile (hand embroidery)",
      "mobile": "9760093125",
      "gender": "Female",
      "address": "FLAT NO.1404 SECTOR-01 GREATER NOIDA west kulesara C BLOCKACE CITY 201306",
      "state": "UP"
    },
    {
      "name": "ARATI UPADHYAY",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/10.jpg",
      "desc": "Creates intricate hand-embroidered textiles with exceptional craftsmanship.",
      "artisan_id": "CRSHC1066605",
      "craft": "Textile (hand embroidery)",
      "mobile": "9313834277",
      "gender": "Female",
      "address": "1606 6TH AVENUEB BLOCK GREATER NOIDA CHIPIYANA KHURD TIGRI GAUR CITY-1TOWER-A 201009",
      "state": "UP"
    },
    {
      "name": "Suraj Devi",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/11.jpg",
      "desc": "Crafts Zari & Zari goods, specializing in intricate designs and embroidery using zari threads to create beautiful textile goods.",
      "artisan_id": "CRAGC 96360",
      "craft": "Zari & Zari goods",
      "mobile": "9897443223",
      "gender": "Female",
      "address": "C-1/82 SEC-31 NOIDA NOIDA 201301",
      "state": "UP"
    },
    {
      "name": "RAHEESA",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/12.jpg",
      "desc": "Works with Embroidered & Crochetted goods, producing finely detailed fabric items using needlework and crochet techniques.",
      "artisan_id": "CRSHC1013352",
      "craft": "Embroidered & Crochetted goods",
      "mobile": "9897443223",
      "gender": "Female",
      "address": "MURADNAGAR ARYA NAGAR 201206",
      "state": "MURADNAGAR"
    },
    {
      "name": "dhirendra singh bisht",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/13.jpg",
      "desc": "Specializes in crafting Jewellery, creating unique pieces with various materials and intricate designs.",
      "artisan_id": "CRSHC1013447",
      "craft": "Jewellery",
      "mobile": "8447084343",
      "gender": "Male",
      "address": "CHIPIYANA KHURD TIGARI oppo. gate ct-2 201009",
      "state": "UP"
    },
    {
      "name": "muskan raina",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/14.jpg",
      "desc": "An artist specializing in Painting, with a focus on creative expression through different mediums of painting.",
      "artisan_id": "CRSHC1014703",
      "craft": "Painting",
      "mobile": "8130640149",
      "gender": "Female",
      "address": "63C SEC-34 OPP-MOTHER DAIRY NOIDA BLOCK-B5 201301",
      "state": "UP"
    },
    {
      "name": "SUMITRA GOVIND GAONKAR",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/15.jpg",
      "desc": "Crafts Embroidered & Crochetted goods, focusing on creating high-quality crochet and embroidered fabric items.",
      "artisan_id": "WRPAC104632",
      "craft": "Embroidered & Crochetted goods",
      "mobile": "9422845445",
      "gender": "Female",
      "address": "265 NETRAVALI NETRAVALI 403704",
      "state": "N/A"
    },
    {
      "name": "ALKA ASHOK TENGSE",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/16.jpg",
      "desc": "Creates Embroidered & Crochetted goods with attention to detail, using traditional methods to craft fabric pieces.",
      "artisan_id": "WRPAC104633",
      "craft": "Embroidered & Crochetted goods",
      "mobile": "9404147031",
      "gender": "Female",
      "address": "347 JANGAL NETORALIM 403704",
      "state": "N/A"
    },
    {
      "name": "ANKITA VISHWAS NAIK",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/17.jpg",
      "desc": "Works in the field of Embroidered & Crochetted goods, making exquisite items using hand embroidery and crochet techniques.",
      "artisan_id": "WRPAC104634",
      "craft": "Embroidered & Crochetted goods",
      "mobile": "9823273182",
      "gender": "Female",
      "address": "12 MARGWADA NETORALIM MARGWADA ROAD 403704",
      "state": "N/A"
    },
    {
      "name": "milan prashant kuttikar",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/18.jpg",
      "desc": "Specializes in crafting Embroidered & Crochetted goods, producing a variety of fabric creations with embroidery and crochet techniques.",
      "artisan_id": "WRPAC104635",
      "craft": "Embroidered & Crochetted goods",
      "mobile": "9423165023",
      "gender": "Female",
      "address": "206 PAI WADA NETORALIM NETORALIM 403704",
      "state": "N/A"
    },
    {
      "name": "TAKHE YASSING",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/19.jpg",
      "desc": "Expert in Hand printed Textiles Scarves, creating beautiful hand-printed scarves using various textile printing techniques.",
      "artisan_id": "NERITC 4492",
      "craft": "Hand printed Textiles Scarves",
      "mobile": "8575564347",
      "gender": "Female",
      "address": "HAPOLI ZIRO 791120",
      "state": "ZIRO"
    },
    {
      "name": "RUBU YANYUNG",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/20.jpg",
      "desc": "Skilled in Textile (handloom), creating traditional handwoven fabrics with intricate patterns and textures.",
      "artisan_id": "NERITC 4493",
      "craft": "Textile (handloom)",
      "mobile": "8014548208",
      "gender": "Female",
      "address": "HONG ZIRO 791120",
      "state": "ZIRO"
    },
    {
      "name": "PUNYO NALLO",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/21.jpg",
      "desc": "Specializes in Textile (handloom), producing traditional handwoven fabrics using age-old techniques with intricate patterns.",
      "artisan_id": "NERITC 4494",
      "craft": "Textile (handloom)",
      "mobile": "8579583132",
      "gender": "Female",
      "address": "HONG ZIRO 791120",
      "state": "ZIRO"
    },
    {
      "name": "TILING YANA",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/22.jpg",
      "desc": "Crafts Hand printed Textiles Scarves, creating unique hand-printed scarves with vibrant designs and patterns.",
      "artisan_id": "NERITC 4495",
      "craft": "Hand printed Textiles Scarves",
      "mobile": "9615676466",
      "gender": "Female",
      "address": "HONG ZIRO 791120",
      "state": "ZIRO"
    },
    {
      "name": "DHANVANTI DEVI",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/23.jpg",
      "desc": "Creates Embroidered & Crochetted goods, focusing on delicate embroidery and crochet techniques to craft beautiful fabric items.",
      "artisan_id": "NRKUC144736",
      "craft": "Embroidered & Crochetted goods",
      "mobile": "9459137202",
      "gender": "Female",
      "address": "JMAHA J. GAGAL SHIKOR SIRMOUR SRAHA GAGAL SHIKOR 173001",
      "state": "SHIKOR"
    },
    {
      "name": "seema devi",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/24.jpg",
      "desc": "Works with Embroidered & Crochetted goods, producing finely crafted textile items using traditional crochet and embroidery techniques.",
      "artisan_id": "NRKUC166698",
      "craft": "Embroidered & Crochetted goods",
      "mobile": "8894939879",
      "gender": "Female",
      "address": "sukeli gadagusaini 175123",
      "state": "MP"
    },
    {
      "name": "YASH VANTI DEVI",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/25.jpg",
      "desc": "Crafts Shawls as artware, creating beautifully designed shawls with intricate patterns and vibrant colors.",
      "artisan_id": "NRKUC179215",
      "craft": "Shawls as artware",
      "mobile": "9418401550",
      "gender": "Female",
      "address": "rampur rampur 172001",
      "state": "UP"
    },
    {
      "name": "HEERA NEGI",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/26.jpg",
      "desc": "Specializes in Textile (handloom), creating traditional handwoven textiles with unique designs and textures.",
      "artisan_id": "NRKUC181374",
      "craft": "Textile (handloom)",
      "mobile": "9816035997",
      "gender": "Female",
      "address": "RAMPUR KHAKHRI SHIMLA 172201",
      "state": "UP"
    },
    {
      "name": "Jaibanti Singh",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/27.jpg",
      "desc": "Works with Textile (handloom), crafting high-quality handwoven fabrics using traditional weaving methods.",
      "artisan_id": "NRKUC192479",
      "craft": "Textile (handloom)",
      "mobile": "9459824212",
      "gender": "Male",
      "address": "bhasad shiv badar 175124",
      "state": "MP"
    },
    {
      "name": "BHAWANI SINGH",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/28.jpg",
      "desc": "Creates Woodwares, crafting functional and decorative wooden items with detailed craftsmanship and design.",
      "artisan_id": "NRKUC0307",
      "craft": "Woodwares",
      "mobile": "9882100028",
      "gender": "Male",
      "address": "313 HADIMBA TEMPLE DHUMGRI MANALI 175131",
      "state": "MANALI"
    },
    {
      "name": "PAWAN KUMAR",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/29.jpg",
      "desc": "Specializes in Textile (handloom), producing handwoven fabrics with intricate designs and natural materials.",
      "artisan_id": "NRKUC0308",
      "craft": "Textile (handloom)",
      "mobile": "8931855342",
      "gender": "Male",
      "address": "19 W NO 11 SHASTRI NAGAR 175101",
      "state": "AP"
    },
    {
      "name": "SURESH BODH",
      "image": "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/30.jpg",
      "desc": "Crafts Shawls as artware, designing shawls with elegant patterns and textures that reflect cultural artistry.",
      "artisan_id": "NRKUC0309",
      "craft": "Shawls as artware",
      "mobile": "9882034323",
      "gender": "Male",
      "address": "GSSS BRAN BRAN 175131",
      "state": "UP"
    }
  ]
  