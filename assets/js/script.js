let titles = document.querySelectorAll('.title');
let desc = document.querySelectorAll('.desc');
let imgs = document.querySelectorAll('img');
let box = document.querySelector('.box');

let title1 = document.getElementById('q1');
let title2 = document.getElementById('q2');
let title3 = document.getElementById('q3');
let title4 = document.getElementById('q4');
let title5 = document.getElementById('q5');

let desc1 = document.getElementById('d1');
let desc2 = document.getElementById('d2');
let desc3 = document.getElementById('d3');
let desc4 = document.getElementById('d4');
let desc5 = document.getElementById('d5');

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let img5 = document.getElementById('img5');

let body = document.querySelector('body');

function showRemover() {
    for (i = 0; i < desc.length; i++) {
        desc[i].classList.remove('show');
    }
    for (i = 0; i < imgs.length; i++) {
        imgs[i].classList.remove('rotateArrow');
    }
    for (i = 0; i < titles.length; i++) {
        titles[i].classList.remove('titleActive');
    }

}

title1.addEventListener('click', () => {
    if (desc1.classList.contains('show')) {
        showRemover()
    } else {
        showRemover();
        title1.classList.add('titleActive');
        desc1.classList.add('show');
        img1.classList.add('rotateArrow');
    }
});
title2.addEventListener('click', () => {
    if (desc2.classList.contains('show')) {
        showRemover();
    } else {
        showRemover();
        title2.classList.add('titleActive');
        desc2.classList.add('show');
        img2.classList.add('rotateArrow');
    }
});
title3.addEventListener('click', () => {
    if (desc3.classList.contains('show')) {
        showRemover();
    } else {
        showRemover();
        title3.classList.add('titleActive');
        desc3.classList.add('show');
        img3.classList.add('rotateArrow');
    }
});
title4.addEventListener('click', () => {
    if (desc4.classList.contains('show')) {
        showRemover();
    } else {
        showRemover();
        title4.classList.add('titleActive');
        desc4.classList.add('show');
        img4.classList.add('rotateArrow');
    }
});
title5.addEventListener('click', () => {
    if (desc5.classList.contains('show')) {
        showRemover();
    } else {
        showRemover();
        title5.classList.add('titleActive');
        desc5.classList.add('show');
        img5.classList.add('rotateArrow');
    }
});