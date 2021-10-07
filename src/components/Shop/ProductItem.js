import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartAction } from '../../store/cart-slice';
import { useDispatch } from 'react-redux';
const ProductItem = (props) => {
  const dispatch=useDispatch()
  const { title, price, description ,id,quantity} = props;
  const addToCart=()=>{
    dispatch(cartAction.addItemToCart({title:title,price:price,id:id,quantity:quantity}))
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
