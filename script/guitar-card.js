console.log("Loading Guitar Products");

const guitarProducts = [
  {
    title: "Fender Stratocaster",
    image_url: "./imgs/fender-stratocaster.png",
    price: "$550,000",
    cta: "Add to cart"
  },
  {
    title: "Gibson Les Paul",
    image_url: "./imgs/gibson-lespaul.png",
    price: "$720,000",
    cta: "Add to cart"
  },
  {
    title: "Yamaha Acoustic Guitar",
    image_url: "./imgs/yamaha-acoustic.png",
    price: "$230,000",
    cta: "Add to cart"
  },
  {
    title: "Ibanez RG Series",
    image_url: "./imgs/ibanez-rg.png",
    price: "$450,000",
    cta: "Add to cart"
  },
  {
    title: "PRS Custom 24",
    image_url: "./imgs/prs-custom24.png",
    price: "$680,000",
    cta: "Add to cart"
  }
];

(function () {
  const PRODUCT = {
    init: function() {
      this.insertProducts();
    },

    insertProducts: function() {
      guitarProducts.forEach((item, index) => {
        document.querySelector('.product-list')
          .insertAdjacentHTML('beforeend', this.templateProduct(item, index));
      });
    },

    templateProduct: function(item, index) {
      return `
        <div class='product-item' id='product-${index}'>
          <img src='${item.image_url}' alt='${item.title}'>
          <div class='product-info'>
            <p class='product-title'>${item.title}</p>
            <p class='price'>${item.price}</p>
            <button class='add-cart-btn'>${item.cta}</button>
          </div>
        </div>
      `;
    }
  };

  PRODUCT.init();
})();