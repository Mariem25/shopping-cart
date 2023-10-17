let ulSign = document.querySelector('.sign-ul')
let cartUl = document.querySelector('.cartUl')
let productsContainer = document.querySelector('.products .row')
let cart = document.querySelector('.cart')
let cartI = document.querySelector('.cart i')
let cartBadge = document.querySelector('.cart .badge')
let cartProduct = document.querySelector('.cartProduct .titles')
let cartProductMain = document.querySelector('.cartProduct ')
let searchInput = document.querySelector('.searchInput input')


let products = JSON.parse(localStorage.getItem('products'));

// <p class="card-text">size:largw</p> 

function chekcSignOrNot(){
    if(localStorage.getItem('uesrName') && localStorage.getItem('password')){
        console.log(cartUl);
        cartUl.style.display = 'flex';
        ulSign.style.display = 'none';
    }else{
        cartUl.style.display = 'none';
        ulSign.style.display = 'flex';
    }
}
function addProduct(){
    let boxs = products.map(ele=>{
        return `
        <div class="card mb-3 col col-3 col-lg-3 col-md-5  col-sm-5 " style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${ele.src}" class="img-fluid rounded-start w-100" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body d-flex justify-content-between align-items-start">
                <div class="info text-start">
                 <a href='productDetails.html' class='link'> <h5 class="card-title text-capitalize" onclick='${show()} data-id='${ele.id}'>${ele.title}</h5></a>
                  <p class="card-text">${ele.dis}.</p>
                 
                </div>
                <div class="buy  d-flex flex-column">
                  <button class="btn" data-title ='${ele.title}' id='${ele.id}'>
                    buy
                  </button>
                  <i class="fa-regular fa-heart"></i>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        `
    }).join('');
    productsContainer.innerHTML = boxs;
}
chekcSignOrNot();
addProduct();

let buyBtn = document.querySelectorAll('.buy .btn');
buyBtn = [...buyBtn];
buyBtn.map(ele=>{
  ele.addEventListener('click',addToCart)

})
  
let c = localStorage.getItem('curtNums') || 0;
cartBadge.innerHTML = c;
let arrId = localStorage.getItem('itemId') || [];
let y = JSON.parse(localStorage.getItem('itemId'))
console.log(y)
let s = new Set(y) || new Set();

if(y){
  console.log('yes');
  addTitle();
}

function addTitle(){
  let items =  y.map(item=>{
    return products.find(ele=>{
       return ele.id==item;
    })
    
})
console.log(items);
items.map(o=>{
  cartProduct.innerHTML += `<p>${o.title}</p>`
})
// addProduct(items);
}

let arrCart =  JSON.parse(localStorage.getItem('arrCart')) || [];

function addToCart(){
  let card = products.map(ele=>{
    if(ele.id == this.id){
      ele.qut++;
      console.log(arrCart.indexOf(ele))
      if(ele.qut<=1){
        arrCart.push(ele)

      }
      localStorage.setItem('arrCart',JSON.stringify(arrCart));

    }
  })
  console.log(arrCart)
 c++;
  s.add(this.id)
  titleAndCoun();
}

titleAndCoun();

function titleAndCoun(){
  cartBadge.innerHTML = arrCart.length;
  localStorage.setItem('itemId',JSON.stringify([...s]));
  localStorage.setItem('curtNums',arrCart.length);
  cartProduct.innerHTML  = '';
  if(arrCart.length!==0){
    console.log('add')
   
    arrCart.map(ele=>{

      cartProduct.innerHTML += `<p>${ele.title} ${ele.qut}</p>`;
    })
  }  
}

cartI.addEventListener('click',displayDetails);
function displayDetails(){
  if(c>0){
    cartProductMain.classList.toggle('open') ;
  }
}

function show(){
localStorage.setItem('displayId',JSON.stringify(this.id));
}

searchInput.addEventListener('keyup',searchinproduct);

function searchinproduct(e){
  let arr = products.map(ele=>{
    if(ele.title.indexOf(this.value)!=-1){
      console.log(ele.title)
      return  `
      <div class="card mb-3 col col-3 col-lg-3 col-md-5  col-sm-5 " style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${ele.src}" class="img-fluid rounded-start w-100" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body d-flex justify-content-between align-items-start">
              <div class="info text-start">
               <a href='productDetails.html' class='link'> <h5 class="card-title text-capitalize" onclick='${show()} data-id='${ele.id}'>${ele.title}</h5></a>
                <p class="card-text">${ele.dis}.</p>
               
              </div>
              <div class="buy  d-flex flex-column">
                <button class="btn" data-title ='${ele.title}' id='${ele.id}'>
                  buy
                </button>
                <i class="fa-regular fa-heart"></i>
              </div>
              
            </div>
          </div>
        </div>
      </div>`;
    }
  }).join('');
  productsContainer.innerHTML = arr;
}

