export default function BuyButton(props) {
  return (
    <div className="d-grid mt-5">
      <button className={`btn buy-button ${props.disabled}`} type="button"
              onClick={() => props.onClickFunction()} data-testid="test-button-details">{props.buttonText}
      </button>
    </div>
  )
}