// TODO: create a component that displays a single bakery item
// TODO: create a component that displays a single bakery item
import "./BakeryItem.css"
function BakeryItem(props){
    return (<div className="BakeryItem"> 
            <img src = {props.item.image}/>
         <h1>{props.item.name}</h1>
         <p>Price:{props.item.price}</p>
         <p>{props.item.description}</p>
         <button onClick={() => {props.addtoCart(props.item)}}> Add to Cart</button>
    </div>)

    }
    export default BakeryItem;
