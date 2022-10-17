const AddToCart = ({infoproductos,guardarProducto, producto, productoCart, guardarProductoAlCarro, cantidadProductosCarro, guardarCantidad}) => {
  const handlerSubmit = (e) =>{
    e.preventDefault();
  
    const newProductoCarro = {
      id:producto.id,productName:producto.productName, valor: producto.valor, imagen: producto.imagen, cantidad : 1
    };
    guardarProductoAlCarro([...productoCart, newProductoCarro]);
    guardarCantidad(cantidadProductosCarro+1);
    producto.cantidad = producto.cantidad - 1;
    if (producto.cantidad ===0) {
      handlerBorrar(producto.id);
    }
  };
  
  const handlerBorrar = (id) =>{
    const newProducts = infoproductos.filter((user) => user.id !== id);
    guardarProducto(newProducts);
  };

  return (
    <form onSubmit={handlerSubmit}>
      <button type="submit">Add To Cart</button>
    </form>
  )
}

export default AddToCart