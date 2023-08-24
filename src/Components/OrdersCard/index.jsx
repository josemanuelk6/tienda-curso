import { ChevronRightIcon } from "@heroicons/react/24/solid";

const OrdersCard = props => {
    const {totalPrice, totalProducts} = props;
    let renderXMarkIcon;

    return (
        <div className="flex item-center mb-3 border border-black p-4 w-80 rounded-lg cursor-pointer ">
           <div className="flex justify-between w-full">
            <p>
            <span>01.02.23</span>
            <span className="font-light ml-2">{totalProducts} articles</span>
            </p>
            <p className="flex gap-2 items-center">
            <span className="font-medium text-l">{totalPrice}€</span>
            <ChevronRightIcon className="h-6 w-6 text-black "/>
            </p>
           </div>
            
        </div>
    )
}

export default OrdersCard;