export default function ClearCartButton(props) {
  return (
    <div className="d-grid">
      <button className={`btn clear-cart-button ${props.disabled}`} type="button"
              onClick={() => props.onClickFunction()}>{props.buttonText}</button>
    </div>
  )
}