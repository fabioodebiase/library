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

    salvaLibro(obj){
        
        if (localStorage.getItem("Libri")) {
            obj = JSON.parse(localStorage.getItem("Libri"));
        } else {
            obj = [];
        }
        obj.push({titolo:this.titolo,autore:this.autore,isbn:this.isbn})
        localStorage.setItem("Libri", JSON.stringify(obj))
       
        
        
    }


    inserisciLibro(){
       let list = document.createElement("li");
       list.innerHTML = `Titolo: ${titolo.value}  Autore: ${autore.value} Codice ISBN: ${isbn.value}`;
       listContainer.appendChild(list)
       
    }
}
    
        button.addEventListener('click',function(){
        let libro = new Libro(titolo.value,autore.value,isbn.value)
        libro.salvaLibro(libro)
        libro.inserisciLibro();
    })


