/**C++ Array (print an element) | Set 2
SchoolAccuracy: 70.56%Submissions: 58K+Points: 0
We know this problem is a piece of cake for you. Challenge yourself with GfG Weekly Contest 

banner
Given an array A[] of N integers and an index Key. Your task is to return the element present at index key in the array.

 

Example 1:

Input:
5 2
10 20 30 40 50
Output:
30
 

Example 2:

Input:
7 4
10 20 30 40 50 60 70
Output:
50
 

Your Task:  
You don't need to read input or print anything. Your task is to complete the function findElementAtIndex() which takes the array A[], its size N and an integer Key as inputs and returns the element present at index Key.


Expected Time Complexity: O(1)
Expected Auxiliary Space: O(1)

 

Constraints:
1 ≤ N ≤ 100
0 ≤ Key ≤ N - 1
1 ≤ A[i] ≤ 100

Topic Tags
ArraysCPPData Structures */

class Solution
{
    //Function to find the element at given index.
    findElementAtIndex(arr, n, key)
    {
        //your code here
        return arr[key];
    }
}