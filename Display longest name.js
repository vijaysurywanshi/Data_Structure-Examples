/**Display longest name
SchoolAccuracy: 66.29%Submissions: 61K+Points: 0
We know this problem is a piece of cake for you. Challenge yourself with GfG Weekly Contest 

banner
Given a list of names, display the longest name.


Example:

Input:
N = 5
names[] = { "Geek", "Geeks", "Geeksfor",
  "GeeksforGeek", "GeeksforGeeks" }

Output:
GeeksforGeeks
 

Your Task:  
You don't need to read input or print anything. Your task is to complete the function longest() which takes the array names[] and its size N as inputs and returns the Longest name in the list of names.


Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)

 

Constraints:
1 <= N <= 100
1 <= |length of name| <= 1000

 

Topic Tags
ArraysStringsData Structures */



class Solution {

    longest(names,n){
        //code here
        
        let longest="";
        
        for(let i=0;i<n;i++){
            
            let str=names[i];
            
            if(str.length>longest.length){
                longest=str;
            }
        }
        
        return longest;
    }
}