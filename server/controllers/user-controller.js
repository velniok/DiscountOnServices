const conn = require('../connect-bd')
const bcrypt = require('bcrypt')

class UserController {
    async registration(req, res, next) {
        try {
            const {id, email, password} = req.body
            conn.query('SELECT email FROM users where email = ?', [email], async (err, result) => {
                if (err) {
                    console.log(err)
                }

                if(result.length > 0) {
                    throw new Error('Пользователь уже существует с данной почтой')
                }

                let hashedPassword = await bcrypt.hash(password, 3)
                
                conn.query('INSERT INTO users SET ?', {id: id, email: email, password: hashedPassword}, (err, results) => {
                    if (err) {
                        console.log(err)
                    }
                    
                    console.log(results)
                })
            })
        } catch (e) {
            console.log(e)
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body

            conn.query('SELECT email FROM users where email = ?', [email], (err, result) => {
                if (err) {
                    console.log(err)
                }

                if (result.length === 0) {
                    throw new Error('Пользователя не существует!')
                }

                conn.query('SELECT id FROM users where email = ?', [email], (err, result) => {
                    if (err) {
                        console.log(err)
                    }
    
                    const userId = result[0].id
    
                    conn.query('SELECT password FROM users where id = ?', [userId], async (err, result) => {
                        const isPassEquals = await bcrypt.compare(password, result[0].password)
                        if (isPassEquals) {
                            console.log('Login!')
                        } else {
                            throw new Error('Неверный пароль!')
                        }
                    })
                })
            })
        } catch (e) {
            console.log(e)
        }
    }

    // async logout(req, res, next) {
    //     try {

    //     } catch (e) {
            
    //     }
    // }

    // async refresh(req, res, next) {
    //     try {

    //     } catch (e) {
            
    //     }
    // }

    async getUsers(req, res, next) {
        try {
            conn.query('SELECT * FROM users', (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    res.json(result)
                }
            })
        } catch (e) {
            
        }
    }
}

module.exports = new UserController()