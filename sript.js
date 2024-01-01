let myLibrary = [];
let container = document.querySelector(".container")
let confirmbutton = document.querySelector("#confirm-button")

let authorinput = document.querySelector("#author")
let titleinput = document.querySelector("#title")
let pagesinput = document.querySelector("#pages")
let readinput = document.querySelector("#read")


function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read == true ? "read" : "not read yet"}`
    }
}


const addToLibrary = () => {

    let obj = new Book(titleinput.value, authorinput.value, pagesinput.value, readinput.checked);

    myLibrary.push(obj);

    console.log(myLibrary);
}

const refreshUI = () => {

    container.innerHTML = "";
    
    myLibrary.forEach(element => {

        let para = document.createElement("button");

        para.classList.add("books")

        para.innerHTML = element.info();

        container.appendChild(para);

    });


}

confirmbutton.addEventListener("click", event => {

    if(authorinput.value && pagesinput.value && titleinput.value !== "") {

        addToLibrary();
        refreshUI();

    }

})