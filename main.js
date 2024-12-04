let asmo = document.querySelector("body");

let savol = prompt('Ismingizni kiriting');
let savol1 = prompt('Familiyangizni kiriting');
let savol2 = prompt('Yoshingizni kiriting');
let katta = prompt('Yozganlaringizni katta yoki kichik qlmoqchimisiz? \n 1)KATTA \n 2)kichik')

if (isNaN(savol2)) {
    alert('faqat son bilan kriting (3- savolni)')
} else {

}

if (katta == 1) {
    savol = savol.toUpperCase()
    savol1 = savol1.toUpperCase()
    savol2 = savol2.toUpperCase()
} else if (katta == 2) {
    savol = savol.toLowerCase()
    savol1 = savol1.toLowerCase()
    savol2 = savol2.toLowerCase()
} else {
    alert('1 yoki 2 sonini kriting')
}



let div = document.querySelector(".bosh");

div.style.backgroundColor = "black";
div.style.padding = '20px';
div.style.width = '500px';
div.style.height = '300px';
div.style.borderRadius = '30px';

let h1 = document.querySelector("h1")
h1.innerHTML = `1) Isming: ${savol}`

h1.style.fontSize = "38px"
h1.style.color = "red"

let h2 = document.querySelector("h2")
h2.innerHTML = `2) familiangiz: ${savol1}`

h2.style.fontSize = "38px"
h2.style.color = "red"

let h3 = document.querySelector("h3")
h3.innerHTML = `3) yoshingz: ${savol2}`

h3.style.fontSize = "38px"
h3.style.color = "red"