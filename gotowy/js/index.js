import Slider from "./Slider.js";

const slideList = [
  {
    img: "images/img1.jpg",
    text: "Pierwszy tekst",
  },
  {
    img: "images/img2.jpg",
    text: "Drugi tekst",
  },
  {
    img: "images/img3.jpg",
    text: "Trzeci tekst",
  },
];

const slider = new Slider(
  slideList,
  "img.slider",
  "h1.slider",
  ".dots span",
  2000
);

slider.start();
