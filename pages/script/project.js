
import {projects}from"../../data.js";
const parent=document.querySelector(".container");


let c=0;
for (const i of projects) {
    const card=document.createElement("div");
    card.setAttribute("class","card") ;   
    const img=document.createElement("img");
    img.setAttribute("class","pimg") ; 
    img.setAttribute("src",i.image);
    card.appendChild(img);
    const sidetemp=document.createElement("div");
    sidetemp.setAttribute("class","sidetemp") ;
    const pname=document.createElement("div");
    pname.setAttribute("class","pname") ;
    pname.innerText=`${++c}. ${i.name}`;
    sidetemp.appendChild(pname);
    const pdes=document.createElement("div");
    pdes.setAttribute("class","pdes") ;
    pdes.innerText=i.des;
    sidetemp.appendChild(pdes);
    const pbtn=document.createElement("div");
    pbtn.setAttribute("class","pbtn") ;
    const livebtn=document.createElement("button")
    livebtn.setAttribute("class","livebtn")
    livebtn.innerText="Live Link->";
    livebtn.addEventListener("click",()=>{
        window.location.href=i.live;
    })
    pbtn.appendChild(livebtn);
    const githubbtn=document.createElement("button")
    githubbtn.setAttribute("class","githubbtn")
    githubbtn.innerText="Github link->";
    githubbtn.addEventListener("click",()=>{
        window.location.href=i.github;
    })
    pbtn.appendChild(githubbtn);
    sidetemp.appendChild(pbtn);
    card.appendChild(sidetemp);
    parent.appendChild(card);

}