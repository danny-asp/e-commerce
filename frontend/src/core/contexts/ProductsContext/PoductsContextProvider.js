import React, { useEffect, useState } from 'react'
import ProductsContext from './products-context'
import axios from 'axios'

const url = `http://localhost:5000/api/products`

const ProductsContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [productsToDisplay, setProductsToDisplay] = useState([])

  const currentPageChanger = (page) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    setIsLoading(true)
    axios.get(url).then((res) => {
      const allProducts = res.data.result
      setProducts(allProducts)
      setProductsToDisplay(allProducts.slice(0, 10))
      //   when we have more products it must be changed to currentPage(-1 * pagesCounttoDisplay) and pagesCountToDisplay(*currentPage)
    })

    // add catch error
    setIsLoading(false)
  }, [currentPage])

  const productsContext = {
    products: products,
    productsToDisplay: productsToDisplay,
    productstPerPage: 10,
    currentPage: currentPage,
    totalProducts: 30,
    totalPagesCount: 0,
    isLoading,
    currentPageChanger: currentPageChanger,
  }

  return (
    <React.Fragment>
      <ProductsContext.Provider value={productsContext}>{props.children}</ProductsContext.Provider>
    </React.Fragment>
  )
}

export default ProductsContextProvider
