1. The bug was the data type that num1 and num2 were stored in. It was storing them as strings instead of numbers, which means that the inputs were concatenated instead of added together as numbers.
2. I would fix it by converting num1 and num2 from strings to ints using Number(). I would also add semicolons on lines 9 and 10.
3. citylots.json
4. part2.js
5. 11.7 mb
6. 66 ms
7. Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36
8. Apache
9. Tue, 26 Jan 2021 22:14:13 GMT
10. application/json
11. fetchData()