export default function CancelButton(props) {
  return (
    <div className="d-grid">
      <button className={`btn cancel-button ${props.disabled}`} type="button"
              onClick={() => props.onClickFunction()}>{props.buttonText}</button>
    </div>
  )
}