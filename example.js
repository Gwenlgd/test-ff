const getProducts = () => {
  return document.getElementsByClassName('c-product')
}

const getProductTitle = (product) => {
  return product.name
}

const getProductPrice = (product) => {
  return product.price
}

const print = (text) => {
    console.log(text)
}

const main = () => {

  const products = getProducts()

  for (const product in products) {
    const title = getProductTitle(product)
    const price = getProductPrice (product)

    print(title, price)
  }
}
