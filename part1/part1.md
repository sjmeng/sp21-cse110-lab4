## Part 1a
1. 20
2. ??Undefined, the var declaration is processed but the assignment is not since it's in the if(add) block.
3. 20
4. Error, result can't be accessed outside of the if(add) block.
5. Error, cannot reassign value to const result.
6. Error, cannot reassign value to const result.

## Part 1b
1. Output is 3. There are three entries in the prices array, which means var i is incremented three times.
2. Output is 150. The last item in the prices array, 300, overwrites the previous discountedPrice value and replaces it with 300*(1-0.5) = 150.
3. Output is 150. The discountedPrice is 150, and discountedPrice * 100 rounded and then divided by 100 is 150.
4. The function returns discounted, but nothing is printed since there isn't a console.log
5. Error, we can't print i because the scope of i is only in the for loop based on the use of the let keyword.
6. Error, the use of let to declare discountedPrice narrows the scope to inside the for loop.
7. Output is 150. We can access finalPrice because the declaration and console.log(finalPrice) are in the same block.
8. It will return discounted, which consists of [50,100,150], because discounted is declared outside of the for loop and thus can be returned by the function.
9. Error, let i narrows the scope of i to inside the for loop
10. Output is 3, because the scope of length extends to the block that console.log is in and length = prices.length(which is three because it contains three items).
11. It will return discounted, which contains [50,100,150]. discounted is declared outside the for loop, and the code inside the for loop can add items to discounted because you can modify const arrays in certain ways.
12. 
- (a) student.name
- (b) student["Grad Year"]
- (c) student.greeting()
- (d) student["Favorite Teacher"].name
- (e) student.courseLoad[0];
13.  
- (a) 32. JS interprets the + as concatenating a string '2' to '3'
- (b) 1. The - operator prompts the interpeter to convert '3' to a number to be subtracted from
- (c) 3. null is treated as a zero, and 3 + 0 = 3
- (d) 3null. The interpreter treats null as a string that needs to be concatenated to string '3'
- (e) 4. When an operation involves a number and a boolean, the boolean is converted to a number. True is converted to 1, and 3 + 1 = 4.
- (f) 0. Both false and null are converted to 0.
- (g) 3undefined. undefined is converted to a string and concatenated onto '3'
- (h) NaN. The - operator in this case will try to convert the types so a number is subtracted from a number. The operation 3 - undefined (which is not a number) will result a NaN result, as well.
14. 
- (a) true. The interpreter converts the string to a number when comparing a string and a number.
- (b) false. The interpretor compares the strings alphabetically, and alphabetically char 1 is less than char 2.
- (c) true. The == operator checks for loose equality and performs type coercion, converting the string '2' to a number. 2 == 2, so it's true.
- (d) false. The === operator checks for strict equality; if the things we are comparing don't have the same type AND the same value, it will return false. Since we're comparing a number and a string, it will return false.
- (e) false. true == 1 (but does not === 1)
- (f) true. The Boolean() type cast returns true if the value passed into it is a number that's not zero (among other stipulations). Therefore, Boolean(2) = true === true
15. Like I touched on in 14, the == operator checks for loose equality and performs type coercion, which means you can compare values of different types and still get true as a result. For example, 1 == '1' is true. The === operator checks for strict equality, which means that the values being compared must be the same type and actual value to return true. '1' === 1 is false.
16. Refer to part1b-question16.js
17.  The result is that newArr is returned with the values [2,4,6]. modifyArray runs with the parameters of [1,2,3] and doSomething. The for loop in modifyArray iterates three times because array has three items, where it accesses each index of array and uses callbacks to run the doSomething function on the value held in that index of array. That means the for loop first multiplies 1 by 2 and stores it in newArr, multiplies 2 by 2 and stores it, and finally multiplies 3 by 2 and stores it.
18. Refer to part1b-question18.js
19. 1 4 3 2
    