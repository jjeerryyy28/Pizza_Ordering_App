
const rightContainerProducts = document.querySelector('.products');
const popupProduct = document.querySelector('.product-display-container');
const rightContainer = document.querySelector('.right-container')

async function getProducts(){
    try {
        productsData.forEach((ele) => {
            let item = document.createElement('div');
        item.classList.add('item');
        item.classList.add(`${ele.id}`);
        item.innerHTML = `<img src=${ele.img} width="100" height="100">
            <div class="item-content">
                <h4>${ele.name}</h4>
                <p>$ ${ele.price}</p>
            </div>
            <div class="item-buttons">
                <button class="addtocart ${ele.id}">Add to Cart</button>
                <button class="quick-view">Quick view</button>
            </div>`
        rightContainerProducts.appendChild(item)
        })
        rightContainerProducts.addEventListener('click',eachProduct)
    } catch (error) {
        console.error(error);
    }
}
getProducts()

const subscribeBtn = document.getElementsByClassName('main-image-content')[0].getElementsByTagName('button')[0];
subscribeBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const emailInput = document.getElementsByClassName('main-image-email')[0];
  const email = emailInput.value;
  if (email !== '') {
    alert(`You have successfully subscribed with email: ${email}`);
    emailInput.value = '';
  }
});


function eachProduct(e){
    
    if(e.target.classList[0] === 'addtocart'){
        let eachProdId = e.target.classList[1];
        let singleProd = productsData.filter((ele)=>{
            return ele.id == eachProdId;
        })
        rightContainer.innerHTML = `<div class="cart-container">
        <img src="./images/cart-pizza.jpg" alt="">
        <div class="cart-content">
            <div class="cart-header">
                <h2>WELCOME TO ITALIAN PIZZA</h2>
                <p>We deliver pizza in 40 minutes max. If not - Pizza's on us!</p>
                <p>your product details : ${singleProd[0].name}</p>
            </div>
            <div class="cart-body">
                <p for="email">Email</p>
                <input type="email" placeholder="Email...">
                <p for="number">Phone</p>
                <input type="number" placeholder="Phone...">
                <p for="adress">Address</p>
                <input type="text" placeholder="Address...">
                <p for="slices">Number of Slices</p>
                <input type="number" placeholder="Number of Slices...">
                <p for="Pizza">Pizza Size</p>
                <input type="checkbox"><label for="pepperoni">Pepperoni</label>
                <input type="checkbox"><label for="onions">Onions</label>
                <input type="checkbox"><label for="mushrooms">Mushrooms</label>
                <input type="checkbox"><label for="sausage">Sausage</label>
                <p><input type="checkbox"><label for="terms">I agree to the TERMS AND CONDITIONS</label></p>
            </div>
        </div>
        <div class="cart-ordernow">
            <button>Order Now</button>
        </div>
    </div>`
    let cartOrder = document.querySelector('.cart-ordernow>button')
    cartOrder.addEventListener('click',successPage)
    }else if(e.target.classList[0] === 'quick-view'){
        let prodId = e.target.parentElement.parentElement.classList[1];
        let singleProd = productsData.filter((ele)=>{
            return ele.id == prodId;
        })

        displayProd(singleProd[0])
        popupProduct.style.display = "block";
    }else if(e.target.classList[1] === 'fa-xmark'){
        popupProduct.style.display = "none";
    }
    console.log(e.target)
}

function successPage(){
    rightContainer.innerHTML = `<div class="success-image"><h3>Order Success...</h3><img src="./images/delivery-guy.gif"></img> </div>`
}

function displayProd({id,name, price,description, img}){
    popupProduct.innerHTML = ` <div class="single-product-display">
    <div class="left-side">
        <img src=${img} alt="pizza-img">
    </div>
    <div class="right-side">
        <div class="close-product"><i class="fa-solid fa-xmark"></i></div>
        <h2>${name}</h2>
        <hr>
        <p class="price">$ ${price}</p>
        <p>${description}</p>
        <hr>
        <h5>NUTRITIONAL VALUE PER 100 G:</h5>
        <p>Calories <span class="dots">----------</span> <span class="caloriesNumber">
            800 kcal
        </span> </p>
        <p>Carbohydrates <span class="dots">----------</span> <span class="caloriesNumber">
            20 g
        </span> </p>
        <p>Squirrels <span class="dots">----------</span> <span class="caloriesNumber">
            30 g
        </span> </p>
        <p>Fats <span class="dots">----------</span> <span class="caloriesNumber">
            50 g
        </span> </p>

        <button class="addtocart ${id}">Add to Cart</button>
    </div>
</div>`
}

