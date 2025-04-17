var maxProfit = function(prices) {
    
    let minPrice=Infinity
      let maxPrice=0
      for(let i=0;i<prices.length;i++){
          if(minPrice>prices[i]){
              minPrice=prices[i]
          }else if(prices[i]-minPrice>maxPrice){
              maxPrice=prices[i]-minPrice
          }
      }
      return maxPrice
  };
  console.log(maxProfit([2,4,1]));