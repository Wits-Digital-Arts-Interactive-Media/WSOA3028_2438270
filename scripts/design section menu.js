const menuItems= [
    {name:"Home", href:"../index.html"},
    {name:"Wireframes 1 - Desktop (version 1)", href:"wireframe1.html"},
    {name:"Wireframes 2 - Smartphones (version 1)", href:"wireframe2.html"},
    {name:"Wireframes 3 - Desktop (version 2)", href:"wireframe3.html"},
]

export function initialise(currentPage){
    const nav=document.querySelector("header > nav")
    const ul=document.createElement("ul")
    const li=document.createElement("li")
    for(let menuItem of menuItems){
        const li=document.createElement("li")
        if(currentPage =menuItem.name){
            const a=document.createElement("a")
            a.innerText=menuItem.name
            a.setAttribute("href", menuItem.href)
            li.appendChild(a)
        } else {li.innerText=menuItem.name}
        ul.appendChild(li)
    }
    nav.appendChild(ul)
}