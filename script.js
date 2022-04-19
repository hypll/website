/*
  This website was created with Hypestyle-cli
  You find all the docs for Hypestyle 
  in the following link: https://hypestyle.netlify.app
  Copyright (c) 2022, Hypestyle
*/

document.querySelector(".icon").onclick = function () {
  window.location.href = "/";
};

document.getElementById("hamburger-btn").onclick = function () {
  document.getElementById("hamburger-mobile").classList.toggle("show");
};

const emailField = document.getElementById("email");
const error = document.getElementById("error");
const submit = document.getElementById("submit");

// check if email is valid, if not show error
emailField.addEventListener("input", function (event) {});

emailField.addEventListener("keyup", function (event) {
  if (emailField.value === "") {
    error.classList.remove("display-none");
    submit.disabled = true;
    submit.classList.add("c-not-allowed");
  } else if (emailField.value !== "") {
    error.classList.add("display-none");
    submit.disabled = false;
    submit.classList.remove("c-not-allowed");
  }

  if (emailField.value.indexOf("@") === -1) {
    error.classList.remove("display-none");
    submit.disabled = true;
    submit.classList.add("c-not-allowed");
  }

  if (emailField.value.indexOf(".") === -1) {
    error.classList.remove("display-none");
    submit.disabled = true;
    submit.classList.add("c-not-allowed");
  }
});
