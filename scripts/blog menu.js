const menuItems= [
    {name:"Home", href:"../index.html"},
    {name:"Blog Post 1", href:"blog-1.html"},
    {name:"Blog Post 2", href:"blog-2.html"},
    {name:"Blog Post 3", href:"blog-3.html"},
    {name:"Blog Post 4", href:"blog-4.html"},
    {name:"Blog Post 5", href:"blog-5.html"},
    {name:"Blog Post 6", href:"blog-6.html"},
    {name:"Blog Post 7", href:"blog-7.html"},
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

