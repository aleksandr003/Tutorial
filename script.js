let elemUl = document.querySelector("#elem");
elemUl.addEventListener("click", func);

function func(event) {
  let elemTarget = event.target.tagName.toLowerCase();
  console.log(elemTarget);

  if (elemTarget === "ul") {
    let newP = document.createElement("li");
    newP.innerHTML = "text";
    elemUl.appendChild(newP);
  }

  if (elemTarget === "li") {
    let x = "!";
    console.log(this);
    event.target.innerHTML += x;
  }
}
