import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import Login from './components/login';
import Car from './components/Car';
import Addresses from './components/Addresses';
import LoginForm from './components/loginForm';
import Signup from './components/signup';
import ProductList from './components/ProductList';
import { Toaster } from 'react-hot-toast';
import ProductView from './components/ProductView';
import UpdateProd from './components/UpdateProd';
import OrderList from './components/OrderList'
import OrderDetail from './components/OrderDetail';
import Dashboard from './components/Dashboard';


function App() {

  

  return (
    <div className="App">
      <Toaster toastOptions={{ duration: 1350 }} />
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/auth' element={ <Login /> }>
            <Route path='login' element={<LoginForm />} />
            <Route path='signup' element={<Signup />} />
          </Route>
          <Route path='/carrito' element={<Car />} />
          <Route path='/pedido' element={<Addresses />} />
          <Route path='/productos' element={<ProductList />} />
          <Route path='/productos/:id' element={ <ProductView /> } />
          <Route path='/productos/update/:id' element={ <UpdateProd /> } />
          <Route path='/pedidos' element={ <OrderList /> } />
          <Route path='/pedidos/:id' element={ <OrderDetail /> } />
          <Route path='/dashboard' element={ <Dashboard/> }/>
          {/* <Route path='/test' element={ <Bar options={options} data={data} /> } /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
