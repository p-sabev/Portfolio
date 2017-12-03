// Portfolio 
const portfElements = [{
        id: 0,
        img: "05",
        description: "Website Plovdiv",
        category: "web"
    },
    {
        id: 1,
        img: "07",
        description: "Birthday card",
        category: "design"
    },
    {
        id: 2,
        img: "01",
        description: "Currency converter",
        category: "web"
    },
    {
        id: 3,
        img: "09",
        description: "Photoshop design",
        category: "design"
    },
    {
        id: 4,
        img: "10",
        description: "Website vape cafe",
        category: "web"
    },
    {
        id: 5,
        img: "08",
        description: "JS Data treatment",
        category: "web"
    },
    {
        id: 6,
        img: "06",
        description: "UI/UX",
        category: "design"
    },
    {
        id: 7,
        img: "04",
        description: "MNM template",
        category: "web"
    },
    {
        id: 8,
        img: "11",
        description: "Logo design",
        category: "design"
    },
    {
        id: 9,
        img: "13",
        description: "Desktop Games",
        category: "apps"
    },
    {
        id: 10,
        img: "14",
        description: "Desktop Timer",
        category: "apps"
    },
    {
        id: 11,
        img: "02",
        description: "Motion mockup",
        category: "web"
    },
    {
        id: 12,
        img: "15",
        description: "Andoir app",
        category: "apps"
    },

];

const place = document.querySelector("#portfItemsPlace");
const allBtn = document.querySelector("#allBtn");
const catBtns = document.querySelectorAll(".links-in-portfolio");
let categoryNow = document.querySelector("#all");

function pack(img, desc, cat) {
    return `<div class="col-1" id="${cat}">
                  <img src="img/Portfolio/pc-${img}.png" class="scale">
                  <p class="description">${desc}</p>
              </div>`;
}

function showAllEl() {
    categoryNow.classList.remove("active-link");
    categoryNow = document.querySelector("#all");
    categoryNow.classList.add("active-link");
    place.innerHTML = "";
    allBtn.style.display = "none";
    return portfElements.forEach(el => {
        place.innerHTML += pack(el.img, el.description, el.category);
    });
}

function showEightEl() {
    place.innerHTML = "";
    return portfElements.forEach(el => {
        el.id < 8 && (place.innerHTML += pack(el.img, el.description, el.category));
    });
}

function showPortfolioCat(clickedCategory) {
    categoryNow.classList.remove("active-link");
    categoryNow = document.querySelector(`#${clickedCategory}`);
    categoryNow.classList.add("active-link");

    place.innerHTML = "";
    return portfElements.forEach(el => {
        if (el.category == clickedCategory) {
            place.innerHTML += pack(el.img, el.description, el.category);
        }
    });
}
showEightEl();


function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function isScrolledIntoView(el) {
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;
    return (isVisible = (elemTop >= 0) && (elemTop + 200 <= window.innerHeight));
}


window.addEventListener('scroll', debounce(function () {
    const el = document.querySelector('header');
    if (document.documentElement.scrollTop > 350) {
        el.classList.add('small');
        document.querySelector('.logo').style.backgroundSize = "40px";
        document.querySelector('#nav').style.lineHeight = "50px";
    } else {
        el.classList.remove('small');
        document.querySelector('.logo').style.backgroundSize = "90px";
        document.querySelector('#nav').style.lineHeight = "100px";
    }
}, 50));


// Bars
const bars = document.querySelectorAll(".insideBar");
bars.forEach((bar) => {
    bar.style.width = bar.dataset.percent + "%";
});