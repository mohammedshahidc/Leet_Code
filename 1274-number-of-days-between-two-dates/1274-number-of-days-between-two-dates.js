/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    let d1=new Date(date1)
    let d2=new Date(date2)
    let diffrence=Math.abs(d2-d1)
    let totalDays=Math.ceil(diffrence/(1000*60*60*24))
    return totalDays
};