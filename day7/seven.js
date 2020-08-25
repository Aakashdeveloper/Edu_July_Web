RegExp
^$

var a = "hi"
a.match("^[a-z]$")
null

var a = "h"
a.match("^[a-z]$")
["h", index: 0, input: "h", groups: undefined]

var a = "hi"
a.match("^[a-z]{2}$")
var a = "hi"
a.match("^[a-z]{2,8}$")

var a = "hi"
a.match("^([a-z]+)$")

var a = "hi"
a.match("^([a-zA-Z]+)$")


var a = "877887"
a.match("^([0-9]{10})$")


var email = "a@a.com"
email.match("^([$a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")
(4) ["a@a.com", "a", "a", "com", index: 0, input: "a@a.com", groups: undefined]
var email = "@a.com"
email.match("^([$a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")
null
var email = "a@.com"
email.match("^([$a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")
null