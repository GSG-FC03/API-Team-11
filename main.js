const app = document.getElementById("root");
const container = document.createElement("div");
container.setAttribute("class", "container");
app.appendChild(container);
const button = document.getElementById("button");
const input = document.getElementById("input");
const created = document.getElementsByClassName("card");
button.addEventListener("click", function () {
  localStorage.setItem(1,input.value)
 location.reload();
});
