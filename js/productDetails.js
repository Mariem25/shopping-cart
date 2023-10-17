

id = JSON.parse(localStorage.getItem('displayId'))
let productDetails = document.querySelector('.productDetails')

function show(id){
  
    let y = products.map(ele=>{
      if(ele.id===id){
        return`
        <img src="${ele.src}" alt="${ele.title}">
        <h4>${ele.title}</h4>
        <h4>${ele.qut}</h4>
        `
      }
    }).join('');
    productDetails.innerHTML = y
}
 show(id)
