import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();


export const ShoppingCartProvider = ({children}) => {
    //Get Products
    const [items, setItems] = useState(null);
  
    useEffect(()=> {
       fetch('https://fakestoreapi.com/products')
          .then(response => response.json())
          .then(data => setItems(data));
  
    }, [])
   

    //Shopping Cart - Increment quantity
    const [count, setCount] = useState(0);

    //Open Product Detail
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => {setIsProductDetailOpen(true);setIsCheckoutSideMenuOpen(false);}
    const closeProductDetail = () => setIsProductDetailOpen(false);

    //Product detail - Show Product
    const [productToShow, setProductToShow] = useState({});

    //Shopping Cart
    const [cartProducts, setCartProducts] = useState([]);

    //Checkout Aside
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => {setIsCheckoutSideMenuOpen(true);closeProductDetail();}
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    //My order
    const [order, setOrder] = useState([]);
    
    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems
        }}>
            {children}
        </ShoppingCartContext.Provider>
        )
}
