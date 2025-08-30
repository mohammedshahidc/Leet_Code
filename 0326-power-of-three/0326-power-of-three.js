/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
   
   if(n<1){
       return false
   }
   for(let i=0;Math.pow(3,i)<=n;i++){
       if(Math.pow(3,i)==n){
           return true
       }
   }
   return false
    
};