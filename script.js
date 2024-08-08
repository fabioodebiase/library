let titolo = document.getElementById("titolo");
let autore = document.getElementById("autore");
let isbn = document.getElementById("isbn");
let listContainer = document.getElementById("list-container");
let button = document.getElementById("btn")


class Libro{
    constructor(titolo,autore,isbn){
        this.titolo = titolo;
        this.autore = autore;
        this.isbn = isbn
    }


    inserisciLibro(){
       let list = document.createElement("li");
       list.innerHTML = `Titolo: ${titolo.value}  Autore: ${autore.value} Codice ISBN: ${isbn.value}`;
       listContainer.appendChild(list)
       
    }
}
    let libro = new Libro(titolo.value,autore.value,isbn.value)
        button.addEventListener('click',function(){
        libro.inserisciLibro();
    })
    



