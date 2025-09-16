/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
  let numOfWords=0
   let arr= text.split(' ')
   for(let words of arr){
       let type=true
       for(let ch of brokenLetters){
           if(words.includes(ch)){
              type=false 
           }
       }
       if(type){
           numOfWords++
       }
   }
    return numOfWords
};