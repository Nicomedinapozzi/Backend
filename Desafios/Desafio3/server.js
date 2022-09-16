const fs = require ('fs')
const express = require('express')
const app = express()
const contenedor = require('./contenedor')
const PORT = 8080

const products = new contenedor('./productos.txt')

app.listen(PORT, ()=>console.log(`Se escucha puerto: ${PORT}`) )


app.get('./products', (req, res) => {
    res.json(products.getAll())
  
  })

  app.get('/random', (req, res) => {
    res.json(products.getRandom())
  
  })