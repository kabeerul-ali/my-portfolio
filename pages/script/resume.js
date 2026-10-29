import { skills, experience ,projects} from "../../data.js";
const skill = document.querySelector(".skills");
const pproj=projects;

for (const i of skills) {
  const sk = document.createElement("div");
  sk.setAttribute("class", "sk");
  const sktype = document.createElement("div");
  sktype.setAttribute("class", "sktype");
  sktype.innerText = `${i.name}:`;
  sk.appendChild(sktype);
  const skes = document.createElement("div");
  skes.setAttribute("class", "skes");
  let text = "";
  for (const j of i.skills) {
    text += `${j.name}, `;
  }
  // remove last , and add :
  const skkt = text.slice(0, -2) + ";";
  skes.innerHTML = skkt;
  sk.appendChild(skes);
  skill.appendChild(sk);
}

const availbleskill = document.querySelector(".skills");
for (let i = 0; i < 2; i++) {
  availbleskill.lastElementChild.remove();
}

//experience grab

const experienceparent = document.querySelector(".experience");

for (const i of experience) {
  const exp = document.createElement("div");
  exp.className = "exp";
  const role = document.createElement("div");
  role.className = "role";
  role.innerText = i.role;
  exp.appendChild(role);
  const company = document.createElement("div");
  company.className = "company";
  company.innerText = i.company;
  exp.appendChild(company);
  const location = document.createElement("div");
  location.className = "location";
  location.innerText = i.location;
  exp.appendChild(location);
  const duration = document.createElement("div");
  duration.className = "duration";
  duration.innerText = i.duration;
  exp.appendChild(duration);
  const des = document.createElement("div");
  des.className = "des";
  des.innerText = i.responsibilities;
  exp.appendChild(des);
  const eskills = document.createElement("div");
  eskills.className = "eskills";
  let text = "";
  for(const j of i.skills){
    text+=`${j}, `;
  }
  eskills.innerText=text.slice(0,-2) +".";
  exp.appendChild(eskills);
  experienceparent.appendChild(exp);
}

//project data

const projparent=document.querySelector(".rprojects");

for (const i of pproj) {
    const pcard=document.createElement("div");
    pcard.className="projcard";
    const pname=document.createElement("div");
    pname.className="pname";
    pname.innerText=i.name;
    pcard.appendChild(pname);
    const projdes=document.createElement("div");
    projdes.className="projdes des";
    projdes.innerText=i.des;
    pcard.appendChild(projdes);
    const techuse=document.createElement("div");
    techuse.className="techuse";
    let text="";
    for (const j of i.tech) {
      text+=`${j}, `;
      
    }
    const t1=text.slice(0,-2);
    techuse.innerHTML=`<span>Technology Used</span> ${t1};`;
    pcard.appendChild(techuse);

    const githublink=document.createElement("a");
    githublink.className="githublink";
    githublink.innerHTML=`<span>Github link :</span> ${i.github};`;
    githublink.setAttribute("href",i.github)
    pcard.appendChild(githublink);
    const livelink=document.createElement("a");
    livelink.className="livelink";
    livelink.innerHTML=`<span>Github link :</span> ${i.live};`;
    livelink.setAttribute("href",i.live)
    pcard.appendChild(livelink);

    projparent.appendChild(pcard);
}
