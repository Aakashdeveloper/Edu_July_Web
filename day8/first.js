var calc ={
    sum:(a,b) => {return a+b},
    sub:(a,b) => {return a-b}
}

calc.sum(1,2)
3
calc.sub(2,1)
1


var dbQuery = {
    find:(table) => {return `SELECT * from ${table}`},
    insert:(table,data) => {return `Insert into ${table} name,city VALUES(${data.name},${data.city})`}
}

dbQuery.find('emp')
"SELECT * from emp"
dbQuery.insert('student',{name:'John',city:'Delhi'})
"Insert into student name,city VALUES(John,Delhi)"