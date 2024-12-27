# Stack Algorithm - Easy Level Questions

### 1. Push and Pop Operations
- **Question**: Implement push and pop operations for a stack using an array. Perform the following operations:  
  **Input**: `Push 10`, `Push 20`, `Push 30`, `Pop`, `Push 40`  
  **Output**: Stack after operations: `[10, 20, 40]`  
- **Hint**:  
  - `Push`: Add an element at the top of the stack.  
  - `Pop`: Remove the topmost element from the stack.  

---

### 2. Stack Overflow and Underflow
- **Question**: Simulate a stack with a maximum size of 3. Perform these operations:  
  **Input**: `Push 5`, `Push 10`, `Push 15`, `Push 20`, `Pop`, `Pop`, `Pop`, `Pop`  
  **Output**:  
    - After `Push 20`: **Stack Overflow**  
    - After fourth `Pop`: **Stack Underflow**  
- **Hint**:  
  - Overflow happens when the stack is full.  
  - Underflow happens when you try to pop from an empty stack.  

---

### 3. Palindrome Check Using Stack
- **Question**: Check if the given string is a palindrome using a stack.  
  **Input**: `"madam"`  
  **Output**: `True` (Palindrome)  
  **Input**: `"hello"`  
  **Output**: `False` (Not a Palindrome)  
- **Hint**: Push each character into the stack, then pop characters to form the reversed string and compare it with the original.  

---

### 4. Convert Infix to Postfix
- **Question**: Convert the given infix expression to postfix using a stack.  
  **Input**: `a + b * c`  
  **Output**: `a b c * +`  
- **Hint**:  
  - Use operator precedence: `*` has higher precedence than `+`.  
  - Push operators into the stack and pop them in order of precedence.  

---

### 5. Reverse a String
- **Question**: Reverse the given string using a stack.  
  **Input**: `"hello"`  
  **Output**: `"olleh"`  
- **Hint**: Push each character of the string into the stack, then pop each character to form the reversed string.  
