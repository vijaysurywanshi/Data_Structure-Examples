/**Count of camel case characters
SchoolAccuracy: 71.16%Submissions: 26K+Points: 0
Win from a cash prize pool of INR 15,000
Check out Hack-For-Health Hackathon Now!

banner
Given a string. Count the number of Camel Case characters in it.

Example 1:

Input:
S = "ckjkUUYII"
Output: 5
Explanation: Camel Case characters present:
U, U, Y, I and I.

â€‹Example 2:

Input: 
S = "abcd"
Output: 0
Explanation: No Camel Case character
present.

Your Task:
You don't need to read input or print anything. Your task is to complete the function countCamelCase() which takes the string S as input and returns the count of the camel case characters in the string.


Expected Time Complexity: O(|S|).
Expected Auxiliary Space: O(1).


Constraints:
1<=|S|<=105 */

class Solution{
    countCamelCase(s){
        //code here
const removedLowercase = s.replace(/[a-z]+/g, '');
  return removedLowercase.length;  
  }
}



/**Method 1: Using Array Filter and RegExp Test
javascript
Copy code
function removeLowercaseAndGetLength(s) {
  const filtered = Array.from(s).filter(char => !/[a-z]/.test(char));
  return filtered.length;
}
Method 2: Using Array Reduce and String CharCodeAt
javascript
Copy code
function removeLowercaseAndGetLength(s) {
  const filtered = Array.from(s).reduce((acc, char) => {
    if (char.charCodeAt(0) < 65 || char.charCodeAt(0) > 90) {
      acc.push(char);
    }
    return acc;
  }, []);
  return filtered.length;
}
Method 3: Using Split, Filter, and RegExp Test
javascript
Copy code
function removeLowercaseAndGetLength(s) {
  const filtered = s.split('').filter(char => !/[a-z]/.test(char));
  return filtered.length;
}
Method 4: Using Replace and Length Calculation
javascript
Copy code
function removeLowercaseAndGetLength(s) {
  const removedLowercase = s.replace(/[a-z]+/g, '');
  return removedLowercase.length;
}
Method 5: Using For Loop and Character Check
javascript
Copy code
function removeLowercaseAndGetLength(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i].toLowerCase() !== s[i]) {
      count++;
    }
  }
  return count;
}
All these methods function similarly to remove lowercase characters from a string and determine the length of the resulting string without lowercase characters. */