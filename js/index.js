// ITERATION 1
function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  
  let subTotal = price * quantity;
  const subtotalPrice = product.querySelector('.subtotal span').innerHTML  = subTotal;

  return subTotal;
}




  // ITERATION 2

  function calculateAll() {
    
  
    let allProducts = document.querySelectorAll('.product');
  
    let sum = 0;
  
    allProducts.forEach((product) => {
      updateSubtotal(product);
      sum = sum + parseFloat(product.querySelector('.subtotal span').innerHTML);
      return sum;
    });

  // ITERATION 3
  let total = document.querySelector('#total-value span');
  total.innerText = sum;
  //console.log(total);
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
