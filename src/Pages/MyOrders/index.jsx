import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { Link } from "react-router-dom";

function MyOrders() {

  const context = useContext(ShoppingCartContext);
 
    return (
      <Layout>
      <h1 className="mb-4 text-2xl font-medium">My Orders</h1>
      {
        context.order.map((order, index)=>
        <Link key={index} to={`/my-orders/${index}`}>
        <OrdersCard
        
        totalPrice={order.totalPrice}
        totalProducts={order.totalProducts}
        />
        </Link>
        )
      
      }
    </Layout>
    )
  }
  
  export default MyOrders