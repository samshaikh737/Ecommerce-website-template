const prodcutRelatedImg = document.querySelectorAll(".related-img")
const productMainImg = document.querySelector("#product-main-img")

function imgChanger(imagesName) {
    imagesName.forEach(i => {
        i.addEventListener('click',()=>{
            productMainImg.src = i.src;
        })
    });
}
imgChanger(prodcutRelatedImg)

// ==== cloths row function ========
function dressesRowData(num) {
    const dressesRow = document.querySelector("#dresses-row-id");

    for (let i = 0; i < num; i++) {
      let div = document.createElement("div");
      div.className = "cloths-product dresses-prodcut col-lg-3 col-md-4 col-12 "
      div.innerHTML = `

          <img src="../assets/img/clothes/${i+1}.jpg" class="img-fulid mb-2" alt="dresses-img ">
 
         <div class="cloths-product-detail dresses-product-detail text-center">

            <div class="rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>   
            <div class="product-about">
              <h5 class="product-title">Best Dress</h5>
              <h4 class="product-price my-2">$49.99</h4>
              <button class="cloths-product-btn dresses-product-btn c-btn">Shop Now</button>
            </div>          

          </div>          
      `
      dressesRow.appendChild(div)

    }
  }
        // === run function ==== 
        dressesRowData(4)    
        dressesRowData(4)    
        