// variabili globali
const container = document.getElementById("container");
let arrowNext = document.querySelector('.arrowNext');
let arrowPrev = document.querySelector(".arrowPrev")
let square;

let positionListImg = 0

// creare array con immagini
let listImg = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp", ];
console.log(listImg);

for (i = 0; i < listImg.length; i++){
    square = document.createElement("div");
    container.append(square);
    square.innerHTML = `<img src="img/${listImg[positionListImg++]}">`;

    // aggiunta classe stile css
    square.classList.add("item")

    
}


let positionItem = 0;

let item = document.querySelectorAll(".item");

console.log(item);

item[positionItem].classList.add("active");


arrowNext.addEventListener("click",
    
    function(){

        if(positionItem < listImg.length -1){

            // tolgo la classe active al primo elemento
        item[positionItem].classList.remove("active");
       
        // passo all'elemento successivo
        positionItem++
        
        // aggiungo la classe active all'elemento successivo
        item[positionItem].classList.add("active");

        // se sono all'ultimo elemento
        if (positionItem === listImg.length -1){
           arrowNext.classList.add("hidden");
        }
        }     
    }
)

arrowPrev.addEventListener("click",

    function(){

        if(positionItem < listImg.length -1){

            // tolgo la classe active al primo elemento
        item[positionItem].classList.remove("active");
        
        // passo all'elemento successivo
        positionItem--
        
        // aggiungo la classe active all'elemento successivo
        item[positionItem].classList.add("active");

        // se sono all'ultimo elemento
        if (positionItem === 0){
            arrowPrev.classList.add("hidden");
        }
        }     
    }
    
)