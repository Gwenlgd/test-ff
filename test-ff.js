const displayedProducts = new Set();

function extractAndDisplayProductInfo() {
  const bigProducts = document.getElementsByClassName('c-product');
  const arBig = Array.from(bigProducts);

  arBig.forEach(element => {
    if (!element.dataset.processed) {
      const elementsBox = element.getBoundingClientRect();
      const isOnScreen = (
        elementsBox.top >= 0 &&
        elementsBox.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );

      if (isOnScreen && !displayedProducts.has(element)) {
        const productNameElement = element.querySelector('.c-product__name');
        const productPriceElement = element.querySelector('.c-product__price');

        if (productNameElement && productPriceElement) {
          const productName = productNameElement.textContent.trim();
          const productPrice = productPriceElement.textContent.trim();

          console.log('Nom: ' + productName);
          console.log('Prix: ' + productPrice);

          displayedProducts.add(element);
        }
      }
    }
  });
}

extractAndDisplayProductInfo();

window.addEventListener('scroll', extractAndDisplayProductInfo);
