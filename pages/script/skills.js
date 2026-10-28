import { skills } from "../../data.js";
const parent = document.querySelector(".container");

let c = 1;
let d = 0;
for (const i of skills) {
  const card = document.createElement("div");
  card.setAttribute("class", "card");
  const skill = document.createElement("div");
  skill.setAttribute("class", "skills");
  skill.innerText = `${c++}. ${i.name}`;
  card.appendChild(skill);
  d = 1;
  for (const j of i.skills) {
    const skillitem = document.createElement("div");
    skillitem.setAttribute("class", "skillitem");
    const iname = document.createElement("div");
    iname.setAttribute("class", "name");
    iname.innerText = `${d++}.${j.name}`;
    const outer = document.createElement("div");
    outer.setAttribute("class", "outer");
    const inner = document.createElement("div");
    inner.setAttribute("class", "inner");
    inner.style.width = `${j.level * 20}%`;
    outer.appendChild(inner);
    const percantage = document.createElement("div");
    percantage.setAttribute("class", "percantage");
    percantage.innerText = `${j.level * 20} %`;
    const perboth = document.createElement("div");
    perboth.setAttribute("class", "skillper");
    perboth.appendChild(outer);
    perboth.appendChild(percantage);
    skillitem.appendChild(iname);
    skillitem.appendChild(perboth);
    card.appendChild(skillitem);
  }
  parent.appendChild(card);
}
