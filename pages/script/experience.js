import{experience}from"../../data.js";
const exp=experience;

const parent =document.querySelector(".container");


for(const i of exp){
const experience=document.createElement("div");
experience.className="experience";
const role=document.createElement("div");
role.className="role";
role.innerText=i.role;
const company=document.createElement("div");
company.className="company";
company.innerText=i.company
const loc=document.createElement("div");
loc.className="loc";
loc.innerText=i.location;
const duration=document.createElement("div");
duration.className="duration";
duration.innerText=i.duration;
const des=document.createElement("div");
des.className="des";

//des  breake into the points
const li=document.createElement("ol");
li.setAttribute("type","1");
for (const j of i.responsibilities) {
    const litem=document.createElement("li");
    litem.innerText=j;
    li.appendChild(litem);    
}
des.appendChild(li);
const skills=document.createElement("div");
skills.className="skills";
//addskills as it is
let text="";
for (const j of i.skills) {
    text+=`${j}, `    
}
skills.innerText=text.slice(0,-2);
experience.append(role,company,loc,duration,des,skills);
parent.appendChild(experience);




}