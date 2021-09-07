import {useEffect, useRef, useState} from "react";
import BuyButton from "./BuyButton";

export default function Product(props) {
  const firstProductBtn = useRef(null);
  const [primaryProduct, setPrimaryProduct] = useState(props.products[0]);

  // Focus on first product button
  useEffect(() => {
    firstProductBtn.current.focus();
  }, [])

  // Handle Add product to shopping cart button
  const onClickFunction = () => {
    props.addToShoppingCart(primaryProduct);
  }

  return (
    <div className="product-container d-flex flex-wrap justify-content-between">
      <div className="flex-fill">
        <img className="w-100" src={'/images/' + primaryProduct.imageFileName} alt="Product img"/>
      </div>

      <div className="ms-4 flex-fill">
        <div className="align-content-start">
          <h2 className="products-header">Choose Your Mattress</h2>
          <h6 className="mt-5">SELECT MATTRESS TYPE</h6>

          <div className="btn-group w-100" role="group">
            {props.products.map((el, index) => <button key={index} type="button" className="btn product-btn" id={index}
                                                       onClick={() => setPrimaryProduct(el)}
                                                       ref={!index ? firstProductBtn : null}>
              {el.name}</button>)}
          </div>
        </div>

        <div className="d-flex justify-content-between mt-4">
          <div>{primaryProduct.name}</div>
          <div>${primaryProduct.price}</div>
        </div>

        <BuyButton onClickFunction={onClickFunction} buttonText={"Add to Cart"} disabled={''}/>
      </div>
    </div>
  )
}