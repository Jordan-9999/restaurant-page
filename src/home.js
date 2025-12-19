const siteContent = document.getElementById("content");

function createHome(){

const header = document.createElement("h1");
header.textContent = "Your favorite local pizza place";
siteContent.appendChild(header);

const image = document.createElement("img");
image.src = "https://upload.wikimedia.org/wikipedia/commons/8/86/Pizza_%281%29.jpg";
image.alt = "delicious looking pizza";
image.height = 500;
image.width = 600;
siteContent.appendChild(image);

const paragraph = document.createElement("p");
paragraph.textContent = "Come down to your favorite local pizza place and enjoy a delicious slice of pizza! You won't believe how good it is! Bring the whole family!";
siteContent.appendChild(paragraph);
console.log("create home test");
};


export {createHome};