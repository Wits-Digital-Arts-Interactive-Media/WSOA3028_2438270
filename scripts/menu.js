const MainmenuItems= [
    {name:"Home", href:"index.html"},
    {name:"Blog Posts", href:"blogs/index.html"},
    {name:"Essays", href:"essays/index.html"},
    {name:"Portfolio", href:"portfolio/index.html"},
    {name:"Design section", href:"Design Section/index.html"},
    {name:"Profile", href:"profile/index.html"},
]
export function initialise(currentPage){
    const nav=document.querySelector("header > nav")
    const ul=document.createElement("ul")
    const li=document.createElement("li")
    for(let MainmenuItem of MainmenuItems){
        const li=document.createElement("li")
        if(currentPage =MainmenuItem.name){
            const a=document.createElement("a")
            a.innerText=MainmenuItem.name
            a.setAttribute("href", MainmenuItem.href)
            li.appendChild(a)
        } else {li.innerText=MainmenuItem.name}
        ul.appendChild(li)
    }
    nav.appendChild(ul)
}

const BlogmenuItems= [
    {name:"Home", href:"index.html"},
    {name:"Blog Post 1: Imagining the Internet", href:"blog-1.html"},
    {name:"Blog Post 2: Interaction and the www", href:"blog-2.html"},
    {name:"Blog Post 3: Interaction Design for the Web", href:"blog-3.html"},
    {name:"Blog Post 4: The IxD Process", href:"blog-4.html"},
    {name:"Blog Post 5: The Ethics of UI & UX Practice", href:"blog-5.html"},
    {name:"Blog Post 6: Internet, Society and Design Justice", href:"blog-6.html"},
    {name:"Blog Post 7: The World in www", href:"blog-7.html"},
    {name:"Blog Post 8: Digital inequalities", href:"blog-8.html"},
]
export function initialiseBlogs(currentPage){
    const nav=document.querySelector("header > nav")
    const ul=document.createElement("ul")
    const li=document.createElement("li")
    for(let BlogmenuItem of BlogmenuItems){
        const li=document.createElement("li")
        if(currentPage =BlogmenuItem.name){
            const a=document.createElement("a")
            a.innerText=BlogmenuItem.name
            a.setAttribute("href", BlogmenuItem.href)
            li.appendChild(a)
        } else {li.innerText=BlogmenuItem.name}
        ul.appendChild(li)
    }
    nav.appendChild(ul)
}

const BackToMainmenuItems= [
    {name:"Home", href:"../index.html"},
    {name:"Back to main selection",href:"index.html"}
]
export function initialiseBackToMain(currentPage){
    const nav=document.querySelector("header > nav")
    const ul=document.createElement("ul")
    const li=document.createElement("li")
    for(let BackToMainmenuItem of BackToMainmenuItems){
        const li=document.createElement("li")
        if(currentPage =BackToMainmenuItem.name){
            const a=document.createElement("a")
            a.innerText=BackToMainmenuItem.name
            a.setAttribute("href", BackToMainmenuItem.href)
            li.appendChild(a)
        } else {li.innerText=BackToMainmenuItem.name}
        ul.appendChild(li)
    }
    nav.appendChild(ul)
}

const DesSectionmenuItems= [
    {name:"Home", href:"index.html"},
    {name:"Wireframes 1 - Desktop (version 1)", href:"wireframe1.html"},
    {name:"Wireframes 2 - Smartphones (version 1)", href:"wireframe2.html"},
    {name:"Wireframes 3 - Desktop (version 2)", href:"wireframe3.html"},
]

export function initialiseDesSection(currentPage){
    const nav=document.querySelector("header > nav")
    const ul=document.createElement("ul")
    const li=document.createElement("li")
    for(let DesSectionmenuItem of DesSectionmenuItems){
        const li=document.createElement("li")
        if(currentPage =DesSectionmenuItem.name){
            const a=document.createElement("a")
            a.innerText=DesSectionmenuItem.name
            a.setAttribute("href", DesSectionmenuItem.href)
            li.appendChild(a)
        } else {li.innerText=DesSectionmenuItem.name}
        ul.appendChild(li)
    }
    nav.appendChild(ul)
}

const EssaymenuItems= [
    {name:"Home", href:"index.html"},
    {name:"Essay 1", href:"essay1.html"},
]

export function initialiseEssay(currentPage){
    const nav=document.querySelector("header > nav")
    const ul=document.createElement("ul")
    const li=document.createElement("li")
    for(let EssaymenuItem of EssaymenuItems){
        const li=document.createElement("li")
        if(currentPage =EssaymenuItem.name){
            const a=document.createElement("a")
            a.innerText=EssaymenuItem.name
            a.setAttribute("href", EssaymenuItem.href)
            li.appendChild(a)
        } else {li.innerText=EssaymenuItem.name}
        ul.appendChild(li)
    }
    nav.appendChild(ul)
}

const PortmenuItems= [
    {name:"Home", href:"index.html"},
    {name:"Burger", href:"burger.html"},
    {name:"Bread", href:"bread.html"},
]

export function initialisePortfolio(currentPage){
    const nav=document.querySelector("header > nav")
    const ul=document.createElement("ul")
    const li=document.createElement("li")
    for(let PortmenuItem of PortmenuItems){
        const li=document.createElement("li")
        if(currentPage =PortmenuItem.name){
            const a=document.createElement("a")
            a.innerText=PortmenuItem.name
            a.setAttribute("href", PortmenuItem.href)
            li.appendChild(a)
        } else {li.innerText=PortmenuItem.name}
        ul.appendChild(li)
    }
    nav.appendChild(ul)
}

const ProfilemenuItems= [
    {name:"Home", href:"index.html"},
]

export function initialiseProfile(currentPage){
    const nav=document.querySelector("header > nav")
    const ul=document.createElement("ul")
    const li=document.createElement("li")
    for(let ProfilemenuItem of ProfilemenuItems){
        const li=document.createElement("li")
        if(currentPage =ProfilemenuItem.name){
            const a=document.createElement("a")
            a.innerText=ProfilemenuItem.name
            a.setAttribute("href", ProfilemenuItem.href)
            li.appendChild(a)
        } else {li.innerText=ProfilemenuItem.name}
        ul.appendChild(li)
    }
    nav.appendChild(ul)
}

