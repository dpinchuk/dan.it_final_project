let createCSSSelector = (selector, style) => {
    if (!document.styleSheets) return;
    if (document.getElementsByTagName('head').length === 0) return;

    let styleSheet, mediaType;

    if (document.styleSheets.length > 0) {
        for (let i = 0, l = document.styleSheets.length; i < l; i++) {
            if (document.styleSheets[i].disabled)
                continue;
            let media = document.styleSheets[i].media;
            mediaType = typeof media;

            if (mediaType === 'string') {
                if (media === '' || (media.indexOf('screen') !== -1)) {
                    styleSheet = document.styleSheets[i];
                }
            }
            else if (mediaType === 'object') {
                if (media.mediaText === '' || (media.mediaText.indexOf('screen') !== -1)) {
                    styleSheet = document.styleSheets[i];
                }
            }

            if (typeof styleSheet !== 'undefined')
                break;
        }
    }

    if (typeof styleSheet === 'undefined') {
        let styleSheetElement = document.createElement('style');
        styleSheetElement.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(styleSheetElement);

        for (i = 0; i < document.styleSheets.length; i++) {
            if (document.styleSheets[i].disabled) {
                continue;
            }
            styleSheet = document.styleSheets[i];
        }

        mediaType = typeof styleSheet.media;
    }

    if (mediaType === 'string') {
        for (let i = 0, l = styleSheet.rules.length; i < l; i++) {
            if (styleSheet.rules[i].selectorText && styleSheet.rules[i].selectorText.toLowerCase() === selector.toLowerCase()) {
                styleSheet.rules[i].style.cssText = style;
                return;
            }
        }
        styleSheet.addRule(selector, style);
    }
    else if (mediaType === 'object') {
        let styleSheetLength = (styleSheet.cssRules) ? styleSheet.cssRules.length : 0;
        for (let i = 0; i < styleSheetLength; i++) {
            if (styleSheet.cssRules[i].selectorText && styleSheet.cssRules[i].selectorText.toLowerCase() === selector.toLowerCase()) {
                styleSheet.cssRules[i].style.cssText = style;
                return;
            }
        }
        styleSheet.insertRule(selector + '{' + style + '}', styleSheetLength);
    }
};

let createClass = (name, rules) => {
    let style = document.createElement('style');
    style.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(style);
    if (!(style.sheet || {}).insertRule)
        (style.styleSheet || style.sheet).addRule(name, rules);
    else
        style.sheet.insertRule(name + "{" + rules + "}", 0);
};

let applyClass = (name, element, doRemove) => {
    if (typeof element.valueOf() === "string") {
        element = document.getElementById(element);
    }
    if (!element) return;
    if (doRemove) {
        element.className = element.className.replace(new RegExp("\\b" + name + "\\b", "g"), "");
    } else {
        element.className = element.className + " " + name;
    }
};

let clearDiv = (selector) => {
    document.getElementById(selector).innerHTML = "";
};