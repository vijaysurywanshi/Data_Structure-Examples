/* //Perfect Arrays
SchoolAccuracy: 43.54%Submissions: 52K+Points: 0
Fast-Track your resumes to top companies and get the job you deserve! Register for hiring challenge exclusively for working professionals 

banner
Given an array of size N and you have to tell whether the array is perfect or not. An array is said to be perfect if its reverse array matches the original array. If the array is perfect then return True else return False.

Example 1:

Input : Arr[] = {1, 2, 3, 2, 1}
Output : PERFECT
Explanation:
Here we can see we have [1, 2, 3, 2, 1] 
if we reverse it we can find [1, 2, 3, 2, 1]
which is the same as before.
So, the answer is PERFECT.

Example 2:

Input : Arr[] = {1, 2, 3, 4, 5}
Output : NOT PERFECT

User Task:
The task is to complete the function IsPerfect(), which takes an array (a), size of the array (n), and returns the boolean value true if it is Perfect else false. The driver will print itself "PERFECT" or "NOT PERFECT" accordingly.

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(1).

Constraints:
1 ≤ N ≤ 2 * 105
1 ≤ ai ≤ 103 */

class Solution{
    IsPerfect(arr,n){
         let second = [];
  let count = 0;
  for (let j=n - 1; j>=0; j--) {
    second.push(arr[j]);
  }
  for (let i=0; i<n; i++) {
    if (arr[i] === second[i]) {
      count++;
    }
  }
  if (count === n) {
    return true;
  } else {
    return false;
  }
    }
}