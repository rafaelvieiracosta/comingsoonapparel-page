const btn = document.querySelector("button");
const ipt = document.querySelector("input");
const regex = /\S+@\S+\.\S+/;

function removeClass() {
  ipt.parentElement.classList.remove("invalid");
}

function addClass() {
  ipt.parentElement.classList.add("invalid");
}

function validaEmail(event) {
  event.preventDefault();
  const isEmail = regex.test(ipt.value);

  if (ipt.value === "") {
    addClass();
  } else if (isEmail) {
    removeClass();
  } else {
    addClass();
  }
}

btn.addEventListener("click", validaEmail);
ipt.addEventListener("click", removeClass);
