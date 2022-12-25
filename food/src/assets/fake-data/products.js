// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.jpg";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";

import product_07_image_01 from '../images/burger(1).png';
import product_07_image_02 from '../images/burger(2).png';
import product_07_image_03 from '../images/burger(3).png';

import product_08_image_01 from '../images/taco(1).png';
import product_08_image_02 from '../images/taco(2).png';
import product_08_image_03 from '../images/taco(3).png';

const products = [
  {
    id: "01",
    title: "Chicken Burger",
    price: 24.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Hamburger",
    desc: " ",
  },

  {
    id: "02",
    title: "Vegetarian Pizza",
    price: 115.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Pizza",

    desc: ".",
  },

  {
    id: "03",
    title: "Double Cheese Margherita",
    price: 110.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "",
  },

  {
    id: "04",
    title: "Maxican Green Wave",
    price: 110.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "",
  },

  {
    id: "05",
    title: "Cheese Burger",
    price: 24.0,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Hamburger",

    desc: "",
  },
  {
    id: "06",
    title: "Royal Cheese Burger",
    price: 24.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Hamburger",

    desc: "",
  },

  {
    id: "07",
    title: "Seafood Pizza",
    price: 115.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "",
  },

  {
    id: "08",
    title: "Thin Cheese Pizza",
    price: 110.0,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "",
  },

  {
    id: "09",
    title: "Pizza With Mushroom",
    price: 110.0,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "",
  },

  {
    id: "10",
    title: "Classic Hamburger",
    price: 24.0,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Hamburger",

    desc: "",
  },

  {
    id: "11",
    title: "Crunchy Bread ",
    price: 35.0,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: ".",
  },

  {
    id: "12",
    title: "Delicious Bread ",
    price: 35.0,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: "Bread",

    desc: ".",
  },

  {
    id: "13",
    title: "Loaf Bread ",
    price: 35.0,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: "",
  },

  {
    id: "14",
    title: "Salmon Burger",
    price: 17.0,
    image01: product_07_image_01,
    image02: product_07_image_02,
    image03: product_07_image_03,
    category: "Hamburger",

    desc: "",
  },

  {
    id: "15",
    title: "Bacon Burger",
    price: 12.0,
    image01: product_07_image_02,
    image02: product_07_image_01,
    image03: product_07_image_03,
    category: "Hamburger",

    desc: "",
  },

  {
    id: "16",
    title: "Double Burger",
    price: 20.0,
    image01: product_07_image_03,
    image02: product_07_image_01,
    image03: product_07_image_03,
    category: "Hamburger",

    desc: "",
  },

  {
    id: "17",
    title: "Taco Al Pastor",
    price: 17.0,
    image01: product_08_image_01,
    image02: product_08_image_02,
    image03: product_08_image_03,
    category: "Mexican",

    desc: "",
  },

  {
    id: "18",
    title: "Dacos De Birria",
    price: 12.0,
    image01: product_08_image_02,
    image02: product_08_image_01,
    image03: product_08_image_03,
    category: "Mexican",

    desc: "",
  },

  {
    id: "19",
    title: "Tacos De Cabeza",
    price: 20.0,
    image01: product_08_image_03,
    image02: product_08_image_01,
    image03: product_08_image_03,
    category: "Mexican",

    desc: "",
  },




 

];

export default products;
