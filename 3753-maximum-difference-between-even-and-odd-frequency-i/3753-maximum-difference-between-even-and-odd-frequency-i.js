/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
     let obj={}
    for(let i=0;i<s.length;i++){
        obj[s[i]]=(obj[s[i]]||0)+1
    }
    
   let oddfreq=[]
   let evenfreq=[]
   
    for(let key in obj){
        if(obj[key]%2==0){
          evenfreq.push(obj[key])  
        }else{
          oddfreq.push(obj[key])  
        }
    }
    let max = Math.max(...oddfreq);
    let min = Math.min(...evenfreq);

    return max-min
};