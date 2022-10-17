import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Producto from './components/Producto';
import Summary from './components/Summary';
import ShoppingCart from './components/ShoppingCart';
const App = () => {
	const [cantidadProductosCarro, guardarCantidad] = useState(0);
	const [couponCode, setCouponCode] = useState(0);
	const [productoCart, guardarProductoAlCarro] = useState([]);
	const [infoproductos, guardarProducto] = useState([
		{
			id: '1u',
			productName: 'Nike Dunk High Retro',
			valor: 120,
			cantidad: 5,
			descripcion: 'Really good Nike shoes',
			imagen:
				'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/608d6f2b-f6eb-4a5f-8535-6f24b081e011/dunk-high-retro-zapatillas-tjf3hZ.png',
		},
		{
			id: '2u',
			productName: 'Nike Zoom Fly 5',
			valor: 150,
			cantidad: 3,
			descripcion: 'good Nike shoes',
			imagen:
				'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cdb4e7b0-7772-41aa-82c0-4306f53050b6/zoom-fly-5-zapatillas-de-running-carretera-6PMLS5.png',
		},
		{
			id: '3u',
			productName: 'Nike Streetgato',
			valor: 180,
			cantidad: 2,
			descripcion: 'Really Nike shoes',
			imagen:
				'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c526742e-8259-44bd-a37e-d27cf4e29194/streetgato-botas-de-futbol-zhWVgz.png',
		},
		{
			id: '4u',
			productName: 'Zoom Freak 4',
			valor: 150,
			cantidad: 3,
			descripcion: 'Really good Nike shoes',
			imagen:
				'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dd30bba7-ae65-4fc3-975c-454f9b8d7ddd/zoom-freak-4-zapatillas-de-baloncesto-8Hdw9M.png',
		},
	]);
	return (
		<div className='container'>
			<div className='app-wrapper'>
				<div>
					<Header cantidadProductosCarro={cantidadProductosCarro} />
				</div>
				<div>
					<Producto
						infoproductos={infoproductos}
						guardarProducto={guardarProducto}
						productoCart={productoCart}
						guardarProductoAlCarro={guardarProductoAlCarro}
						cantidadProductosCarro={cantidadProductosCarro}
						guardarCantidad={guardarCantidad}
					/>
				</div>
				<div>
					<ShoppingCart
						productoCart={productoCart}
						guardarProductoAlCarro={guardarProductoAlCarro}
					/>
					<Summary
						couponCode={couponCode}
						setCouponCode={setCouponCode}
						productoCart={productoCart}
					/>
				</div>
			</div>
		</div>
	);
};

export default App;
