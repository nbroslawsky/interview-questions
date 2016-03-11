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

### Q: Say you had a system where you had a trillion+ test scores (integers from 0-1000) distributed over x nodes, and you could create whatever apis you wanted on those nodes. You need to write the “combiner” code that interfaces with those nodes and aggregates the responses to answer the question: what is the median value of those test scores?
