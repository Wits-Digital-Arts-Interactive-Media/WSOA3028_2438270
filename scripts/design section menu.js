const menuItems= [
    {name:"Wireframes 1", href:"initial wireframes.html"},
]

export function initialise(currentPage){
    const nav=document.querySelector("header > nav")
    const ul=document.createElement("ul")
    const li=document.createElement("li")
    for(let menuItem of menuItems){
        const li=document.createElement("li")
        if(currentPage !=menuItem.name){
            const a=document.createElement("a")
            a.innerText=menuItem.name
            a.setAttribute("href", menuItem.href)
            li.appendChild(a)
        } else {li.innerText=menuItem.name}
        ul.appendChild(li)
    }
    nav.appendChild(ul)
}