const AddToCart = ({
	infoproductos,
	guardarProducto,
	producto,
	productoCart,
	guardarProductoAlCarro,
	cantidadProductosCarro,
	guardarCantidad,
}) => {
	let valor = 0;
	const handlerSubmit = e => {
		e.preventDefault();

		handlerProductoCarros(producto.id);
		if (valor === 0) {
			const newProductoCarro = {
				id: producto.id,
				productName: producto.productName,
				valor: producto.valor,
				imagen: producto.imagen,
				cantidad: 1,
			};
			// es la funcions de use state de producto cart
			guardarProductoAlCarro([...productoCart, newProductoCarro]);
			guardarCantidad(cantidadProductosCarro + 1);
			producto.cantidad = producto.cantidad - 1;
		} else {
			productoCart
				// eslint-disable-next-line no-return-assign
				.map(
					productoencarro =>
						(productoencarro.cantidad =
							productoencarro.id === producto.id
								? (productoencarro.cantidad += 1)
								: productoencarro.cantidad)
				);

			guardarCantidad(cantidadProductosCarro + 1);
			producto.cantidad = producto.cantidad - 1;
		}
		if (producto.cantidad === 0) {
			handlerBorrar(producto.id);
		}
	};

	const handlerBorrar = id => {
		const newProducts = infoproductos.filter(user => user.id !== id);
		guardarProducto(newProducts);
	};

	const handlerProductoCarros = id => {
		productoCart
			// eslint-disable-next-line no-return-assign
			.map(productoencarro =>
				productoencarro.id === producto.id ? (valor += 1) : valor
			);
	};
	return (
		<form onSubmit={handlerSubmit}>
			<button type='submit'>Add To Cart</button>
		</form>
	);
};

export default AddToCart;