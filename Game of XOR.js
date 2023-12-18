
class Solution {
    gameOfXor(arr, n) {
        //code here
         let result = 0;

    // If the count of elements in the array is even, the XOR will be 0
    if (n % 2 === 0) {
        return result;
    }

    // XOR of elements at odd positions in the array
    for (let i = 0; i < n; i += 2) {
        result ^= arr[i];
    }

    return result;
    }
}