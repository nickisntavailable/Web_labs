function countU(un, sel) {
    let counts = {};
    for(i = 0; i < un.length - 1; i++) {
        let cnt = 0;
        for(j = 0; j < sel.length - 1; j++) {
            if (un[i] == sel[j]) cnt++;
        }
        counts[un[i]] = cnt;
    }
    return counts;
}

function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
}

function getTags() {
    let sels = [];
    document.querySelectorAll('*').forEach((elem) => {
        sels.push(elem.localName);
    });
    console.log('tags array lenght ' + sels.length);


    let un = unique(sels);
    console.log('unique lenght ' + un.length);


    let counts = countU(un, sels);
    return counts;
}

function open(e) {
    if(e.target == contact_btn || e.target == span[0]) {
        modal.classList.toggle("active");
    } else if(e.target == tag_btn || e.target == span[2]) {
        modal_ul.classList.toggle("active");
    } else {
        if(e.target.id.includes('pop')) {
            id = e.target.id.slice(-1);
            modal_img.classList.toggle("pop"+id);
        } else {
            modal_img.classList.remove(modal_img.classList[1]);
            console.log(modal_img.classList);

        }
        modal_img.classList.toggle("active");
        
    }
    overlay.classList.toggle("active");
}



let counts = getTags();
let modal = document.getElementsByClassName('modal')[0];
let modal_img = document.getElementsByClassName('modal_img')[0];
let modal_ul = document.getElementsByClassName('modal_ul')[0];
let span = document.getElementsByClassName("close");
let overlay = document.getElementsByClassName("overlay")[0];
let contact_btn = document.getElementsByClassName("contact_btn")[0];
let tag_btn = document.getElementsByClassName("tag_btn")[0];
let pop_imgs = document.querySelectorAll("#travel img");

let ul = document.createElement('ul');
for (key in counts) {
   ul.innerHTML +='<li>' + key + ': ' + counts[key] + '</li>';
}
modal_ul.append(ul);


for(i=0; i < pop_imgs.length; i++) {
    pop_imgs[i].onclick = function(e) {
        open(e);
    }
}

for(i=0; i < span.length; i++) {
    span[i].onclick = function(e) {
        open(e);
    }
}

contact_btn.onclick = function(e) {
    open(e);
}
tag_btn.onclick = function(e) {
    open(e);
}


