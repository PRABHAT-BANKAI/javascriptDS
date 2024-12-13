# Array Questions with Hints

## 1. **Prefix Sum Array**
**Question:**  
Given an array `arr = [2, 4, 6, 8, 10]`, calculate its prefix sum.  
**Hint:**  
- A prefix sum array is calculated by adding the current element to the sum of all previous elements.  
- Example: For `arr[1]`, the prefix sum is `arr[0] + arr[1]`.  

Expected result: `[2, 6, 12, 20, 30]`.

---

## 2. **Finding Duplicate Elements**
**Question:**  
In the array `arr = [5, 3, 8, 5, 1, 3, 7]`, find and print all the duplicate elements.  

**Hint:**  
- Use an additional data structure like a hash table or a set to keep track of already seen elements.  
- Iterate through the array, and check if an element appears more than once.  

---

## 3. **Array Element Swap**
**Question:**  
Given the array `arr = [10, 20, 30, 40, 50]`, swap the first and last elements and print the updated array.  
**Hint:**  
- Access the first element with `arr[0]` and the last element with `arr[-1]` (or `arr[length - 1]`).  
- Perform the swap using a temporary variable or directly if allowed.  

---

## 4. **Second Largest Element**
**Question:**  
Find the second largest element in the array `arr = [25, 15, 35, 45, 10]` without using built-in sorting functions.  
**Hint:**  
- Traverse the array once to find the largest element.  
- Traverse again to find the second largest by ignoring the largest.  

---

## 5. **Count Frequencies**
**Question:**  
In the array `arr = [2, 3, 2, 4, 5, 3, 2]`, count the frequency of each unique element and display it as output.  
For example: `2 -> 3 times`, `3 -> 2 times`.  
**Hint:**  
- Use a dictionary (or hash map) where the key is the array element, and the value is its count.  
- Traverse the array and update the count for each element in the dictionary.
