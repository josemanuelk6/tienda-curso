import { useContext } from "react";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";


function SignIn() {

  const context = useContext(ShoppingCartContext);

const handleSignIn = () => {

  const stringifiedSignOut = JSON.stringify(false);
  localStorage.setItem('sign-out', stringifiedSignOut);
  context.setSignOut(false);
}

   return (
    <Layout>
      <h1 className="mb-4 text-2xl font-medium">Sign In</h1>
        <div className="flex flex-col w-80">
          <p>
            <span className="font-light text-sm">E-mail: </span>
            <span>josemanuelk6@hotmail.com</span>
          </p>
          <p>
            <span className="font-light text-sm">Password: </span>
            <span>************</span>
          </p>
          <Link to="/">
            <button onClick={()=> handleSignIn()}
            className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2">
              Log In
            </button>
          </Link>
          <button 
            className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2">
              Sign Up
            </button>
        </div>

    </Layout>
    )
  }
  
  export default SignIn