let myLibrary = [];
let container = document.querySelector(".container")
let confirmbutton = document.querySelector("#confirm-button")
let authorinput = document.querySelector("#author")
let removebutton = document.querySelectorAll(".remove")
let titleinput = document.querySelector("#title")
let pagesinput = document.querySelector("#pages")
let readinput = document.querySelector("#read")
let readbutton = document.querySelectorAll(".read-button");


function Book (title, author, pages, read) {
    
    
    const info = function() {
        return `${title} by ${author}, ${pages} pages, ${this.read == true ? "read" : "not read yet"}`
    }
    
    const setRead = function () {

        this.read == true ? this.read = false : this.read = true

    }

    return {title, author, pages, read, info, setRead}

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
            let read = document.createElement("button");

            read.textContent = "read/unread"
            read.classList.add("read-button")
    
            remove.textContent = "X";
            remove.classList.add("remove");
    
            para.classList.add("books")
            para.setAttribute("index", index )
            para.innerHTML = element.info()
            para.appendChild(remove);
            para.append(read);
    
            container.appendChild(para);
        }

    });
    
    removebutton = document.querySelectorAll(".remove");
    readbutton = document.querySelectorAll(".read-button");

    removebutton.forEach(button => {

        button.addEventListener("click", event => {
    
            let indextoremove = event.currentTarget.parentNode.getAttribute("index");

            myLibrary[indextoremove] = undefined;
            event.currentTarget.parentNode.remove();
            
            })
    
    })

    readbutton.forEach(read => {

        read.addEventListener("click", event => {

            let indexread = event.currentTarget.parentNode.getAttribute("index");

            myLibrary[indexread].setRead();

            refreshUI();
            
        })
    })

}

confirmbutton.addEventListener("click", event => {

    if(authorinput.value && pagesinput.value && titleinput.value !== "") {

        addToLibrary();
        refreshUI();

    }

})


