import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCard = props => {
    const {id, title, imagesUrl, price, handleDelete} = props;
    let renderXMarkIcon;
    if (handleDelete) {
      renderXMarkIcon =  <XMarkIcon onClick={()=> handleDelete(id)} className="h-6 w-6 text-red-600 cursor-pointer"></XMarkIcon>;
    }
    return (
        <div className="flex justify-between item-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imagesUrl} alt={title}/>
                </figure>
                <p className="text-xs font-light w-40">{title}</p>
            </div>
            <div className="flex items-center gap-2">
               <p className="text-sm font-medium">{price}€ </p>
                {renderXMarkIcon}
            </div>
        </div>
    )


}

export default OrderCard;