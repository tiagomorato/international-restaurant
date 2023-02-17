let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);

};

calculation();

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (ShoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        return `
      <div class="cart-item">
        <img width="100" height="100" src=${search.img} alt="" />
        <div class="details">
          <div class="title-price-x">
              <h4 class="title-price">
                <p>${search.name}</p>
                <p class="cart-item-price">$ ${search.price}</p>
              </h4>
              <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
          </div>
          <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">${item}</div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>
          <h3 style="color:black">$ ${item * search.price}</h3>
        </div>
      </div>
      `;
      })
      .join(""));
  } else {

    ShoppingCart.innerHTML = `<div class="order-message shopping-cart-is-empty"> Shopping cart is empty! </div>`;

  }
};

generateCartItems();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  generateCartItems();
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};


let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));

  if(basket.length === 0){
    TotalAmount();
  }
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

let removeItem = (id) => {
  let selectedItem = id;
  // console.log(selectedItem.id);
  basket = basket.filter((x) => x.id !== selectedItem.id);
    calculation();
  generateCartItems();
  TotalAmount();
  localStorage.setItem("data", JSON.stringify(basket));
};


let clearCart = () => {

  basket= [];
  localStorage.setItem("data", JSON.stringify(basket));
  calculation();
  generateCartItems();

};


let checkout = () => {

  basket= [];
  localStorage.setItem("data", JSON.stringify(basket));
  calculation();
  generateCartItems();

  ShoppingCart.innerHTML = `<div class="order-message checkout-completed"> Checkout Completed! </div>`;
  TotalAmount();
};


let TotalAmount = () => {

    let amount = basket
      .map((x) => {
        let { item, id } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];

        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);

  if (basket.length !== 0) {


    // console.log(amount);
    label.innerHTML = `
    <h1 class ="total-price" id="total-price-id"><span>Total</span>   <span> $ ${amount} </span></h1>
    <div class ="order-buttons" id ="order-buttons">
        <button onclick="clearCart()" class="btn-order removeAll">Clear Cart</button>
        <button class="btn-order checkout" onclick="checkout()">Checkout</button>
    </div>
    `;

  } else {

     label.innerHTML = `  <h1 class ="total-price" id="total-price-id"><span>Total</span>   <span> $ ${amount} </span></h1>  `;
  }

};


TotalAmount();