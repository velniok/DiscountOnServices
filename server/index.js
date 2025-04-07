require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const router = require('./router/index')
const conn = require('./connect-bd')

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Server started on PORT = ${PORT}`)
})

conn.connect(err => {
    if (err) {
        console.log(err)
    } else {
        console.log('DB connected')
    }
})