import './Subtotal.css'
import { useStateValue } from './StateProvider'
import CurrencyFormat from 'react-currency-format'
const Subtotal = () => {
  const [{ basket }] = useStateValue()
  const sumTotal = basket.reduce((total, next)=>{
      const nextPrice = next.price;
      return total + nextPrice
  }, 0)
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket?.length}items)
              {'$'}<strong>{sumTotal}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeperator={true}
        prefix={'$'}
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}
export default Subtotal
