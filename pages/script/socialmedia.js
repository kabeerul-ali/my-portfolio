import { socialMedia } from "../../data.js";

const parent = document.querySelector(".container");

for (const i of socialMedia) {
  const social = document.createElement("div");
  social.className = "social";
  const left = document.createElement("div");
  left.className = "left";
  const icon = document.createElement("div");
  icon.className = "icon";
  icon.innerHTML = `<i class='${i.icon}'></i>`;
  left.appendChild(icon);
  const sname = document.createElement("div");
  sname.className = "sname";
  sname.innerText = i.name;
  left.appendChild(sname);
  social.appendChild(left);
  const rightside = document.createElement("div");
  rightside.className = "right";
  const username = document.createElement("div");
  username.className = "username";
  username.innerText = "Username :- kabeerul Ali";
  rightside.appendChild(username);
  const mlink = document.createElement("div");
  mlink.className = "mlink";
  mlink.innerText=i.link;
  rightside.appendChild(mlink);
   const des=document.createElement("div");
  des.className="des";
  des.innerText=i.description;
   const img=document.createElement("a");
  img.className="img";
  img.setAttribute("href",i.link);
  img.innerText="visit My Profile ->";
  rightside.append(des,img);
  social.appendChild(rightside);
  parent.appendChild(social);
}

// parent.innerHTML+=`<i class='${i.icon}'></i>`;
