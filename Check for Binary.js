/**Check for Binary
SchoolAccuracy: 30.94%Submissions: 95K+Points: 0
Win from a cash prize pool of INR 15,000
Check out Hack-For-Health Hackathon Now!

banner
Given a non-empty sequence of characters str, return true if sequence is Binary, else return false

Example 1:

Input:
str = 101
Output:
1
Explanation:
Since string contains only 0 and 1, output is 1.
Example 2:

Input:
str = 75
Output:
0
Explanation:
Since string contains digits other than 0 and 1, output is 0.
 

Your Task:
Complete the function isBinary() which takes an string str as input parameter and returns 1 if str is binary and returns 0 otherwise.

 

Expected Time Complexity: O(|s|)
Expected Auxiliary Space: O(1)

 

Constraints:
1 <=T<= 50
1 <=Length of str<= 10000

Topic Tags
StringsData Structures */

class Solution{
    isBinary(str){
        //code here
        
         let arr = str.toString().split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== '0' && arr[i] !== '1') {
            return false;
        }
    }
    return true;
    }
}


class Solution{
    isBinary(str){
        //code here
        
         let arr=str.toString().split('')

let res=arr.every(num=>{

   return (num === '1' || num === '0');

} );

return res;
    }
}



class Solution{
    isBinary(str){
        //code here
        
        return /^[01]+$/.test(str) ? 1 : 0;
    }
}
