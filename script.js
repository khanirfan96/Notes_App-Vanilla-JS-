const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function shownotes(){
    notesContainer.innerHTML = localStorage.getItem("notes")
}

shownotes();

function storagedesktop(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}
createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "assets/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        storagedesktop();
    }else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(note => {
            note.onkeyup = function(){
                storagedesktop();
            }
        })
    }
})

document.addEventListener("keydown", e => {
    if (e.key === "Enter"){
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }})