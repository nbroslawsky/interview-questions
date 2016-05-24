# Algorithms

### Q: How do you identify if a x by y matrix is within a m by n matrix
A:

### Q: Given an array, find all pairs in the array that add up to number N. eg findSum([8, 3, 1, 2, 7, 4, 5], 9); should return (1, 8) (2, 7) and (4, 5).

A. Sort the array, have two points starting at each end, increment or decrement the pointers based on sum comparison to the number N.

### Q: Given an array, find all triples in the array that add up to number N. eg findSum([8, 3, 1, 2, 7, 4, 5], 9); should return (1, 3, 5).

A. Same as above but include a middle pointer that searches with binary search.

### Q: Given an array of integers return an array of the two largest values.

A. Do not sort array, that is nlogn. There is order n solution just by having two values and comparing them and setting them appropriately as you iterate down the array. There is a gotcha in what you might set highestNumber and secondHighest number to when you initialize. Do not initialize them to 0 since values in the array may be negative but you can set them to the first two values of the array providing the array passed in is that large.

### Q: Count the number of 2’s within a range R(0..N).  
```
Example:
R(0..10) = 1 (there’s only one 2)
R(0..23) = 7 (2, 12, 20, 21, 22, 23)
```

### Q: Find out the black pixels and output the co-ords of the black box within the white box
In this example, coords are: (4,2) to (6, 3)
```
var image = [
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,0,0,0,1],
    [1,1,1,1,0,0,0,1],
    [1,1,1,1,1,1,1,1]
];
// 1 = white
// 0 = black
```

### Q: Given an array of names, print them out separated them by appropriate conjunctions 
```
Example:
(['Alice', 'Bob', 'Carlos', 'Diana']) => "Alice, Bob, Carlos and Diana"
```

### Q: Given an n*n matrix return a matrix rotated by 90 degrees clockwise.
```
Example input:

var matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

Example expected output:

var rotatedMatrix = [
    [7,4,1],
    [8,5,2],
    [9,6,3]
];

```


1) implement a function that takes a string with no spaces and breaks it up into (any) valid collection of words. All letters must be used.
Assume you have a helper function "bool isWord(str)" that returns true if the string is a valid single word.
Example input: [goodmorningworld]  output: [good, morning, world]
example input: [anto]  output: [an, to]   note that "ant" isn't part of the solution since "o" is not a word.

2) You have an array of size N containing numbers [1, N-1]. Each number is in there once, except for one, which is in there twice. Find which value has the duplicate. Can do it in O(N) using no extra memory.

3) Implement this behavior:
Example input: "[a[b[cd[ef]g]hi]j]"
Example output: [ aj, bhi, cdg, ef ]  (order not important)

4) implement an LRU cache with get(key) and set(key,val) that run in constant time. when the cache has more than MAX items, drop oldest when adding new entry.

5) (html/js) when rendering a Pinterest board in the browser, how would you handle layout for the infinite staggered grid of pins? Perf concerns?

6) design (and implement interesting parts of) the standard Windows game MineSweeper. this question was by far the most fun interview question I ever had (if not exactly the hardest).

7) Given a list of numbers and a single number, return a subset of the list that sums to the single number.
Example input: [1,2,3,4,5], 9
Example output: [4,5] or [2,3,4]  (either one is fine, don't need both)

8) (js knowledge) what's the difference between document.ready and onload?
9) (js knowledge) say you have a table with 1000x1000 cells and you want to detect clicks on the cells, how to do so efficiently?

10) you are given a list of numbers. in the list, all numbers appear an even number of times, except one, which appears an odd number of times. find the value appearing an odd number of times. it can be done in O(N) with no external data structures.
Example input: [2,3,4,2,3,4,2,3,4,2,3]
Example output: 4

11) Sketch an algorithm for solving a standard Sudoku puzzle.

12) memblock problem: assume you have two low-level memory functions available:
 - readBlock(int blockNum, byte buf[])
 - writeBlock(int blockNum, byte buf[])
where each will read or write an entire block of memory at a time. a block is B bytes. implement the following function:
  - writeBytes( int byteOffset, byte buf[], int numBytes)
(i.e., how do you write aribtrary buffers if you only have block-based read/write available).

13) describe in detail what happens when the browser requests a web page.
  - dns
  - http request headers, status code, etc
  - cache layer (cdn, varnish, etc)
  - server side
  - response headers
  - document parse, tag parse
  - onReady/onLoad
  - ajax
