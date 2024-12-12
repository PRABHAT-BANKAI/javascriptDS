# Array Operations and Linear Search Questions

## Question 1: Insertion
**Problem**: Insert the value `50` at index `2` in the array `[10, 20, 30, 40]`.

**Input**:
```javascript
let arr = [10, 20, 30, 40];
let value = 50;
let index = 2;
```

**Output**:
```javascript
[10, 20, 50, 30, 40]
```

**Hint**: Use `splice(index, 0, value)`.

---

## Question 2: Deletion
**Problem**: Delete the element at index `1` from the array `[5, 15, 25, 35]`.

**Input**:
```javascript
let arr = [5, 15, 25, 35];
let index = 1;
```

**Output**:
```javascript
[5, 25, 35]
```

**Hint**: Use `splice(index, 1)`.

---

## Question 3: Updating
**Problem**: Update the element at index `3` in `[100, 200, 300, 400]` to `450`.

**Input**:
```javascript
let arr = [100, 200, 300, 400];
let index = 3;
let newValue = 450;
```

**Output**:
```javascript
[100, 200, 300, 450]
```

**Hint**: Assign directly using `arr[index] = newValue`.

---

## Question 4: Linear Search
**Problem**: Find the index of the number `15` in `[5, 10, 15, 20, 25]`.

**Input**:
```javascript
let arr = [5, 10, 15, 20, 25];
let target = 15;
```

**Output**:
```javascript
2
```

**Hint**: Loop through the array and check `if (arr[i] === target)`.

---

## Question 5: Modify Elements
**Problem**: Add `5` to every element in `[10, 20, 30]`.

**Input**:
```javascript
let arr = [10, 20, 30];
let addValue = 5;
```

**Output**:
```javascript
[15, 25, 35]
```

**Hint**: Use a loop and modify each element: `arr[i] = arr[i] + addValue`.

---

## Question 6: Concatenate Arrays
**Problem**: Combine `[1, 2, 3]` and `[4, 5, 6]` into a single array.

**Input**:
```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
```

**Output**:
```javascript
[1, 2, 3, 4, 5, 6]
```

**Hint**: Use `concat()` or spread operator `[...arr1, ...arr2]`.

---

## Question 7: Check Existence
**Problem**: Check if `50` exists in `[10, 20, 30, 40, 50]`.

**Input**:
```javascript
let arr = [10, 20, 30, 40, 50];
let target = 50;
```

**Output**:
```javascript
true
```

**Hint**: Use a loop or `arr.includes(target)`.

---

## Question 8: Count Elements
**Problem**: Count how many times `10` appears in `[10, 20, 10, 30, 10]`.

**Input**:
```javascript
let arr = [10, 20, 10, 30, 10];
let target = 10;
```

**Output**:
```javascript
3
```

**Hint**: Loop through the array and maintain a counter.

---

## Question 9: Reverse an Array
**Problem**: Reverse the array `[1, 2, 3, 4]`.

**Input**:
```javascript
let arr = [1, 2, 3, 4];
```

**Output**:
```javascript
[4, 3, 2, 1]
```

**Hint**: Use `.reverse()` or manually swap elements using a loop.

---

## Question 10: Find Maximum
**Problem**: Find the largest number in `[12, 45, 67, 23, 89]`.

**Input**:
```javascript
let arr = [12, 45, 67, 23, 89];
```

**Output**:
```javascript
89
```

**Hint**: Initialize a variable `max` with the first element and update it as you traverse the array.
