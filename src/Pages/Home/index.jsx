import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";


function Home() {

  const context = useContext(ShoppingCartContext);


    return (
      <Layout>
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 md:ml-5 grid-cols-1 w-full max-w-screen-lg">
          {
            context.items?.map(item=>(<Card key={item.id} data={item}/>))
          }
        </div>
        <ProductDetail/>
      </Layout>
    )
  }
  
  export default Home