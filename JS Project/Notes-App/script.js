let notescontainer = document.querySelector(".notes-container");
let cbtn = document.querySelector(".btn");
// let notes = document.querySelectorAll(".input-box");

function showNotes() {
  notescontainer.innerHTML = localStorage.getItem("notes");
}

function updateStorage() {
  localStorage.setItem("notes", notescontainer.innerHTML);
}

// showN0tes();

cbtn.addEventListener("click", () => {
  let container = document.createElement("p");
  let img = document.createElement("img");
  container.className = "input-box";
  container.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notescontainer.appendChild(container);
container.appendChild(img);

});
notescontainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    let notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Enter") {
//    document.execCommand(<br />);
document.createElement("<br />")
    event.preventDefault();
  }
})
showNotes();
