/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
     let space = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
            space++;
        }
    }
    let words = text.trim().split(/\s+/); 
    let result = "";
    if (words.length === 1) {
        result = words[0] + " ".repeat(space);
    } else {
        let gaps = words.length - 1;
        let evenSpace = Math.floor(space / gaps);
        let extraSpace = space % gaps;

        for (let i = 0; i < words.length; i++) {
            result += words[i];
            if (i < gaps) {
                result += " ".repeat(evenSpace);
            }
        }
        result += " ".repeat(extraSpace);
    }

    return result;
};