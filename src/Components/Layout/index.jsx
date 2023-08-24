import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Layout = ({children}) => {
const context = useContext(ShoppingCartContext);

    return (
        <div className={` flex flex-col mt-20 items-center`}>
            {children}
        </div>
    )


}

export default Layout;