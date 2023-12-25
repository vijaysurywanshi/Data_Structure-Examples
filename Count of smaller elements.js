/**Count of smaller elements
SchoolAccuracy: 54.54%Submissions: 86K+Points: 0
We know this problem is a piece of cake for you. Challenge yourself with GfG Weekly Contest 

banner
Given an sorted array A of size N. Find number of elements which are less than or equal to given element X.

 

Example 1:

Input:
N = 6
A[] = {1, 2, 4, 5, 8, 10}
X = 9
Output:
5
 

Example 2:

Input:
N = 7
A[] = {1, 2, 2, 2, 5, 7, 9}
X = 2
Output:
4
 

Your Task:  
You don't need to read input or print anything. Your task is to complete the function countOfElements() which takes the array A[], its size N and an integer X as inputs and returns the number of elements which are less than or equal to given element.

 

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)

 

Constraints:
1 <= N <= 105
1 <= Ai <= 105
0 <= X <= 105

Topic Tags
ArraysData Structures */

class Solution{
    countOfElements(arr,n, x){
        //code here
        
        let count=0;
        
        for(let i=0;i<n;i++){
            if(arr[i]<=x){
                count++;
            }
        }
        return count;
    }
}