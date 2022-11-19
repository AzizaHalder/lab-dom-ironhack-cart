// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalPrice = price * quantity;
  console.log(subtotalPrice);
  const subtotal = Number(
    (product.querySelector('.subtotal span').innerHTML = subtotalPrice)
  );
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2

  const products = document.getElementsByClassName('.product');

  // console.log(elements);

  console.log(products);
  // console.log(totalPrice);
  for (let i = 0; i < products.length; i++) {
    products[i];
    // need to access every tr.product DOM node
    // loop through products and product by product feed function
  }
  console.log(products);
  return products;
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
