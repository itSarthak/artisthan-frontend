export interface Product {
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
}

export interface Region {
  region: string;
  products: Product[];
}

export const regionData: Region[] = [
  {
    region: "north",
    products: [
      {
        name: "Brass Diyas",
        description: "Traditional brass lamps used for lighting.",
        price: 500,
        stock: 50,
        imageUrl: "https://i.ibb.co/2k2Q7vY/brass-diyas.jpg",
      },
      {
        name: "Dry Fruits Gift Box",
        description: "Assorted dry fruits packed in a festive box.",
        price: 1200,
        stock: 100,
        imageUrl: "example.com/dry_fruits_box",
      },
      {
        name: "Organic Gulal",
        description: "Skin-friendly, eco-friendly colors.",
        price: 300,
        stock: 200,
        imageUrl: "https://i.ibb.co/3YYJZMr/organic-gulal.jpg",
      },
      {
        name: "Pichkari",
        description: "Colorful water guns.",
        price: 150,
        stock: 150,
        imageUrl: "https://i.ibb.co/QfZ2WZ5/pichkari.jpg",
      },
    ],
  },
  {
    region: "south",
    products: [
      {
        name: "Clay Pots",
        description: "Traditional clay pots for cooking.",
        price: 350,
        stock: 75,
        imageUrl: "https://i.ibb.co/ZfzhWdc/clay-pots.jpg",
      },
      {
        name: "Sandalwood Garlands",
        description: "Fragrant garlands for decorations and pujas.",
        price: 600,
        stock: 50,
        imageUrl: "https://i.ibb.co/94W1WF7/sandlewood-garlands.jpg",
      },
      {
        name: "Pookalam Flower Kits",
        description: "Flower sets for creating Pookalam (floral carpets).",
        price: 800,
        stock: 30,
        imageUrl: "https://i.ibb.co/zV7rNCy/pookalam-flower-kits.jpg",
      },
      {
        name: "Banana Chips",
        description: "Crispy, traditional Kerala banana chips.",
        price: 250,
        stock: 200,
        imageUrl: "https://i.ibb.co/SJVrQfN/banana-chips.jpg",
      },
    ],
  },
  {
    region: "east",
    products: [
      {
        name: "Durga Idols",
        description: "Handcrafted idols of Goddess Durga.",
        price: 5000,
        stock: 20,
        imageUrl: "https://i.ibb.co/nLpk7Ym/durga-idols.jpg",
      },
      {
        name: "Shola Crafts",
        description: "Traditional Bengali crafts made from shola pith.",
        price: 700,
        stock: 60,
        imageUrl: "https://i.ibb.co/2s0zLZd/shola-crafts.jpg",
      },
      {
        name: "Mekhela Chador",
        description: "Traditional Assamese attire.",
        price: 2500,
        stock: 40,
        imageUrl: "https://i.ibb.co/T8kSYTm/mekhela-chador.jpg",
      },
      {
        name: "Assam Tea",
        description: "Premium quality tea from Assam.",
        price: 400,
        stock: 100,
        imageUrl: "https://i.ibb.co/kqrpgH8/Assam-tea.jpg",
      },
    ],
  },
  {
    region: "west",
    products: [
      {
        name: "Chaniya Choli",
        description: "Traditional attire for Garba.",
        price: 3000,
        stock: 30,
        imageUrl: "https://i.ibb.co/XSw8W6Y/chaniya-choli.jpg",
      },
      {
        name: "Dandiya Sticks",
        description: "Decorative sticks for Garba and Dandiya Raas.",
        price: 200,
        stock: 150,
        imageUrl: "https://i.ibb.co/LY4M2QW/Dandiya-sticks.jpg",
      },
      {
        name: "Ganesh Idols",
        description: "Eco-friendly Ganesh idols for worship.",
        price: 1500,
        stock: 25,
        imageUrl: "https://i.ibb.co/v3tR4cR/ganesha-idols.jpg",
      },
      {
        name: "Modak Moulds",
        description: "Moulds for making traditional modaks.",
        price: 350,
        stock: 100,
        imageUrl: "https://i.ibb.co/g4Mp2xq/modak-moulds.jpg",
      },
    ],
  },
];
