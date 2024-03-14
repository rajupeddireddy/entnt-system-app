
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import ProductsManagement from './components/Products/Products';
import NotFound from './components/NotFound';
import OrdersManagement from './components/Orders/Orders';
import DeliveryManagement from './components/Delivery/Delivery';
import Header from './components/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
       <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/products' element={<ProductsManagement/>}/>
        <Route path='/orders' element={<OrdersManagement/>}/>
        <Route path='/delivery' element={<DeliveryManagement/>}/>
        <Route  path='*' element={<NotFound/>}/>
       </Routes>
       <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
