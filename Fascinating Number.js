/*Given a number N. Your task is to check whether it is fascinating or not.
Fascinating Number: When a number(should contain 3 digits or more) is multiplied by 2 and 3, and when both these products are concatenated with the original number, then it results in all digits from 1 to 9 present exactly once.

Example 1:

Input: 
N = 192
Output: Fascinating
Explanation: After multiplication with 2
and 3, and concatenating with original
number, number will become 192384576 
which contains all digits from 1 to 9.
Example 2:

Input: 
N = 853
Output: Not Fascinating
Explanation: It's not a fascinating
number.
Your Task:  
You don't need to read input or print anything. Your task is to complete the function fascinating() which takes the integer n parameters and returns boolean(True or False) denoting the answer.

Expected Time Complexity: O(1)
Expected Auxiliary Space: O(1)

Constraints:
100 <= N <= 2*109*/



class Solution {
    fascinating(N) {
     let numStr = "" + N;
     let concatenated = numStr + (N * 2) + (N * 3);
     let digits = Array(10).fill(0);
 
     for (let i = 0; i < concatenated.length; i++) {
         let digit = parseInt(concatenated[i]);
         if (digit === 0) {
             return false;
         }
         digits[digit]++;
     }
 
     // Check if all digits from 1 to 9 are present exactly once
     for (let i = 1; i <= 9; i++) {
         if (digits[i] !== 1) {
             return false;
         }
     }
 
     return concatenated.length === 9;
 }
 }