/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
      let count = numBottles;
    let empty = numBottles;

    while (empty>=numExchange){

        let carry = Math.floor(empty/numExchange);
        count += carry;
        empty = empty%numExchange + carry;

    }

    return count;
};