var h1 = document.getElementsByClassName("animin");
var msg = [];

for (let i = 0; i < h1.length; i++) {
  msg.push(h1[i].innerHTML);
  h1[i].innerHTML = "";
}


console.log(msg);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

document.getElementsByTagName("body")[0].onload = async function animin_fun() {
  for (let j = 0; j < msg.length; j++) {
    for (let i = 0; i < msg[j].length; i++) {
      h1[j].innerHTML += msg[j][i];
      await sleep(100);
    }
  }
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
    else entry.target.classList.remove("show");
  });
});

const hidden_elements = document.querySelectorAll(".hidden");
hidden_elements.forEach((element) => {
  observer.observe(element);
});
