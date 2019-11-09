let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');
let $products = document.querySelectorAll('.product');// Create array with all products
let $deletes = document.querySelectorAll('.btn-delete');// Select delete buttons
let $create = document.querySelector('#create');// Select create button
let $newName = '';
let $newPu = 0;


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


calcAll = () => {
  // Iteration 1.2
  updateSubtot($products);

  //Iteration 3: Calculate Total
  let total = 0;
  $products.forEach(product => {
    let subtotal = parseInt(product.querySelector('.subtot span').innerText);
    total += subtotal;
  });
  document.querySelector('#total').innerText = total;
};


//Iteration 4 - function to delete Row
deleteRow = buttons =>{
  buttons.forEach( button => {
    button.onclick = () => {
      let row = button.parentElement.parentElement;
      row.parentNode.removeChild(row);
    };
  });
};

//Iteration 5.1 - function to create Row
createRow = ($newName, $newPu) => {
  let $newRow = document.createElement('tr');
  $newRow.classList.add('product');
  $newRow.innerHTML = `
      <td class="name">
      <span>${$newName}</span>
    </td>

    <td class="pu">
      $<span>${$newPu}</span>
    </td>

    <td class="qty">
      <label>
        <input type="number" value="0" min="0">
      </label>
    </td>

    <td class="subtot">
      $<span>0</span>
    </td>

    <td class="rm">
      <button class="btn btn-delete">Delete</button>
    </td>
  `
  document.querySelector('tbody').appendChild($newRow);
};

//Iteration 5.2 -Create Item
createNewItem = () =>{
  $newName = document.querySelectorAll(".new input")[0].value;
  $newPu = parseFloat(document.querySelectorAll(".new input")[1].value).toFixed(2);
  createRow($newName, $newPu);
  document.querySelectorAll(".new input")[0].value = '';
  document.querySelectorAll(".new input")[1].value = '';
}

//Call functions
$calc.onclick = calcAll;
$deletes.onclick = deleteRow($deletes);
$create.onclick = createNewItem;

//Keep variables up to date after every click - Search a better way
document.onclick = () =>{
   $cart = document.querySelector('#cart tbody');
   $calc = document.getElementById('calc');
   $products = document.querySelectorAll('.product');// Create array with all products
   $deletes = document.querySelectorAll('.btn-delete');// Select delete buttons
   $create = document.querySelector('#create');// Select create button
   $newName = '';
   $newPu = 0;
}