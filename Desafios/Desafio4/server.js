/*

PRODUCTOS

const express = require('express')
const router = Router ()

let arrayProductos = [
    {
      id: 1,
      producto: "Zapatilla",
      thumbnail: "foto",
    },
    
    {
      id: 2,
      producto: "Gorra",
      thumbnail: "foto2",
    },
    
    {
      id: 3,
      producto: "Remera",
      thumbnail: "foto3",
    },
    
    {
      id: 4,
      producto: "Buzo",
      thumbnail: "foto4",
    },
    
    {
      id: 5,
      producto: "Pantalon",
      thumbnail: "foto5",
    },
    ]

    router.get (`/`, (req,res)=>{
        res.json(arrayProductos)
    })


    router.post (`/`, (req,res)=>{
       const nuevoProd = req.body
       arrayProductos.push(nuevoProd)
       res.status(200).json({Status: "Producto Agregado"})

    })

    router.delate (`/`, (req,res)=>{

    })

    router.put(`/api/productos/:id`, (req,res)=>{
      const { id } = req.params
      const prod = arrayProductos.find( producto => producto.id === parseInt(id))
      if (prod){        
        res.status(200).json(
          prod)
      }
      else{
        res.status(200).json(
          mensaje = "Producto no encontrado"
        )
      }


    } )

    module.exports = router

*/


/*
const express = require('express')
const productos = require(`./productos`)
const app = express()
const PORT = 8080
const { json } = express
const { Router } = express
const router = Router ()




app.listen(PORT, ()=>console.log(`Se escucha puerto: ${PORT}`))

app.use(json())

app.use('./api/productos', router)
*/
