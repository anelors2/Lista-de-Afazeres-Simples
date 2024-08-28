const inputBox = document.getElementById("caixa-texto");
const listContainer = document.getElementById("caixa-lista");

document.getElementById("adicionar").addEventListener("click", addTask);
addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    addTask();
  }
});

function addTask() {
  if (inputBox.value === "") {
    alert("Você precisa digitar algo!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "<i class='fa-solid fa-trash'></i>";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName.toUpperCase() === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName.toUpperCase() === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  }
);

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
