const ShoppingCart = ({ productoCart, guardarProductoAlCarro }) => {
	return (
		<>
			<div className='linea'></div>
			<div className='header'>
				<h2>Shopping Cart</h2>
			</div>
			<div className='CarritoPadre'>
				{productoCart.map(productoCart => (
					<div key={productoCart.id} className='listItem'>
						<li className='list'>
							<img className='img' src={productoCart.imagen}></img>
							<div>{productoCart.productName}</div>
							<div>${productoCart.valor}</div>
							<div>{productoCart.cantidad}</div>
						</li>
					</div>
				))}
			</div>
		</>
	);
};

export default ShoppingCart;
