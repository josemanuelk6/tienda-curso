import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  console.log(currentPath);
  let index = currentPath.substring(currentPath.lastIndexOf('/')+1);

  if (index === 'last') index = context.order?.length -1;
 
    return (
    <Layout>
      MyOrder
      <div className='flex flex-col w-80'> 
            {
                context.order?.[index]?.products.map(product=> <OrderCard 
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    imagesUrl={product.image}
                    price={product.price}
                    />)
            }
            </div>
    </Layout>
    )
  }
  
  export default MyOrder