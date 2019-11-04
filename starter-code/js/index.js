let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');
let $products = document.querySelectorAll('.product');// Create array with all products
let $deletes = document.querySelectorAll('.btn-delete');// Select delete buttons




function updateSubtot($products) {
  // Iteration 1.1
  $products.forEach( product => {
    $pu = product.querySelector('.pu span').innerText;
    $qty = product.querySelector('.qty input').value;
    let $subtotal = parseInt($pu) * parseInt($qty);
    
    //Assign value 
    product.querySelector('.subtot span').innerText = $subtotal;
  });
}


function calcAll() {
  // Iteration 1.2
  updateSubtot($products);

  //Iteration 3: Calculate Total
  let total = 0;
  $products.forEach(product => {
    let subtotal = parseInt(product.querySelector('.subtot span').innerText);
    total += subtotal;
  });
  document.querySelector('#total').innerText = total;
}

function deleteProduct() {  //WORKING
  console.log("funciona delete");
}


$calc.onclick = calcAll;

$deletes.onclick = console.log("delete"); //WORKING