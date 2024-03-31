function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  li.appendChild(addButtonDone());
  input.value = "";
}

function addListAfterClick() {
  if (input.value.trim().length != 0) {
    createListElement();
  }
}

function addListAfterEnter(event) {
  if (input.value.trim().length != 0 && event.key == "Enter") {
    createListElement();
  }
}

function lineThroughTask(event) {
  var buttonDone = event.target;
  var listItem = buttonDone.parentNode;
  var listClasses = listItem.classList;

  if (listClasses.contains("done")) {
    listItem.classList.remove("done");
    buttonDone.textContent = "Done";
  } else {
    listItem.classList.add("done");
    buttonDone.textContent = "Undone";
  }
}

function addButtonDone() {
  var buttonDone = document.createElement("button");
  buttonDone.textContent = "Done";
  buttonDone.addEventListener("click", lineThroughTask);
  return buttonDone;
}

// Cashing the elements that we need
var input = document.getElementById("userInput");
var button = document.getElementsByClassName("enter")[0];
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");

button.addEventListener("click", addListAfterClick); // callback function
input.addEventListener("keydown", addListAfterEnter); // callback function

for (var item of listItems) {
  item.appendChild(addButtonDone());
}
