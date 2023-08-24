import { XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(filteredProducts);
       }
    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]);
        context.closeCheckoutSideMenu();
    }

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} w-[360px]  flex-col fixed right-0 border z-100 top-20 bg-white border-black rounded-lg h-[calc(100vh-80px)]`}>
            <div className="flex justify-between  items-center p-4">
                <h2 className="font-medium text-xl">My Order</h2>
                <XMarkIcon className='h-6 w-6 text-red-400 hover:text-red-700 cursor-pointer' onClick={()=>context.closeCheckoutSideMenu()}/>
            </div>
            <div className='overflow-y-scroll px-6 flex-1'>
            {
                context.cartProducts.map(product=> <OrderCard 
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    imagesUrl={product.image}
                    price={product.price}
                    handleDelete={handleDelete} />)
            }
            </div>
            <div className='px-6 mt-5'>
                <p className='flex justify-between items-center'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-xl'>{totalPrice(context.cartProducts)}€</span>
                </p>
                <Link to='/my-orders/last'>
                <button className='w-full bg-black py-3 mt-2 mb-6 text-white rounded-lg' onClick={()=> handleCheckout()}>CheckOut</button>
                </Link>
            </div>
            
        </aside>
    )

}


export default CheckoutSideMenu;