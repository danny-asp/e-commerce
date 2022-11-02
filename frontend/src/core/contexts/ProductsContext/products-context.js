import React from 'react'

const ProductsContext = React.createContext({
  products: [],
  productsToDisplay: [],
  productstPerPage: 10,
  currentPage: 0,
  totalProducts: 30,
  totalPagesCount: 0,
  currentPageChanger: () => {},
})

export default ProductsContext
