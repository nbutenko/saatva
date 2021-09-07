import {fireEvent, render} from '@testing-library/react';
import React from 'react';
import Product from "./components/Product";
import mattresses from "./mattresses";

const products = Object.values(mattresses.mattresses);

describe('Test Product Component', () => {

  test('Add to Cart button', () => {
    const addedProducts = [];
    const testAddTddToShoppingCart = (item) => {
      addedProducts.push(item);
    }
    const {getByTestId} = render(<Product products={products} addToShoppingCart={testAddTddToShoppingCart}/>);
    const shoppingCartButton = getByTestId("test-button-details");
    expect(shoppingCartButton).toBeDefined();
    fireEvent.click(shoppingCartButton);
    expect(addedProducts[0]).toMatchObject(products[0]);
  });
})

