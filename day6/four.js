var city = "aMstErdam"
undefined
city.toUpperCase()
"AMSTERDAM"
city.toLowerCase()
"amsterdam"
city.length
9
city[0]
"A"
city[3]
"t"

var city = " Paris  "
undefined
city.length
8
city.trim()
"Paris"


undefined
city.trim()
"Paris ."

var city = "aMstErdam"
undefined
city[0]
"a"
city.charAt(0)
"a"
city.slice(1)
"MstErdam"
city.slice(2)
"stErdam"
city.slice(3)
"tErdam"
city.slice(1,4)
"Mst"

city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"Amsterdam"

var a = "Hi I am doing JavaScript"
var a = "Hi I am doing JavaScript"
undefined
a.replace('JavaScript','JS')
"Hi I am doing JS"
var a = "Hi JavaScript I am doing JavaScript"
undefined
a.replace('JavaScript','JS')
"Hi JS I am doing JavaScript"
a.replace(/JavaScript/g,'JS')
"Hi JS I am doing JS"

var city = " Paris .  "
undefined
city.replace(/ /g,'')
"Paris."