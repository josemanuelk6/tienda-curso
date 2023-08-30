import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
    const context = useContext(ShoppingCartContext);
    const activeStyle = 'underline underline-offset-4';

    return (
        <nav className="flex justify-between items-center fixed z-10 w-full top-0 py-5 px-8 text-sm font-light bg-white">
            <ul className="flex items-center gap-3">
               
                    <li className="font-semibold text-lg"><NavLink to='/'>Shopi</NavLink></li>
                    <li><NavLink to='/' 
                    onClick={()=> context.setSearchByCategory(null)}
                    className={({ isActive }) => 
            isActive ? activeStyle : undefined
        }>All</NavLink></li>
                    <li><NavLink to='/menclothes' 
                    onClick={()=> context.setSearchByCategory("men's clothing")}
                    className={({ isActive }) => 
            isActive ? activeStyle : undefined
        }>Men</NavLink></li>
                    <li><NavLink to='/womenclothes' 
                    onClick={()=> context.setSearchByCategory("women's clothing")}
                    className={({ isActive }) => 
            isActive ? activeStyle : undefined
        }>Women</NavLink></li>
                    <li><NavLink to='/electronics' 
                    onClick={()=> context.setSearchByCategory("electronics")}
                    className={({ isActive }) => 
            isActive ? activeStyle : undefined
        }>Electronics</NavLink></li>
                    <li><NavLink to='/jewelery' 
                    onClick={()=> context.setSearchByCategory("jewelery")}
                    className={({ isActive }) => 
            isActive ? activeStyle : undefined
        }>Jewelery</NavLink></li>
                    {/* <li><NavLink to='/others' 
                    onClick={()=> context.setSearchByCategory("others")}
                    className={({ isActive }) => 
            isActive ? activeStyle : undefined
        }>Others</NavLink></li> */}
                
            </ul>

            <ul className="flex items-center gap-3">
               
                    <li className="text-black/60 italic">cuenta@mail.com</li>
                    <li><NavLink to='/my-orders' className={({ isActive }) => 
            isActive ? activeStyle : undefined
        }>My Orders</NavLink></li>
                    <li><NavLink to='/my-account' className={({ isActive }) => 
            isActive ? activeStyle : undefined
        }>My Account</NavLink></li>
                    <li><NavLink to='/sign-in' className={({ isActive }) => 
            isActive ? activeStyle : undefined
        }>Sign in</NavLink></li>
                    <li className="flex item-center" ><NavLink to='/my-order' className={({ isActive }) => 
            isActive ? activeStyle : undefined
        }><ShoppingCartIcon  className="w-4 h-4 hover:text-red-500"/></NavLink> <div className="border border-blue-800 rounded-lg px-1 text-xs">{context.cartProducts.length}</div></li>
                
            </ul>

            
        </nav>
    )
}

export {Navbar};