function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  li.addEventListener("click", lineThroughTask);
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
  var item = event.target;
  var itemClasses = item.classList;

  if (itemClasses.contains("done")) {
    itemClasses.remove("done");
  } else {
    itemClasses.add("done");
  }
}

// Cashing the elements that we need
var input = document.getElementById("userInput");
var button = document.getElementsByClassName("enter")[0];
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");

button.addEventListener("click", addListAfterClick);
input.addEventListener("keydown", addListAfterEnter);

listItems.forEach(function (item) {
  item.addEventListener("click", lineThroughTask);
});
