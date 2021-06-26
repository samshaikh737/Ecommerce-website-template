  // All brand images append function 
  function allBrandImages(num) {
        const brandImagesDiv = document.querySelector("#brand-images-div")
        for (let i = 0; i < num; i++) {
          let img = document.createElement("img");
          img.src = `./assets/img/brand/${i+1}.png`;
          img.alt = "brand-image"
          img.className = "brand-img img-fluid col-lg-2 col-md-4 col-6"
          
          brandImagesDiv.appendChild(img)
        }
  }
  // run function
  allBrandImages(6)

      
    
  // ==== Featured row function ========
  function featuredRowData(num) {
    const featuredRow = document.querySelector("#featured-row-id");

    for (let i = 0; i < num; i++) {
      let div = document.createElement("div");
      div.className = "cloths-product featured-prodcut col-lg-3 col-md-4 col-12 "
      div.innerHTML = `

          <img src="./assets/img/featured/${i+1}.jpg" class="img-fulid mb-2" alt="featured-img ">
 
         <div class="cloths-product-detail featured-product-detail text-center">

            <div class="rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>   
            <div class="product-about">
              <h5 class="product-title">Best Shoes</h5>
              <h4 class="product-price my-2">$49.99</h4>
              <button class="cloths-product-btn featured-product-btn c-btn">Shop Now</button>
            </div>          

          </div>          
      `
      featuredRow.appendChild(div)

    }
  }
  setTimeout(() => {
    featuredRowData(4)    
  }, 2000);
  // === run function ==== 

      
  // ==== cloths row function ========
  function dressesRowData(num) {
    const dressesRow = document.querySelector("#dresses-row-id");

    for (let i = 0; i < num; i++) {
      let div = document.createElement("div");
      div.className = "cloths-product dresses-prodcut col-lg-3 col-md-4 col-12 "
      div.innerHTML = `

          <img src="./assets/img/clothes/${i+1}.jpg" class="img-fulid mb-2" alt="dresses-img ">
 
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
  setTimeout(() => {
    dressesRowData(4)    
  }, 2000);
  // === run function ==== 


  // ==== Watch row function ========
  function WatchRowData(num) {
      const WatchRow = document.querySelector("#Watch-row-id");
  
      for (let i = 0; i < num; i++) {
        let div = document.createElement("div");
        div.className = "cloths-product Watch-prodcut col-lg-3 col-md-4 col-12 "
        div.innerHTML = `
  
            <img src="./assets/img/Watches/${i+1}.jpg" class="img-fulid mb-2" alt="Watch-img ">
   
           <div class="cloths-product-detail Watch-product-detail text-center">
  
              <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>   
              <div class="product-about">
                <h5 class="product-title">Best Watch</h5>
                <h4 class="product-price my-2">$49.99</h4>
                <button class="cloths-product-btn Watch-product-btn c-btn">Shop Now</button>
              </div>          
  
            </div>          
        `
        WatchRow.appendChild(div)
  
      }
  }
  setTimeout(() => {
    WatchRowData(4)    
  }, 2000);
  // === run function ==== 
  

  
  // ==== running row function ========
  function runningRowData(num,secondNum) {
    const runningRow = document.querySelector("#running-row-id");

    for (let i = secondNum; i < num; i++) {
      let div = document.createElement("div");
      div.className = "cloths-product running-prodcut col-lg-3 col-md-4 col-12 "
      div.innerHTML = `

          <img src="./assets/img/shoes/${i+1}.jpg" class="img-fulid mb-2" alt="running-img ">
 
         <div class="cloths-product-detail running-product-detail text-center">

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
              <button class="cloths-product-btn running-product-btn c-btn">Shop Now</button>
            </div>          

          </div>          
      `
      runningRow.appendChild(div)

    }
  }
  setTimeout(() => {
    runningRowData(8,4)    
  }, 2000);
  // === run function ==== 
