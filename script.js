const mango = {
  username: "Mango",
  showUsername() {
    console.log(this);
    console.log(`My username is: ${this.username}`);
  },
};

const btn = document.querySelector(".js-btn");
mango.showUsername();

btn.addEventListener("click", mango.showUsername.bind(mango));
