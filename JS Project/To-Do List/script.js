const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function Addtask() {
  if (inputbox.value.trim() === "") {
    alert("enter task first");
  } else if (inputbox.value.length <= 3) {
    alert("Task length must be longer than 3");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    savedata();
  }
  inputbox.value = "";
}
listcontainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savedata();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedata();
    }
  },
  false
);

function savedata() {
  localStorage.setItem("data", listcontainer.innerHTML);
}
function showlist() {
  listcontainer.innerHTML = localStorage.getItem("data");
}

showlist();
savedata();