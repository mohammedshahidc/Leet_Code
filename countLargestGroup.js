var countLargestGroup = function(n) {
    let arr = [];
       let arr2 = []; 
       for (let i = 1; i <= n; i++) {
           arr.push(i);
       }
       let map = {};
       for (let i = 0; i < arr.length; i++) {
           let num = arr[i];
           let str = num.toString().split('');
           let total = str.reduce((acc, crr) => acc + parseInt(crr), 0);
           if (!map[total]) {
               map[total] = [];
           }
           map[total].push(num);
       }
       for (let key in map) {
           arr2.push(map[key]);
       }
       let max = Math.max(...arr2.map(group => group.length));
       let count = arr2.filter(group => group.length === max).length;
   
       return count;
   }
    console.log(countLargestGroup(24));