import AddToCart from './AddToCart';
import ImagenProduct from './ImagenProduct';
const Item = ({infoproductos,guardarProducto, producto, productoCart, guardarProductoAlCarro, cantidadProductosCarro, guardarCantidad}) => {
	return (
		<ul className='ul'>
			<div className='listItem'>
			<li className='list'>
				<ImagenProduct producto={producto}/>
				<ul>{producto.productName}</ul>
				<ul>${producto.valor}</ul>
				<AddToCart
					infoproductos={infoproductos}
					guardarProducto={guardarProducto}
					producto={producto}
					productoCart={productoCart}
					guardarProductoAlCarro={guardarProductoAlCarro}
					cantidadProductosCarro={cantidadProductosCarro}
					guardarCantidad = {guardarCantidad}
				/>
			</li>
			</div>
		</ul>
	);
};

export default Item;
