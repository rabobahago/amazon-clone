import './Checkout.css'
const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div className="checkout__title">
          <h2>Your Shopping Basket</h2>
          {/* BasketItem */}
        </div>
      </div>
      <div className="checkout__right">
        <h2>Subtotal component will go here</h2>
      </div>
    </div>
  )
}
export default Checkout
