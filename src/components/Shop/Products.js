import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_DATA=[{
  id:'m1',
  title:'palo coelho',
  price:36,
  description:"kimyager best selling book",
  quantity:1
},
{
  id:'m2',
  title:'Xalid Huseyni',
  price:25,
  description:"cerpeleng ucuran best selling book",
  quantity:1
},
{
  id:'m3',
  title:'Cingiz Abdullayev',
  price:18,
  description:"Durango best selling book",
  quantity:1
},]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      {DUMMY_DATA.map((item) => {
        return <ul key={item.id}>
          <ProductItem
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            quantity={item.quantity}
          />
        </ul>;
      })}
    </section>
  );
};

export default Products;
