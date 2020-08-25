Map>>>>
Help to iterate over array and help to play the logic
It always return the same length of array as input array

filter>
filter help to filter out the value 
it only return those value for which output is true
output array may or may not be of same length


var a = [1,2,3,4]
a.map((data) => {return data})
[1,2,3,4]

a.map((data) => {return data*2})
[2, 4, 6, 8]


var b = [23,45,34,29,54,37,47,21]
b.filter((data) =>  {return data>30})
[45, 34, 54, 37, 47]
b.map((data) =>  {return data>30})
(8) [false, true, true, false, true, true, true, false]

var a = [0,1,2,3]
a.map((data) => {return data*2})
[0, 2, 4, 6]
a.filter((data) => {return data*2})
 [1, 2, 3]