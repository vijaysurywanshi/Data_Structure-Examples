/**Check String
SchoolAccuracy: 42.82%Submissions: 29K+Points: 0
Win from a cash prize pool of INR 15,000
Check out Hack-For-Health Hackathon Now!

banner
Given a string, check if all its characters are the same or not.

Example 1:

Input:
s = "geeks"
Output: False
Explanation: The string contains different
character 'g', 'e', 'k' and 's'.

Example 2:

Input: 
s = "gggg"
Output: True
Explanation: The string contains only one
character 'g'.

Your Task:
You don't need to read input or print anything. Your task is to complete the function check() which takes a string as input and returns True if all the characters in the string are the same. Else, it returns False.


Expected Time Complexity: O(|S|).
Expected Auxiliary Space: O(1).


Constraints:
1 <= |S| <= 104 */

class Solution {
    check(s){
       //code here
       let str=s.toString();
       str=str.split("");
       let ch=str[0];
       for(let i=0;i<str.length;i++){
           if(str[i]!==ch){
               return false
           }
       }
       return true
    }
}

/**1. Using Array every() method:
javascript
Copy code
function check(s) {
    const str = s.toString();
    return str.split('').every(char => char === str[0]);
}
2. Using Regular Expression:
javascript
Copy code
function check(s) {
    const str = s.toString();
    return /^([a-zA-Z0-9])\1*$/.test(str);
}
3. Using Set:
javascript
Copy code
function check(s) {
    const str = s.toString();
    return new Set(str).size === 1;
}
4. Using Array.every() with charAt():
javascript
Copy code
function check(s) {
    const str = s.toString();
    return [...str].every((char, index) => char === str.charAt(0));
}
5. Using Array.reduce():
javascript
Copy code
function check(s) {
    const str = s.toString();
    return [...str].reduce((acc, char) => acc && char === str.charAt(0), true);
}
6. Using Array.filter():
javascript
Copy code
function check(s) {
    const str = s.toString();
    return str.split('').filter(char => char !== str[0]).length === 0;
}
7. Using Array.every() with slice():
javascript
Copy code
function check(s) {
    const str = s.toString();
    return [...str].every(char => char === str.slice(0, 1));
}
8. Using String.repeat() and String.includes():
javascript
Copy code
function check(s) {
    const str = s.toString();
    return str === str[0].repeat(str.length);
}
9. Using a for...of loop:
javascript
Copy code
function check(s) {
    const str = s.toString();
    const firstChar = str[0];
    for (const char of str) {
        if (char !== firstChar) {
            return false;
        }
    }
    return true;
}
10. Using Array.every() with indexOf():
javascript
Copy code
function check(s) {
    const str = s.toString();
    return [...str].every(char => char === str.charAt(0)) 
}
Each of these functions follows a different approach to achieve the same result: checking if all characters in a string are the same.
 They utilize various JavaScript methods and techniques available for string manipulation and comparison. */