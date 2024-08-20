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

   viewLibro(obj){
        obj = JSON.parse(localStorage.getItem("Libri"))
        listContainer.innerHTML = ""
        for(let i = 0; i < obj.length; i ++){
            let list = document.createElement("li");
            list.innerHTML = `Titolo: ${obj[i].titolo}  Autore: ${obj[i].autore} Codice ISBN: ${obj[i].isbn}`;
            listContainer.appendChild(list)
        }
   }

}
    
        button.addEventListener('click',function(){
        let libro = new Libro(titolo.value,autore.value,isbn.value)
        libro.salvaLibro(libro)
        libro.viewLibro(libro);
    })
    

