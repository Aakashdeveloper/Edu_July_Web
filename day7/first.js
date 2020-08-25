array is a collection of homogenious or hetrogenious data type
var city = ['London',"Newyork",'Delhi']
var marks = [34,56,45,37]
var pass = [false,true,true,false]

var data = ['a',4,4,true,'r','r',4,3,false,true]

>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<

var city= ["London","Delhi","Paris","Amsterdam"]
undefined
typeof(city)
"object"
city.length
4
city[0]
"London"
city[2]
"Paris"
city[4]
undefined
city[city.length-1]
"Amsterdam"
var city= ["London","Delhi","Paris","Amsterdam"]
undefined
city.push('venice')
5
city
(5) ["London", "Delhi", "Paris", "Amsterdam", "venice"]
city.push('nice')
6
city
(6) ["London", "Delhi", "Paris", "Amsterdam", "venice", "nice"]
city.pop()
"nice"
city
(5) ["London", "Delhi", "Paris", "Amsterdam", "venice"]
city.pop(2)
"venice"
city.pop(100000)
"Amsterdam"

var city = ["delhi", "mumbai", "amsterdam", "paris", "venice"];

undefined
city.shift()
"delhi"
city.unshift("Pune")
5
city
(5) ["Pune", "mumbai", "amsterdam", "paris", "venice"]

>push always add in the end 
>pop always remove from the end 
>shift always remove from the begining
>unshift always add in the begining

var city = ["delhi", "mumbai", "amsterdam", "paris", "venice"];
undefined
city.slice(1)
(4) ["mumbai", "amsterdam", "paris", "venice"]
city
(5) ["delhi", "mumbai", "amsterdam", "paris", "venice"]
city.slice(2,5)
(3) ["amsterdam", "paris", "venice"]

var city = ["delhi", "mumbai", "amsterdam", "paris", "venice"];
undefined
city.splice(2,0,'Dubai','Hongkong')
[]
city
(7) ["delhi", "mumbai", "Dubai", "Hongkong", "amsterdam", "paris", "venice"]
city.splice(3,2)
(2) ["Hongkong", "amsterdam"]
city
(5) ["delhi", "mumbai", "Dubai", "paris", "venice"]
city.splice(1,2,'Innsburg','Pune')
(2) ["mumbai", "Dubai"]
city
(5) ["delhi", "Innsburg", "Pune", "paris", "venice"]

city.splice(start,deletecount,values)

city.indexOf('paris')
3
city.indexOf('delhi')
0
city.indexOf('pune')
-1
city.indexOf('milan')
-1

/////////
var a = ['a','b',1,2]
var b = [3,4,'c','d',5]
undefined
a+b
"a,b,1,23,4,c,d,5"
a.concat(b)
(9) ["a", "b", 1, 2, 3, 4, "c", "d", 5]
var c = [4,5,6]
undefined
a.concat(b,c)
(12) ["a", "b", 1, 2, 3, 4, "c", "d", 5, 4, 5, 6]
c.concat(a,b)
(12) [4, 5, 6, "a", "b", 1, 2, 3, 4, "c", "d", 5]


var url= "https://learning.edureka.co/my-classroom/complete-web-developer/gettingstarted/courseId/161"
var url= "https://learning.edureka.co/my-classroom/complete-web-developer/gettingstarted/courseId/161"
undefined
url.split('/')
(8) ["https:", "", "learning.edureka.co", "my-classroom", "complete-web-developer", "gettingstarted", "courseId", "161"]
var out = url.split('/')
undefined
out[out.length-1]
"161"


var texts = "Hi i am doing JS"
undefined
texts.split(' ')
(5) ["Hi", "i", "am", "doing", "JS"]


var word = "javascript"
undefined
word.split('')
(10) ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
var a = ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
undefined
a.toString()
"j,a,v,a,s,c,r,i,p,t"
a.toString().replace(/,/g,'')
"javascript"

var myarray = ['a','b','c',1,[2,3,'d',['f','g',10],'h',4],'hi']
undefined
myarray[4]
(6) [2, 3, "d", Array(3), "h", 4]
myarray[4][2]
"d"
myarray[4][3]
(3) ["f", "g", 10]
myarray[4][3][1]
"g"

var myarray = ['a','b','c',1,[2,3,'d',['f','g',10],'h',4],'hi']
undefined
myarray.flat()
(11) ["a", "b", "c", 1, 2, 3, "d", Array(3), "h", 4, "hi"]
myarray.flat(2)
(13) ["a", "b", "c", 1, 2, 3, "d", "f", "g", 10, "h", 4, "hi"]





