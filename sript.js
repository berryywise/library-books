let myLibrary = [];
let container = document.querySelector(".container")
let confirmbutton = document.querySelector("#confirm-button")


function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}


const addToLibrary = () => {

    let authorinput = document.querySelector("#author").value
    let titleinput = document.querySelector("#title").value
    let pagesinput = document.querySelector("#pages").value
    let readinput = document.querySelector("#read").value

    let obj = new Book(titleinput, authorinput, pagesinput, readinput);

    myLibrary.push(obj);

    console.log(myLibrary);
}

const refreshUI = array => {

    
    array.forEach(element => {

        let para = document.createElement("p");

        para.classList.add("books")

        para.innerText = element;

        container.appendChild(para);

    });


}

confirmbutton.addEventListener("click", event => {

    addToLibrary();


})


refreshUI(["test", "test", "test","test", "test", "test","test", "test", "test"]);


// const book1 = new Book("Zippie", "Berry", "322", "read")
// console.log(book1.info())