import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import Modal from "../modal/Modal";
const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Modal>
      {" "}
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {cartItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                item={{
                  title: item.name,
                  quantity: item.quantity,
                  total: item.totalprice,
                  price: item.price,
                  id: item.id,
                }}
              />
            );
          })}
        </ul>
      </Card>
    </Modal>
  );
};

export default Cart;
