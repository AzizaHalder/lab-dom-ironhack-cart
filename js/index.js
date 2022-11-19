// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalPrice = price * quantity;
  // const subtotalPrice = parseFloat(price) * quantity;
  // Use parseInt() instead of Number
  const subtotal = Number(
    (product.querySelector('.subtotal span').innerHTML = subtotalPrice)
  );
  console.log(subtotal);
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2 & 3

  const products = document.getElementsByClassName('product');
  const productsList = [...products];

  let total = 0;

  for (let i = 0; i < productsList.length; i++) {
    total += updateSubtotal(productsList[i]);
  }
  console.log(total);

  /*
  Felipe's solution
  productsList.forEach((product) => (total += updateSubtotal('product')));
  */
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  /* Felipe's solution
  const parent = target.parentNode.parentNode;
  parent.remove();
  calculateAll();
  */
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  /* Felipe's solution
  const removeBtns = [...document.getElementsByClassName('btn-remove')];
  removeBtns.forEach((button) =>
    button.addEventListener('click', removeProduct)
  );
  */
});
