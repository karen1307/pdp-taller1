const Summary = ({
	couponCode,
	setCouponCode,
	productoCart,
}) => {
	const HandleInput = ({ target }) => {
		setCouponCode(target.value);
	};
	const totalPrecioProducto = productoCart
	.reduce( (valor,current)=> valor+current.valor,0)

	return (
		<div>
			<h2 className='header'>Summary</h2>
			<form>
				<p>ENTER COUPON CODE</p>
				<input
					type='number'
					placeholder='Valor cupon'
					value={couponCode}
					onChange={HandleInput}
				/>
			</form>
			<table>
				<tr>
					<td>SUBTOTAL</td>
					<td>${totalPrecioProducto}</td>
				</tr>
				<tr>
					<td>SHIPPING</td>
					<td>FREE</td>
				</tr>
				<tr>
					<td>COUPON</td>
					<td>${couponCode}</td>
				</tr>
				<tr>
					<td>TOTAL</td>
					<td>${totalPrecioProducto - Number(couponCode)}</td>
				</tr>
			</table>
		</div>
	);
};

export default Summary;
