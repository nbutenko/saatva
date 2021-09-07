export default function Navbar(props) {
  return (
    <div className="navbar">
      <div>
        <a href="/#"><img className="logo" src="/images/saatva_logo.png" alt="Saatva Logo"/></a>
      </div>

      <div className="position-relative">
        <img className="shopping-cart" src="/images/shopping_cart_icon.png" onClick={props.toggle}
             alt="Shopping cart icon"/>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill cart-badge fw-light">{props.countCartItems}</span>
      </div>
    </div>
  )
}