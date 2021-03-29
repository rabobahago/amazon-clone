import './App.css'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Router path="/checkout">
            <Checkout />
          </Router>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
