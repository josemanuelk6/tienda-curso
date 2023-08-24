import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon } from "@heroicons/react/24/solid";
import {CheckIcon} from "@heroicons/react/24/solid"

const Card = (data) => {
    const context = useContext(ShoppingCartContext);

    const showProduct = (ProductDetail) => {
        context.openProductDetail();
        context.setProductToShow(ProductDetail);
    }

    const addProductToCart = (event, ProductData) => {
        event.stopPropagation();
        context.setCartProducts([...context.cartProducts, ProductData]);
        context.openCheckoutSideMenu();      
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0;

        if (isInCart){
            return(
            <CheckIcon className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1 text-green-600"/>)
        }else {
            return (
                <PlusIcon className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 hover:bg-blue-300 hover:text-yellow-400"
                        onClick={(event)=> addProductToCart(event, data.data) }/>
            )
        }
        
    }

    return (
        <div 
        className="bg-white cursor-pointer w-56 h-60 rounded-lg shadow-lg"
        onClick={()=> showProduct(data.data)}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data.image} alt={data.data.title}/>
                {renderIcon(data.data.id)}
                </figure>
            <p className="flex justify-between">
                <span className="font-light text-sm ml-2">{data.data.title}</span>
                <span className="font-medium text-lg mr-2">{data.data.price}€</span>
            </p>
        </div>
    )
}

export default Card;