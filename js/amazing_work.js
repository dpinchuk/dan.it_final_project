let attributeArray = ["graphicDesign", "webDesign", "landingPages", "wordpress"];

let arrayObjectsSectionWork = [
    { //0
        attribute: attributeArray[0],
        arrayImg: [
            "img/img-section-work/0.png",
            "img/img-section-work/1.png",
            "img/img-section-work/2.png",
            "img/img-section-work/3.png",
            "img/img-section-work/4.png",
            "img/img-section-work/5.png",
            "img/img-section-work/6.png",
            "img/img-section-work/7.png",
            //"img/img-section-work/8.png"
        ]
    },

    { //1
        attribute: attributeArray[1],
        arrayImg: [
            "img/img-section-work/9.png",
            "img/img-section-work/10.png",
            "img/img-section-work/11.png",
            "img/img-section-work/12.png",
            "img/img-section-work/13.png",
            "img/img-section-work/14.png",
            "img/img-section-work/15.png",
            "img/img-section-work/16.png",
            //"img/img-section-work/17.png"
        ]
    },

    { //2
        attribute: attributeArray[2],
        arrayImg: [
            "img/img-section-work/18.png",
            "img/img-section-work/19.png",
            "img/img-section-work/20.png",
            "img/img-section-work/21.png",
            "img/img-section-work/22.png",
            "img/img-section-work/23.png",
            "img/img-section-work/24.png",
            "img/img-section-work/25.png",
            //"img/img-section-work/26.png"
        ]
    },

    {
        attribute: attributeArray[3],
        arrayImg: [
            "img/img-section-work/27.png",
            "img/img-section-work/28.png",
            "img/img-section-work/29.png",
            "img/img-section-work/30.png",
            "img/img-section-work/31.png",
            "img/img-section-work/32.png",
            "img/img-section-work/33.png",
            "img/img-section-work/34.png",
            //"img/img-section-work/35.png"
        ]
    }
];

arrayWorkImages = [];

for (let i = 0; i < arrayObjectsSectionWork.length; i++) {
    arrayWorkImages = arrayWorkImages.concat(arrayObjectsSectionWork[i]);
}

let perm = [];
let resetPerm = () => {
    for (let i = 0; i < arrayObjectsSectionWork.length; i++) {
        perm[i] = i;
    }
};

let showAllItems = (arrayObjects) => {
    let index = 0;
    for (let i = 0; i < arrayObjects.length; i++) {
        for (let j = 0; j < arrayObjects[i]['arrayImg'].length; j++) {
            createCSSSelector('.section-work__img' + index, 'background-image: url(../' + arrayObjects[i]['arrayImg'][j] + ' );');
            document.getElementById("workImages").innerHTML +=
                "<a href='#'><div class='section-work__img section-work__img" + index + "'></div></a>";
            index++;
        }
    }
};


let showItemsByAttribute = (arrayObjects, attribute) => {
    let i = 0;
    arrayObjects.forEach((item => {
        if (item.attribute === attribute) {
            item.arrayImg.forEach((img) => {
                createCSSSelector('.section-work__img' + i, 'background-image: url(../' + img + ' );');
                document.getElementById("workImages").innerHTML +=
                    "<a href='#'><div class='section-work__img section-work__img" + i++ + "'></div></a>";
            });
        }
    }));
};

let showIremsFromArray = (array) => {
    let i = 0;
    clearDiv('workImages');
    array.forEach((item) => {
        createCSSSelector('.section-work__img' + i, 'background-image: url(../' + item + ' );');
        document.getElementById("workImages").innerHTML +=
            "<a href='#'><div class='section-work__img section-work__img" + i++ + "'></div></a>";
    });
};

let menuWorkItems = 5;
let btnClickWork = 0;
let maxBtnClickWork = menuWorkItems - 1;
let currentMenu = 0;

let setStyles = (disable, backgroundColor, cursor) => {
    document.getElementById("btnLoadMoreWork").disabled = disable;
    document.getElementById("btnLoadMoreWork").style.backgroundColor = backgroundColor;
    document.getElementById("btnLoadMoreWork").style.cursor = cursor;
};

let readyWork = () => {
    setStyles(true, "#aaecdf", "auto");
    document.getElementById("activeButtonWork0").classList.add("item-link-active-work");
    showAllItems(arrayObjectsSectionWork);
    btnClickWork = 0;
};

document.addEventListener("DOMContentLoaded", readyWork);

let selectWork = (buttonIndex) => {
    clearDiv('workImages');
    resetPerm();
    btnClickWork = 0;
    for (let i = 0; i < menuWorkItems; i++) {
        let active = "activeButtonWork" + i;
        if (i === buttonIndex) {
            document.getElementById(active).classList.add("item-link-active-work");
        } else {
            document.getElementById(active).classList.remove("item-link-active-work");
        }
    }

    switch (buttonIndex) {
        case 1: {
            currentMenu = 1;
            setStyles(false, "#18cfab", "pointer");
            showItemsByAttribute(arrayObjectsSectionWork, attributeArray[0]);
            perm.splice(currentMenu - 1, 1);
            perm.unshift(currentMenu - 1);
            break;
        }
        case 2: {
            currentMenu = 2;
            setStyles(false, "#18cfab", "pointer");
            showItemsByAttribute(arrayObjectsSectionWork, attributeArray[1]);
            perm.splice(currentMenu - 1, 1);
            perm.unshift(currentMenu - 1);
            break;
        }
        case 3: {
            currentMenu = 3;
            setStyles(false, "#18cfab", "pointer");
            showItemsByAttribute(arrayObjectsSectionWork, attributeArray[2]);
            perm.splice(currentMenu - 1, 1);
            perm.unshift(currentMenu - 1);

            break;
        }
        case 4: {
            currentMenu = 4;
            setStyles(false, "#18cfab", "pointer");
            showItemsByAttribute(arrayObjectsSectionWork, attributeArray[3]);
            perm.splice(currentMenu - 1, 1);
            perm.unshift(currentMenu - 1);
            break;
        }
        default: {
            setStyles(true, "#aaecdf", "auto");
            currentMenu = 0;
            showAllItems(arrayObjectsSectionWork);
        }
    }
};

let onloadMoreWork = () => {
    btnClickWork++;
    let array = [];
    for (let i = 0; i <= btnClickWork; i++) {
        array = array.concat(arrayObjectsSectionWork[perm[i]].arrayImg);
    }
    showIremsFromArray(array);
    if (btnClickWork === maxBtnClickWork - 1) {
        setStyles(true, "#aaecdf", "auto");
    }
    hideSpinner("spinnerWork");
};

let runWork = () => {
    showSpinner("spinnerWork");
    setTimeout(onloadMoreWork, 1000);
};