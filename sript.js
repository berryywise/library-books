let myLibrary = [];
let container = document.querySelector(".container")
let confirmbutton = document.querySelector("#confirm-button")
let authorinput = document.querySelector("#author")
let removebutton = document.querySelectorAll(".remove")
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

    titleinput.value = "";
    authorinput.value = "";
    pagesinput.value = "";
    readinput.checked = false;

}

const refreshUI = () => {

    container.innerHTML = "";
    
    myLibrary.forEach((element, index) => {

        if(element != undefined) {

            let para = document.createElement("div");
            let remove = document.createElement("button");
    
            remove.textContent = "X";
            remove.classList.add("remove");
    
            para.classList.add("books")
            para.setAttribute("index", index )
            para.innerHTML = element.info()
            para.appendChild(remove);
    
            container.appendChild(para);
        }

    });
    
    removebutton = document.querySelectorAll(".remove");

    removebutton.forEach(button => {

        button.addEventListener("click", event => {
    
            let indextoremove = event.currentTarget.parentNode.getAttribute("index");

            myLibrary[indextoremove] = undefined;
            event.currentTarget.parentNode.remove();
            
            })
    
    })

}

confirmbutton.addEventListener("click", event => {

    if(authorinput.value && pagesinput.value && titleinput.value !== "") {

        addToLibrary();
        refreshUI();

    }

})

