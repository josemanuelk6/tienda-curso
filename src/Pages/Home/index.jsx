import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";


function Home() {

  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if(context.searchByTitle || context.searchByCategory ){
      if(context.filteredItems?.length > 0){
      return context.filteredItems?.map(item=>(<Card key={item.id} data={item}/>))
      } else {
        return <div className="col-span-4 flex"><p className="font-medium text-center w-full">There aren't coincidences! We have a lot of products. Keep trying!</p></div>
      }
    }else {
      return context.items?.map(item=>(<Card key={item.id} data={item}/>))
    }
  }


    return (
      <Layout>
        <h1 className="mb-4 text-2xl font-medium">Exclusive Products</h1>
        <input className="rounded-lg border-black w-80 p-4 mb-4" 
        type='text' placeholder='Search a product'
        onChange={(event)=> context.setSearchByTitle(event.target.value)} />
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 md:ml-5 grid-cols-1 w-full max-w-screen-lg">
          {
            renderView()
          }
        </div>
        <ProductDetail/>
      </Layout>
    )
  }
  
  export default Home