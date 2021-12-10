"use strict";
let textInput = document.getElementById("task");
const addBtn = document.getElementById("add");
const clearBtn = document.getElementById("clear");
const ul = document.querySelector(".list");

textInput.value = "";

addBtn.addEventListener("click", function () {
  const toDoOne = textInput.value;
  //Function to create LI element
  const listItem = function () {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(toDoOne));
    ul.appendChild(li);
  };
  listItem(); //Do I need this call here or can it look better?

  textInput.value = "";
  console.log(toDoOne);
});

//Code to clear text input field on click
clearBtn.addEventListener("click", function () {
  textInput.value = "";
});

// Trigger "Click to Add" on enter push

//Create 'x' or delete buttons on all tasks?

//Aternate background color of tasks?

//Make the task thumbnail look better.
