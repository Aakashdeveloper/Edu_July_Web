for
while
do while
for of
map
filter

////////////////////////////////
for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ["delhi", "mumbai", "Dubai", "Hongkong", "amsterdam", "paris", "venice"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}

var city = ["delhi", "mumbai", "Dubai",[1,2,3], "amsterdam", "paris", "venice"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}


for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    }
}

//////while/////
var i =0
while(i<5){
    console.log(i);
    i++
}
0
1
2
3
4


//////while/////
var i =0
do{
    console.log(i);
    i++ 
}
while(i<5);

0
1
2
3
4

/////////////////////////////
var color =["red","green","yellow"]
for(abc of color){
    console.log(abc)
}