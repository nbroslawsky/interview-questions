# Algorithms

### Q: How do you identify if a x by y matrix is within a m by n matrix
A:

### Q: Given an array, find all pairs in the array that add up to number N. eg findSum([8, 3, 1, 2, 7, 4, 5], 9); should return (1, 8) (2, 7) and (4, 5).

A. Sort the array, have two points starting at each end, increment or decrement the pointers based on sum comparison to the number N.

### Q: Given an array, find all triples in the array that add up to number N. eg findSum([8, 3, 1, 2, 7, 4, 5], 9); should return (1, 3, 5).

A. Same as above but include a middle pointer that searches with binary search.

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
