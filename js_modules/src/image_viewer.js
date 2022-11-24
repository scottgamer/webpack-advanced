import "../styles/image_viewer.css";
import big from "../assets/big.jpg";
import small from "../assets/small.jpg";

const imageSmall = document.createElement("img");
// image.src = "https://loremflickr.com/640/360";
imageSmall.src = small;

document.body.appendChild(imageSmall);

const imageBig = document.createElement("img");
imageBig.src = big;

document.body.appendChild(imageBig);
