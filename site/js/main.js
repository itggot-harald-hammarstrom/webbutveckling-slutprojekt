function meny(event){
    let meny = document.querySelector(".burgarmeny")
    meny.classList.toggle("activate")
}

function collapsible(elem){
    console.log(elem.querySelector(".pil"))
    elem.classList.toggle("activated")
    elem.querySelector(".pil").classList.toggle("rotate")
}

