export interface Product {
  name: string;
  price: number;
  oldPrice: string;
  imageUrl: string;
}
export interface Data {
  month: string;
  key: number;
  products: Product[];
}

export const SeasonalData = [
  {
    month: "January",
    key: 1,
    products: [
      {
        name: "Ethnic wear",
        price: "₹1500",
        oldPrice: "₹2500",
        imageUrl: "https://m.media-amazon.com/images/I/61Xz2u1+xmL._SY550_.jpg",
      },
      {
        name: "tricolor decoration",
        price: "₹200",
        oldPrice: "₹2500",

        imageUrl:
          "https://m.media-amazon.com/images/I/31xhh735uNL._SX300_SY300_QL70_ML2_.jpg",
      },
      {
        name: "Diyas",
        price: "₹300",
        oldPrice: "₹2500",
        imageUrl: "https://m.media-amazon.com/images/I/41ljql6kLbL.jpg",
      },
      {
        name: "Lamps",
        price: "₹500",
        oldPrice: "₹2500",
        imageUrl:
          "https://m.media-amazon.com/images/I/61opMqt9wTL._SX300_SY300_QL70_ML2_.jpg",
      },
      {
        name: "Kites",
        price: "₹100",
        oldPrice: "₹2500",
        imageUrl:
          "https://m.media-amazon.com/images/I/41yJuVllmYL._SX300_SY300_QL70_ML2_.jpg",
      },
      {
        name: "Sesame sweets",
        price: "₹250",
        oldPrice: "₹2500",
        imageUrl: "https://m.media-amazon.com/images/I/61NjaoyaatL._SX679_.jpg",
      },
      {
        name: "Laddoos",
        price: "₹350",
        oldPrice: "₹2500",
        imageUrl:
          "https://m.media-amazon.com/images/I/81KsiXTOhhL._SL1500_.jpg",
      },

      {
        name: "Traditional decor items (mango leaves, turmeric knots)",
        price: "₹300",
        oldPrice: "₹2500",
        imageUrl: "",
      },
      {
        name: "Sandalwood",
        price: "₹400",
        oldPrice: "₹2500",
        imageUrl:
          "https://m.media-amazon.com/images/I/71irBYlKqlL._SL1350_.jpg",
      },
      {
        name: "Agarbathi",
        price: "₹50",
        imageUrl: "https://m.media-amazon.com/images/I/41m4zMOS9cL._SX425_.jpg",
      },

      {
        name: "Jaggery",
        price: "₹100",
        oldPrice: "₹2500",
        imageUrl: "https://m.media-amazon.com/images/I/31EM8rUNqSL.jpg",
      },
      {
        name: "Sugarcane",
        price: "₹150",
        oldPrice: "₹2500",
        imageUrl: "https://m.media-amazon.com/images/I/41ckut2kx8L.jpg",
      },
      {
        name: "Udhiyu puri",
        price: "₹180",
        oldPrice: "₹2500",
        imageUrl: "https://dummyimage.com/150",
      },
    ],
  },
  {
    month: "February",
    key: 2,

    products: [
      {
        name: "Yellow-colored clothing",
        price: "₹1200",
        oldPrice: "₹2500",
        imageUrl: "https://dummyimage.com/150",
      },
      {
        name: "Parched rice",
        price: "₹100",
        oldPrice: "₹2500",
        imageUrl: "https://dummyimage.com/150",
      },
      {
        name: "Paddy",
        price: "₹80",
        oldPrice: "₹2500",
        imageUrl: "https://m.media-amazon.com/images/I/61njnrCP3lL.jpg",
      },
      {
        name: "Books for worship",
        price: "₹500",
        oldPrice: "₹2500",
        imageUrl:
          "https://m.media-amazon.com/images/I/81LpuFk2upL._SL1500_.jpg",
      },
      {
        name: "Decorations for altars",
        price: "₹250",
        oldPrice: "₹2500",
        imageUrl:
          "https://m.media-amazon.com/images/I/81FHQzyH3UL._SL1500_.jpg",
      },
      {
        name: "Wheatgrass",
        price: "₹150",
        oldPrice: "₹2500",
        imageUrl: "https://dummyimage.com/150",
      },
      {
        name: "Flowers",
        price: "₹200",
        oldPrice: "₹2500",
        imageUrl: "https://dummyimage.com/150",
      },
      {
        name: "Pastries",
        price: "₹300",
        oldPrice: "₹2500",
        imageUrl: "https://dummyimage.com/150",
      },
      {
        name: "Chang (homemade beer)",
        price: "₹500",
        oldPrice: "₹2500",
        imageUrl: "https://dummyimage.com/150",
      },
      {
        name: "Fruits",
        price: "₹150",
        oldPrice: "₹2500",
        imageUrl: "https://dummyimage.com/150",
      },
      {
        name: "Incense",
        price: "₹50",
        oldPrice: "₹2500",
        imageUrl: "https://dummyimage.com/150",
      },
    ],
  },
  {
    month: "March",
    key: 3,

    products: [
      {
        name: "Colors (gulal)",
        price: "₹150",
        oldPrice: "₹2500",
        imageUrl: "https://dummyimage.com/150",
      },
      {
        name: "Water guns",
        price: "₹200",
        oldPrice: "₹2500",
        imageUrl: "https://dummyimage.com/150",
      },
      {
        name: "White ethnic wear",
        price: "₹1000",
        oldPrice: "₹2500",
        imageUrl: "https://dummyimage.com/150",
      },
      {
        name: "Pichkaris",
        price: "₹250",
        oldPrice: "₹2500",
        imageUrl: "https://dummyimage.com/150",
      },
      {
        name: "Sweets like gujiya",
        price: "₹400",
        oldPrice: "₹2500",
        imageUrl: "https://dummyimage.com/150",
      },
      {
        name: "Snacks",
        price: "₹300",
        oldPrice: "₹2500",
        imageUrl: "https://dummyimage.com/150",
      },
      {
        name: "Lamps",
        price: "₹300",
        oldPrice: "₹2500",
        imageUrl: "https://dummyimage.com/150",
      },
      {
        name: "Kalash",
        price: "₹500",
        oldPrice: "₹2500",
        imageUrl: "https://dummyimage.com/150",
      },
      {
        name: "Thali",
        price: "₹200",
        oldPrice: "₹2500",
        imageUrl: "https://dummyimage.com/150",
      },
      {
        name: "Rudraksha",
        price: "₹800",
        oldPrice: "₹2500",
        imageUrl: "https://dummyimage.com/150",
      },
      {
        name: "Idols",
        price: "₹1000",
        oldPrice: "₹2500",
        imageUrl: "https://dummyimage.com/150",
      },
      {
        name: "Bel leaves",
        price: "₹150",
        oldPrice: "₹2500",
        imageUrl: "https://dummyimage.com/150",
      },
    ],
  },
  // Continue adding data for other months
];

export default SeasonalData;
