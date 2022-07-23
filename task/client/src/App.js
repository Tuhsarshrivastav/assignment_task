import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartScreen from "./pages/CartScreen";
import ProductListingPage from "./pages/ProductListingPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/cart" component={CartScreen} exact />
        <Route path="/" component={ProductListingPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
