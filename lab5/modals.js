let modal = document.getElementsByClassName('modal')[0];
let span = document.getElementsByClassName("close")[0];
let overlay = document.getElementsByClassName("overlay")[0];
let contact_btn = document.getElementsByClassName("contact_btn")[0];

let pop_imgs = document.getElementsByClassName("pop");


for(i=0; i < pop_imgs.length; i++) {
    pop_imgs[i].onclick = function(e) {
        e.target.classList.toggle("active");
        if(overlay.style.visibility == "visible") {
            overlay.style.visibility = "hidden";
        } else {
            overlay.style.visibility = "visible";
        }
    }
}


contact_btn.onclick = function() {
    modal.style.visibility = "visible";
    overlay.style.visibility = "visible";
}
span.onclick = function() {
    modal.style.visibility = "hidden";
    overlay.style.visibility = "hidden";
}


console.log(contact_btn)