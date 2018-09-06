let arrayGallery = [
    "img/img-section-gallery/1.png",
    "img/img-section-gallery/2.png",
    "img/img-section-gallery/3-1.png",
    "img/img-section-gallery/3-2.png",
    "img/img-section-gallery/3-3.png",
    "img/img-section-gallery/3-4.png",
    "img/img-section-gallery/3-5.png",
    "img/img-section-gallery/3-6.png",
    "img/img-section-gallery/3-7.png",
    "img/img-section-gallery/3-8.png",
    "img/img-section-gallery/3-9.png",
    "img/img-section-gallery/3-10.png",
    "img/img-section-gallery/3-11.png",
    "img/img-section-gallery/4.png",
    "img/img-section-gallery/5.png",
    "img/img-section-gallery/6.png",
    "img/img-section-gallery/7.png",
    "img/img-section-gallery/8.png",
    "img/img-section-gallery/10.jpg",
    "img/img-section-gallery/11.jpg",
    "img/img-section-gallery/12.jpg",
    "img/img-section-gallery/13.jpg",
    "img/img-section-gallery/14.jpg",
    "img/img-section-gallery/15.jpg",
    "img/img-section-gallery/16.jpg",
    "img/img-section-gallery/17.jpg",
    "img/img-section-gallery/18.jpg",
    "img/img-section-gallery/19.jpg",
    "img/img-section-gallery/20.jpg",
    "img/img-section-gallery/22.jpg",
    "img/img-section-gallery/23.jpg",
    "img/img-section-gallery/24.jpg",
    "img/img-section-gallery/25.jpg",
    "img/img-section-gallery/26.jpg",
    "img/img-section-gallery/27.jpg",
    "img/img-section-gallery/28.jpg"
];

let limit = 12;
let btnClickGallery = 0;
let clickCount = arrayGallery.length / limit;

let setStylesGallery = (disable, backgroundColor, cursor) => {
    document.getElementById("btnLoadMoreImage").disabled = disable;
    document.getElementById("btnLoadMoreImage").style.backgroundColor = backgroundColor;
    document.getElementById("btnLoadMoreImage").style.cursor = cursor;
};

let showCountItems = (array, count) => {
    clearDiv('galleryImages');
    for (let i = 0; i < count; i++) {
        document.getElementById("galleryImages").innerHTML +=
            "<img src='" + array[i] + "' class='item' />";
    }
};

let readyGallery = () => {
    setStylesGallery(false, "#18cfab", "pointer");
    showCountItems(arrayGallery, limit);
    btnClickGallery = 1;
};

document.addEventListener("DOMContentLoaded", readyGallery);

let onloadMoreGallery = () => {
    btnClickGallery++;
    showCountItems(arrayGallery, limit * btnClickGallery);
    if (btnClickGallery === clickCount) {
        setStylesGallery(true, "#aaecdf", "auto");
    }
    hideSpinner("spinnerGallery");
};

let runGallery = () => {
    showSpinner("spinnerGallery");
    setTimeout(onloadMoreGallery, 1000);
};