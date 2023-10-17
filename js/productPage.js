let ulSign = document.querySelector('.sign-ul')
let cartUl = document.querySelector('.cartUl')
let productsContainer = document.querySelector('.products .row')

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
chekcSignOrNot();

if(localStorage.getItem('itemId')){
    let arr = JSON.parse(localStorage.getItem('itemId'));
    cartBadge(arr);
}
function cartBadge(array){
   let items =  array.map(item=>{
        return products.find(ele=>{
           return ele.id==item;
        })
        
    })
    console.log(items);
    addProduct(items);
   
}
function addProduct(items){
    let boxs = items.map(ele=>{
        return `
        <div class="card mb-3 col col-3 col-lg-3 col-md-5  col-sm-5 " style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${ele.src}" class="img-fluid rounded-start w-100" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body d-flex justify-content-between align-items-start">
                <div class="info text-start">
                  <h5 class="card-title text-capitalize">${ele.title}</h5>
                  <p class="card-text">${ele.dis}.</p>
                 
                </div>
                <div class="buy  d-flex flex-column">
                  <button class="btn" data-title ='${ele.title}' id='${ele.id}'>
                    Remove 
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