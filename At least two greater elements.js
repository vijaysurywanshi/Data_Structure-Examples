class Solution {
    findElements(arr,n){
       //code here
       let sorted=arr.sort((a,b)=>a-b);
       let result = [];
        for (let i = 0; i < n - 2; i++) {
            result.push(sorted[i]);
        }
        
        return result;
    }
}