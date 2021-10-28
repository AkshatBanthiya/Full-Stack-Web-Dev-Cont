const express = require('express')
 const PORT = 3000
 const app = express()
 const PORT = 3000

 app.use(express.json())

 const token = "TOP_SECRET"
 let products = [{ name: 'iPhone12 Case', price: '999' }, { name: 'iPhone13 Case', price: '1199' }, { name: 'iPhone13 Pro Case', price: '1499' }]


 // Middlewares
 const validator = (req, res, next) => {
     const { name, price } = req.body

 const isAdmin = (req, res, next) => {
     if (req.headers.admin === 'true') next()
     else res.send("UNAUTHORISED")
     if (!name || !price) res.json({ error: "Validation failed" })
     else next()
 }

 const isAuthorised = (req, res, next) => {
     if (req.headers.authorisation === token) next()
     else res.json({ error: "UNAUTHORISED" })
 }

 // -----------PUBLIC routes---------------

 app.get('/public', (req, res) => {
     console.log(req.headers)
     res.send(`I'm a public route`)
 app.get('/products', (req, res) => {
     res.json({ products })
 })

 app.get('/private', isAdmin, (req, res) => {
     res.send(`I'm a admin route`)
 // -----------PRIVATE routes---------------

 app.post('/products/add', isAuthorised, validator, (req, res) => {
     const { name, price } = req.body

     products.push({
         name,
         price,
     })
     res.send({ products })
 })

 // -----------AUTH ROUTES
 app.post('/auth', (req, res) => {
     const { email, password } = req.body
     if (email === 'admin@mail.com' && password === 'password') {
         res.send({ token })
     } else {
         res.send({ message: "UNAUTHORISED" })
     }
 })


 app.listen(PORT, () => {
     console.log(`Server running at port ${PORT}`)
 })
     console.log(`Server started at port ${PORT}`)
 }) 