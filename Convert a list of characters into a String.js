/**Convert a list of characters into a String
SchoolAccuracy: 63.69%Submissions: 24K+Points: 0
Win from a cash prize pool of INR 15,000
Check out Hack-For-Health Hackathon Now!

banner
Given a list of characters, merge all of them into a string.

Example 1:

Input:
N = 13
Char array = g e e k s f o r g e e k s
Output: geeksforgeeks 
Explanation: combined all the characters
to form a single string.

Example 2:

Input:
N = 4
Char array = e e b a
Output: eeba
Explanation: combined all the characters
to form a single string.


Your Task:
You dont need to read input or print anything. Complete the function chartostr() which accepts a char array arr and its size  N  as parameter and returns a string.
 

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(N) */
class Solution{
    chartostr(arr,n){
        //code here
        return arr.join("");
    }
}



/**here are ten different approaches to convert a list of characters into a string:

1. Using Array.prototype.join():
javascript
Copy code
function chartostr(arr, n) {
    return arr.join('');
}
2. Using Array.prototype.reduce():
javascript
Copy code
function chartostr(arr, n) {
    return arr.reduce((acc, char) => acc + char, '');
}
3. Using a for...of loop:
javascript
Copy code
function chartostr(arr, n) {
    let result = '';
    for (const char of arr) {
        result += char;
    }
    return result;
}
4. Using Array.prototype.map() and Array.prototype.join():
javascript
Copy code
function chartostr(arr, n) {
    return arr.map(String).join('');
}
5. Using String.fromCharCode() and Array.prototype.join():
javascript
Copy code
function chartostr(arr, n) {
    return String.fromCharCode(...arr);
}
6. Using Array.prototype.concat() and String.fromCharCode():
javascript
Copy code
function chartostr(arr, n) {
    return String.fromCharCode.apply(null, [].concat(arr));
}
7. Using Array.prototype.reduceRight():
javascript
Copy code
function chartostr(arr, n) {
    return arr.reduceRight((acc, char) => char + acc, '');
}
8. Using Array.prototype.flat() and Array.prototype.join() (for nested arrays):
javascript
Copy code
function chartostr(arr, n) {
    return arr.flat().join('');
}
9. Using Array.from() and Array.prototype.join():
javascript
Copy code
function chartostr(arr, n) {
    return Array.from(arr).join('');
}
10. Using recursion:
javascript
Copy code
function chartostr(arr, n) {
    if (n === 0) return '';
    return arr[n - 1] + chartostr(arr, n - 1);
} */