const fs = require ('fs')
const express = require('express')
const app = express()
const contenedor = require('./contenedor')
const PORT = 8080

const productos = new contenedor('./productos.txt')

app.listen(PORT, ()=>console.log(`Se escucha puerto: ${PORT}`) )


app.get('./productos', (req, res) => {
    res.json(productos.getAll())
  
  })

  app.get('/random', (req, res) => {
    res.json(productos.getRandom())
  
  })