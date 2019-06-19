/* 1. How many searches
    input: [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
  * value = 8, start = 0, end = input.length
  Binary Search:
    count = 1
      start = 0
      end = input.length = 10
      middle = 11

    count = 2
      start = 0
      end = middle - 1 = 3
      middle = 5

    count = 3
      start = 2
      end = 3
      middle = 6
    
    count = 4
      start = 3
      end = 3
      middle = 8  **the value we are looking for**
  
  * find value = 16, start =0, end = input.length
  count = 1
      start = 0
      end = input.length = 10
      middle = 11

    count = 2
      start = 5
      end = 10
      middle = 15

    count = 3
      start = 8
      end = 10
      middle = 17

    count = 4
      start = 8
      end = 8
      middle = 15

    count = 5
      start = 9
      end = 8
    
    return - 1
  *It will take 5 iterations to determine that the value is not in the array
*/
