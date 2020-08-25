/*var a = 10
console.log(a)
*/

var > we can redeclare nad reassign
let > we cannot redeclare but can reassign
const > we cannot redeclare nor reassign

var a = 10
declare
assign

var a  >>>declare
a=10 >>>assign

> var a = 10
undefined
> a
10
> var a = 11
undefined
> a=12
12
>
var a = "Angular"
var a = "React"


> let b = 10
undefined
> b
10
> let b = 11
Uncaught SyntaxError: Identifier 'b' has already been declared
> b=11
11
>

> const c = 10
undefined
> c
10
>
> const c = 11
Uncaught SyntaxError: Identifier 'c' has already been declared
> c=11
Uncaught TypeError: Assignment to constant variable.
>