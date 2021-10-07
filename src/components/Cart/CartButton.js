import classes from './CartButton.module.css';
import { useSelector } from "react-redux";
import { uiAction } from '../../store/ui-slice';
import { useDispatch } from 'react-redux';
const CartButton = (props) => {
  const totalQuantity=useSelector(state=>state.cart.totalQuantity)
  const dispatchToggle=useDispatch();
  const toggle=()=>{
    
    dispatchToggle(uiAction.toggle())

  }
  return (
    <button onClick={toggle} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
