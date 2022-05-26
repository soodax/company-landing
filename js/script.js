let btnTab1 = document.querySelector('.tabs__first');
let btnTab2 = document.querySelector('.tabs__second');
let btnTab3 = document.querySelector('.tabs__third');

let divTab1 = document.querySelector('.tabs-info__first');
let divTab2 = document.querySelector('.tabs-info__second');
let divTab3 = document.querySelector('.tabs-info__third');

let tabStatus = 1;

btnTab1.onclick = function() {
    removeTab();
    divTab1.style.display = 'block';
    tabStatus = 1;
    btnTab1.style.background = '#ff8b38';
}

btnTab2.onclick = function() {
    removeTab();
    divTab2.style.display = 'block';
    tabStatus = 2;
    btnTab2.style.background = '#ff8b38';
}

btnTab3.onclick = function() {
    removeTab();
    divTab3.style.display = 'block';
    tabStatus = 3;
    btnTab3.style.background = '#ff8b38';
}

function removeTab() {
    switch (tabStatus) {
        case 1:
            divTab1.style.display = 'none';
            btnTab1.style.background = 'black';
            break;
        case 2:
            divTab2.style.display = 'none';
            btnTab2.style.background = 'black';
            break;
        case 3:
            divTab3.style.display = 'none';
            btnTab3.style.background = 'black';
            break;
    }
}