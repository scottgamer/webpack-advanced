import sum from "./sum";
// import "./image_viewer";

const total = sum(10, 5);
console.log(total);

const button = document.createElement("button");
button.innerText = "Click me";

// code splitting using the 'System' module API
button.onclick = () => {
  System.import("./image_viewer").then((module) => {
    module.default();
  });
};

document.body.appendChild(button);
