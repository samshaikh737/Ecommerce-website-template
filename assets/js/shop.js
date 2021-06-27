  // ==== running row function ========
  function allproductRowData(num) {
    const allproductRow = document.querySelector("#allproduct-row-id");

    for (let i = 0; i < num; i++) {
      let div = document.createElement("div");
      div.className = "cloths-product allproduct-prodcut col-lg-2 col-md-3 col-6 "
      div.innerHTML = `

        <a href="./product-detail.html">
          <img src="../assets/img/shop/${i+1}.jpg" class="img-fulid mb-2" alt="allproduct-img ">
 
         <div class="cloths-product-detail rallproduct-product-detail text-center">

            <div class="rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>   
            <div class="product-about">
              <h5 class="product-title">Best Running shoes</h5>
              <h4 class="product-price my-2">$49.99</h4>
              <button class="cloths-product-btn allproduct-product-btn c-btn">Shop Now</button>
            </div>     
            
          </a>

          </div>          
      `
      allproductRow.appendChild(div)

    }
  }
  allproductRowData(26)
  // === run function ==== 
