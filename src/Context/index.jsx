import { createContext, useState, useEffect } from "react";
import React from "react";

export const ShoppingCartContext = createContext();


// inicialiate local storage
export const initializeLocalStorage = () => {
    const accountInLocalStorage = localStorage.getItem('account');
    const signOutInLocalStorage = localStorage.getItem('sign-out');
    let parsedAccount;
    let parsedSignOut;

    if (!accountInLocalStorage) {
        localStorage.setItem('account', JSON.stringify({}));
        parsedAccount = {};
    }else {
        parsedAccount = JSON.parse(accountInLocalStorage);
    }

    if (!signOutInLocalStorage) {
        localStorage.setItem('sign-out', JSON.stringify(false));
        parsedSignOut = false;
    } else {
        parsedSignOut = JSON.parse(signOutInLocalStorage);
    }
}

initializeLocalStorage();


export const ShoppingCartProvider = ({children}) => {
    //My Account
    const [account, setAccount] = useState({});

    //Sign Out
    const [signOut, setSignOut] = useState(false);


    //Search by title
    const [searchByTitle, setSearchByTitle] = useState(null);

    //Search by category
    const [searchByCategory, setSearchByCategory] = useState(null);
    
    //Get Products
    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
  
    useEffect(()=> {
       fetch('https://fakestoreapi.com/products')
          .then(response => response.json())
          .then(data => setItems(data));
  
    }, [])
    
   
    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category === searchByCategory)
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE'){
            return filteredItemsByTitle(items,searchByTitle)
        }
        if (searchType === 'BY_CATEGORY'){
            return filteredItemsByCategory(items,searchByCategory)
        }
        if (searchType === 'BY_TITLE_AND_CATEGORY'){
            return filteredItemsByCategory(items,searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        if (searchType === 'BY_CATEGORY'){
            return items
        }
    }

    useEffect (() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY',items,searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE',items,searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY',items,searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null,items,searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory])




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
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory,
            account,
            setAccount,
            signOut,
            setSignOut
        }}>
            {children}
        </ShoppingCartContext.Provider>
        )
}
