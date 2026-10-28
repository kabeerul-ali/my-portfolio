import { about } from "../data.js";
const parent = document.querySelector(".container");
for (const i of about) {
  const card = document.createElement("div");
  card.setAttribute("class", "about");
  const name = document.createElement("div");
  name.setAttribute("class", "aname");
  name.innerText = i.name;
  const aheading = document.createElement("div");
  aheading.setAttribute("class", "aheading");
  aheading.innerText = i.title;
  const ades = document.createElement("div");
  ades.setAttribute("class", "ades");
  ades.innerHTML = i.des;

  card.appendChild(name);
  card.appendChild(aheading);
  card.appendChild(ades);
  parent.appendChild(card);
}
