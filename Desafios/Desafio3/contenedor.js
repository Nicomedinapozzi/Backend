const fs = require('fs')

class Producto {
  constructor(articulo, precio){
    this.articulo = articulo
    this.precio = precio
  }
}

module.exports = class contenedor {
  constructor(nombre){
    this.nombre = nombre

    try {
      this.productos = fs.readFileSync(this.nombre, 'utf-8')
      this.productos = JSON.parse(this.productos)
    } catch (error) {
      this.productos = []
    }
  }


  getAll(){
    return this.productos
  }

  getById(id){
    try {
      let producto = { id }
      for(let i = 0; i < this.productos.length; i++){
	if(producto.id == this.productos[i].id){
	  producto = this.productos[i]
	}
      }

      return producto
    } catch (error) {
      return error
    }
  }

  getRandom(){
    return this.getById(Math.floor(Math.random() * this.productos.length) + 1)
  }

  save(articulo, precio){
    try {
      let nuevoProducto = new Producto (articulo, precio)
      if (this.productos.length == 0){
	nuevoProducto.id = 1
      } else {
	nuevoProducto.id = this.productos[this.productos.length - 1].id + 1
      }
      this.productos.push(nuevoProducto)
      fs.promises.writeFile(this.name, JSON.stringify(this.productos, null, '\t'))
	.then(() => console.log('Producto guardado!'))
	.catch(e => console.log(e))

    } catch(error) {
      console.log(error)
    }
  }

  delete(){

    fs.truncateSync(this.nombre, 0, () => console.log('Contenido Borrado'))
  }

  deleteById(id){
    try {
      for(let i = 0; i < this.productos.length; i++){
	if(id == this.productos[i].id){
	  this.productos.splice(id - 1, 1)
	  
	     }

     }
    
      fs.promises.writeFile(this.nombre, JSON.stringify(this.productos, null, '\t'))
	.then((e) => console.log(`El producto con ID ${id} ha sido eliminado`))
	.catch(e => console.log(`Error ${e}`))

    } catch (error) {
      return 'Error! ID no existe o ya fue eliminado'
    }
  }

}
