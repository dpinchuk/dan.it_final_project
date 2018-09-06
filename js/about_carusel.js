let arrayObjectAbout = [
    {
        img: "img/img-section-about/img-about-1.png",
        name: "Hasan Ali",
        position: "UX Designer"
    },
    {
        img: "img/img-section-about/img-about-2.png",
        name: "Hertz Elena",
        position: "Analityst"
    },
    {
        img: "img/img-section-about/img-about-3.png",
        name: "Romero John",
        position: "Fullstack Java Developer"
    },
    {
        img: "img/img-section-about/img-about-4.png",
        name: "Shredder Nadya",
        position: "QA Engineer"
    },
];
let arrayAboutImages = [];
for (let i = 0; i < arrayObjectAbout.length; i++) {
    arrayAboutImages[i] = arrayObjectAbout[i].img;
}

let current = 0;

(function () {
    window.onload = function () {
        document.getElementById("aboutAloneImg").innerHTML =
            "<h3 class='alone-img__name text-capitalize'>" + arrayObjectAbout[0].name + "</h3>" +
            "<h3 class='alone-img__position'>" + arrayObjectAbout[0].position + "</h3>" +
            "<img src='" + arrayObjectAbout[0].img + "' alt='' class='alone-img__image'>";

        document.getElementById("aboutImg").innerHTML =
            "<a class='carusel-link' onclick='showAloneImg(arrayObjectAbout[0])'><img src='" + arrayObjectAbout[0].img + "' alt='' class='section-about__img' /></a>" +
            "<a class='carusel-link' onclick='showAloneImg(arrayObjectAbout[1])'><img src='" + arrayObjectAbout[1].img + "' alt='' class='section-about__img' /></a>" +
            "<a class='carusel-link' onclick='showAloneImg(arrayObjectAbout[2])'><img src='" + arrayObjectAbout[2].img + "' alt='' class='section-about__img' /></a>" +
            "<a class='carusel-link' onclick='showAloneImg(arrayObjectAbout[3])'><img src='" + arrayObjectAbout[3].img + "' alt='' class='section-about__img' /></a>";
    }
})();

let showImages = () => {
    clearDiv("aboutAloneImg");
    document.getElementById("aboutAloneImg").innerHTML =
        "<h3 class='alone-img__name text-capitalize'>" + arrayObjectAbout[current].name + "</h3>" +
        "<h3 class='alone-img__position'>" + arrayObjectAbout[current].position + "</h3>" +
        "<img src='" + arrayObjectAbout[current].img + "' alt='' class='alone-img__image'>";

    clearDiv("aboutImg");
    document.getElementById("aboutImg").innerHTML =
        "<a class='carusel-link' onclick='showAloneImg(getObject(arrayAboutImages[0]))'><img src='" + arrayAboutImages[0] + "' alt='' class='section-about__img' /></a>" +
        "<a class='carusel-link' onclick='showAloneImg(getObject(arrayAboutImages[1]))'><img src='" + arrayAboutImages[1] + "' alt='' class='section-about__img' /></a>" +
        "<a class='carusel-link' onclick='showAloneImg(getObject(arrayAboutImages[2]))'><img src='" + arrayAboutImages[2] + "' alt='' class='section-about__img' /></a>" +
        "<a class='carusel-link' onclick='showAloneImg(getObject(arrayAboutImages[3]))'><img src='" + arrayAboutImages[3] + "' alt='' class='section-about__img' /></a>"
};

let previous = () => {
    current--;
    if (current < 0) {
        current = arrayAboutImages.length - 1;
    }
    let temp = arrayAboutImages.pop();
    arrayAboutImages.unshift(temp);
    showImages(arrayAboutImages, current);
};

let next = () => {
    current++;
    if (current > arrayAboutImages.length - 1) {
        current = 0;
    }
    let temp = arrayAboutImages.shift();
    arrayAboutImages[arrayAboutImages.length] = temp;
    showImages(arrayAboutImages, current);
};

let showAloneImg = (object) => {
    clearDiv("aboutAloneImg");
    document.getElementById("aboutAloneImg").innerHTML =
        "<h3 class='alone-img__name text-capitalize'>" + object.name + "</h3>" +
        "<h3 class='alone-img__position'>" + object.position + "</h3>" +
        "<img src='" + object.img + "' alt='' class='alone-img__image'>";
};

let getObject = (img) => {
    let currentItem = {};
    for (i = 0; i < arrayObjectAbout.length; i++) {
        if (arrayObjectAbout[i].img === img) {
            currentItem = arrayObjectAbout[i];
            break;
        }
    }
    return currentItem;
};