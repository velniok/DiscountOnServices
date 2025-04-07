const mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'MySQL-8.2',
    user: 'root',
    password: '',
    database: 'discountsonservices',
})

module.exports = conn