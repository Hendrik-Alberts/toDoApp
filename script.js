"use strict";
let textInput = document.getElementById("task");
const addBtn = document.getElementById("add");
const clearBtn = document.getElementById("clear");
const ul = document.querySelector(".list");

textInput.value = "";

addBtn.addEventListener("click", function () {
  const toDoOne = textInput.value;

  if (toDoOne != "") {
    //Function to create LI element
    const listItem = function () {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(toDoOne));
      ul.appendChild(li);

      //This creates the 'x' to the right of each task.
      const del = document.createElement("button");
      del.innerHTML = "DONE";
      li.appendChild(del);
      del.setAttribute("id", "xout");
      del.addEventListener("click", function () {
        li.setAttribute("hidden", true);
      });
    };
    listItem(); //Do I need this call here or can it look better?
  } else {
    alert("Please add a task!");
  }
});

//Code to clear text input field on click
clearBtn.addEventListener("click", function () {
  textInput.value = "";
});

//Note: Trigger "Click to Add" on enter push. I researched this forever on MDN since keyCode is deprecated. By using the KeyboardEvent.key property I only need to enter the string of the corresponding key as per the specs. This allows for more devices to be able to use this, as opposed to just using the number system on US Keyboards. Yes, there are other nations out there with better keyboard layouts and I intend to make life easier for then too.  :)
textInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addBtn.click();
  }
});
