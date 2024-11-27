class Solution {
    /**
    * @param number[] prices

    * @returns number
    */
    maximumProfit(prices) {
        // code here
        
        let profit = 0
        
        for(let i = 1; i < prices.length; i++){
            
            if(prices[i] > prices[i-1]){
                profit = profit + prices[i] - prices[i-1]
            }
        }
        
        return profit
    }
}