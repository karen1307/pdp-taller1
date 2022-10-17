import Item from './Item';
const Producto = ({ infoproductos,guardarProducto, productoCart, guardarProductoAlCarro,cantidadProductosCarro, guardarCantidad}) => {
	return (
		<div className='listaPadre'>
			{infoproductos.map(producto => (
				<Item
					key={producto.id}
					producto={producto}
					infoproductos={infoproductos}
					guardarProducto={guardarProducto}
					productoCart={productoCart}
					guardarProductoAlCarro={guardarProductoAlCarro}
					cantidadProductosCarro={cantidadProductosCarro}
					guardarCantidad = {guardarCantidad}
				/>
			))}
		</div>
	);
};

export default Producto;
