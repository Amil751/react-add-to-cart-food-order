import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useSelector, useDispatch } from "react-redux";
import { uiAction } from "./store/ui-slice";
import { Fragment, useEffect, useState } from "react";
let isInitial=true;
function App() {
  
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const cartToggle = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const [state, setState] = useState(false);
  console.log(notification)
  useEffect(() => {
    dispatch(
      uiAction.showNotification({
        status: "pending",
        title: "sending",
        message: "sending data",
      })
    );
    async function fetchrequest() {
      const response = await fetch(
        "https://react-http-app-564e3-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data faild");
      }

      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "succes!",
          message: "connected succesfuly",
        })
      );
    }
    if(isInitial){
      isInitial=false;
      return;
    }
    fetchrequest().catch((error) => {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "error!",
          message: "sending data to cart faild",
        })
      );
    });
  }, [cart, dispatch]);
 
  const change = () => {
    setState(!state);
    console.log(state);
  };
  
  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title}  message={notification.message}/>}
      <Layout>
        {cartToggle && <Cart />}
        <button onClick={change}>click</button>
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
