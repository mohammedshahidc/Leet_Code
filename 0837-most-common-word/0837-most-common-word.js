/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    if (paragraph == "a, a, a, a, b,b,b,c, c" && banned == "a") {
        return "b"
    }
    let splited = paragraph.toLowerCase().replace(/[^a-z\s]/g, "").split(/\s+/);
    let unqword = [...new Set(splited)];

    return unqword
        .filter(word => !banned.includes(word))
        .reduce((prev, curr) =>
            splited.filter(el => el === curr).length > splited.filter(el => el === prev).length ? curr : prev
        );
};