import './Product.css'
const Product = () => {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__info">
          <small>$</small>
          <strong>12.99</strong>
        </p>
        <div className="product__rating">
          <p>Star Here</p>
        </div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51Zymeq7UnL."
        alt=""
      />
    </div>
  )
}
export default Product
