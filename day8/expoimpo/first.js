var dbObj = {}

dbObj.users = [
    {
        name:'John',
        role:'Admin'
    },
    {
        name:'Bhumika',
        role:'Super Admin'
    }
]


dbObj.dbQuery = {
    find:(table) => {return `SELECT * from ${table}`},
    insert:(table,data) => {return `Insert into ${table} name,city VALUES(${data.name},${data.city})`}
}


//module.exports = dbObj
export default dbObj;
