
class Solution {
    
    PalinArray(arr,n){
        
        for(let i=0;i<arr.length;i++){
            
            let str=String(arr[i]);
            let revstr=str.split('').reverse().join('');
            
            
            if(str===revstr){
                continue;
            }
            else{
            return 0;
            }
        }
        return 1;
       
    }
}