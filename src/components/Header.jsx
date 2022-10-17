const Header = ({cantidadProductosCarro}) => {
  return (
    <div className='containerHeader'>
        <h1 className='header'>Taller 1</h1>
        <h3 className='header'>{cantidadProductosCarro} Productos</h3>
    </div>
  )
}

export default Header