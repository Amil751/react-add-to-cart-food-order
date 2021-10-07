import classes from './CartItem.module.css';
import { cartAction } from '../../store/cart-slice';
import { useDispatch } from 'react-redux';
const CartItem = (props) => {
  const { title, quantity, total, price ,id} = props.item;
  const dispatch=useDispatch();
  const increaseCount=()=>{
    dispatch(cartAction.addItemToCart({title:title,price:price,id:id,quantity:quantity}))
  }
  const decreaseCount=()=>{
    dispatch(cartAction.removeItemFromCart(id))
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseCount}>-</button>
          <button onClick={increaseCount}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
