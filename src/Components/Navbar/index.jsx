import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import ShoppingCart from "../ShoppingCart";


const Navbar = () => {
    const context = useContext(ShoppingCartContext);
    const activeStyle = 'underline underline-offset-4';

    //Sign out
    const signOut = localStorage.getItem('sign-out');
    const parsedSignOut = JSON.parse(signOut);
    const isUserSignOut = context.signOut || parsedSignOut;
      // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;




    const renderView = () => {
        if (isUserSignOut && !hasUserAnAccount) {
            return (
                <li><NavLink to='/sign-in' className={({ isActive }) => 
            isActive ? activeStyle : undefined
        } 
        >Sign in</NavLink></li>
            )
        } else {
            return (
          <>                     
                <li className="text-black/60 italic">{context.account?.email}</li>
                <li><NavLink to='/my-orders' className={({ isActive }) => 
        isActive ? activeStyle : undefined
    }>My Orders</NavLink></li>
                <li><NavLink to='/my-account' className={({ isActive }) => 
        isActive ? activeStyle : undefined
    }>My Account</NavLink></li>
                <li onClick={()=>handleSignOut()}><NavLink to='/sign-in' className={({ isActive }) => 
        isActive ? activeStyle : undefined
    } 
    >Sign out</NavLink></li>
                
       </>
            )

        }
    }

    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true);
        localStorage.setItem('sign-out', stringifiedSignOut);
        context.setSignOut(true);
    }

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
                {renderView()}

               <ShoppingCart/>
            </ul>

            
        </nav>
    )
}

export {Navbar};