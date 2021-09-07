import {Modal, Container, Row, Col} from "react-bootstrap";
import BuyButton from "./BuyButton";
import CancelButton from "./CancelButton";
import ClearCartButton from "./ClearCartButton";

export default function ShoppingCart(props) {
  const totalPrice = props.cartProducts.reduce((a, b) => a + (b.price * b.count || 0), 0);
  const tax = totalPrice * 0.0625;
  const totalSum = totalPrice + tax;
  const buyButtonDisabled = !totalSum ? 'disabled' : '';

  return (
    <Modal animation={false} show={props.showModal} onHide={props.toggle} className="cart-modal">
      <Modal.Header>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          {(props.cartProducts.length && props.cartProducts.map((el, index) =>
            <Row key={index}>
              <Col xs={6} md={6}>{el.name}</Col>
              <Col xs={2} md={2}>{el.count}</Col>
              <Col className="justify-content-end" xs={4} md={4}>$ {(el.count * el.price).toFixed(2)}</Col>
            </Row>
          )) || <span className="fst-italic">No products</span>}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Container>
          <Row>
            <Col xs={8} md={8}>Total:</Col>
            <Col xs={4} md={4}>$ {totalPrice.toFixed(2)}</Col>
          </Row>
          {(totalPrice &&
            <>
              <Row>
                <Col xs={8} md={8}>Tax.</Col>
                <Col xs={4} md={4}>$ {tax.toFixed(2)}</Col>
              </Row>
              <Row>
                <Col xs={8} md={8}>Total incl. tax:</Col>
                <Col xs={4} md={4}>$ {totalSum.toFixed(2)}</Col>
              </Row>
            </>
          ) || ''}
        </Container>

        <Container>
          <Row>
            <BuyButton onClickFunction={() => console.log("Payment API redirect")} buttonText={"Checkout"}
                       disabled={buyButtonDisabled}/>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={6} md={6}>
              <ClearCartButton onClickFunction={props.clearShoppingCart} buttonText={"Clear cart"}
                               disabled={buyButtonDisabled}/>
            </Col>
            <Col xs={6} md={6}>
              <CancelButton onClickFunction={props.toggle} buttonText={"Cancel"} disabled={''}/>
            </Col>
          </Row>
        </Container>
      </Modal.Footer>
    </Modal>
  )
}