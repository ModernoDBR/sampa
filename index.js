const btnAvancar = document.getElementById('btnAvancar');
const content = document.getElementById('moreContent');
const btnMore = document.getElementById('btnMore');
const placeElements = document.querySelectorAll('.place');
const search = document.getElementById('search');
const searchElements = document.querySelectorAll('.result-item');
const resultbox = document.querySelectorAll('.resultbox')

let results = [];
let places = [];

search.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();

    resultbox.forEach(box => {
        box.style.display = value ? "block" : "none";
    });

    placeElements.forEach(place => {
        const placeName = place.textContent.toLowerCase();

        if (placeName.includes(value)) {
            place.style.display = "";
        } else {
            place.style.display = "none";
        }
    });

    searchElements.forEach(resultItem => {
        const resultName = resultItem.textContent.toLowerCase();

        if (resultName.includes(value)) {
            resultItem.style.display = "";
        } else {
            resultItem.style.display = "none";
        };

    });
});

function selecionar(e) {
    search.value = e.target.textContent;
    resultbox.forEach(box => box.style.display = "none");

    search.dispatchEvent(new Event('input'));

    resultbox.forEach(item => {
        item.style.display = "none";
    });
}

function abrir() {
    btnAvancar.classList.replace('fa-caret-down', 'fa-caret-up');
    content.style.display = "block"
};
function fechar() {
    btnAvancar.classList.replace('fa-caret-up', 'fa-caret-down');
    content.style.display = "none"
};

function verificar() {
    const isOpen = getComputedStyle(content).display === 'block';
    if (isOpen) {
        fechar();
    }
    else {
        abrir();
    }
}

btnAvancar.addEventListener('click', verificar);
searchElements.forEach(item => {
    item.addEventListener('click', selecionar);
});
