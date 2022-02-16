import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/home/header';
import Footer from './components/home/footer';
import Main from './components/home/main';
import Login from './components/auth/login';
import Car from './components/car/Car';
import Addresses from './components/car/Addresses';
import LoginForm from './components/auth/loginForm';
import Signup from './components/auth/signup';
import ProductList from './components/products/ProductList';
import { Toaster } from 'react-hot-toast';
import ProductView from './components/products/ProductView';
import UpdateProd from './components/products/UpdateProd';
import OrderList from './components/orders/OrderList';
import OrderDetail from './components/orders/OrderDetail';
import Dashboard from './components/dashboard/Dashboard';
import DashProduct from './components/dashboard/DashProducts'
import DashUsers from './components/dashboard/DashUsers';
import SaleCompare from './components/dashboard/SaleCompare';
import AccountPage from './components/Account/AccountPage';
import ProductListDash from './components/dashboard/ProductList'

// Comenzando AldaDent 2.0 08/02

function App() {

  return (
    <div className="App">
      <Toaster toastOptions={{ duration: 1350, position: 'bottom-center', style: { background: 'black', color: 'whitesmoke' } }} />
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/auth' element={<Login />}>
            <Route path='login' element={<LoginForm />} />
            <Route path='signup' element={<Signup />} />
          </Route>
          <Route path='/carrito' element={<Car />} />
          <Route path='/pedido' element={<Addresses />} />
          <Route path='/productos' element={<ProductList />} />
          <Route path='/productos/:id' element={<ProductView />} />
          <Route path='/productos/update/:id' element={<UpdateProd />} />
          <Route path='/pedidos' element={<OrderList />} />
          <Route path='/pedidos/:id' element={<OrderDetail />} />
          <Route path='/dashboard' element={<Dashboard />} >
            <Route path='products' element={<DashProduct />} />
            <Route path='users' element={<DashUsers />} />
            <Route path='sales' element={<SaleCompare />} />
            <Route path='configuracion' element={<AccountPage />} />
            <Route path='productlist' element={ <ProductListDash /> } />
          </Route>
          {/* <Route path='/test' element={ <Bar options={options} data={data} /> } /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
