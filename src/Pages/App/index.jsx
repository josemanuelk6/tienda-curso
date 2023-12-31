import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context';
import {Navbar} from '../../Components/Navbar';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import CheckoutSideMenu from '../../Components/CheckoutSideMenu';
import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    {path:'/', element: <Home/>},
    {path:'/menclothes', element: <Home/>},
    {path:'/electronics', element: <Home/>},
    {path:'/jewelery', element: <Home/>},
    {path:'/womenclothes', element: <Home/>},
    {path:'/others', element: <Home/>},

    {path:'/my-account', element: <MyAccount/>},
    {path:'/my-orders/last', element: <MyOrder/>},
    {path:'/my-orders/:id', element: <MyOrder/>},
    {path:'/my-orders', element: <MyOrders/>},
    {path:'/sign-in', element: <SignIn/>},
    {path:'/*', element: <NotFound/>},
  ])
  return routes;
}

const App = () => {
  
 
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
            <Navbar/>
           <AppRoutes/>
           <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
