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

      