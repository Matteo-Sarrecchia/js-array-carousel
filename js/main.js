// variabili globali
const container = document.getElementById("container");
let positionListImg = 0

// creare array con immagini
let listImg = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp", ];
console.log(listImg);

for (i = 0; i < listImg.length; i++){
    const square = document.createElement("div");
    container.append(square);
    square.classList.add("item")
    square.innerHTML = `<img src="img/${listImg[positionListImg++]}">`;
}
console.log(listImg[0])
console.log(positionListImg)
