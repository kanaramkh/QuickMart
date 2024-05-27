
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './Pages/Shop';
import ShopCategory from'./Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
function App() {
  return (
    <div >
      <Navbar/> 
     <BrowserRouter>
        <Routes>
          <Route path ='/'element={<Shop/>}/>
          <Route path ='/Men'element={<ShopCategory category ="Men" />}/>
          <Route path ='/Women'element={<ShopCategory category ="Women" />}/>
          <Route path ='/Kids'element={<ShopCategory category ="Kid" />}/>
          <Route path ='/product'element={<Product />}/>
          <Route path ='/:productId'element={<Product />}/>
          <Route path ='/cart'element={<Cart/>}/>
          <Route path ='/login'element={<LoginSignup/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
