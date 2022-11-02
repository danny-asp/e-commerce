import * as React from 'react'
import theme from 'theme'
import Pagination from '@mui/material/Pagination'
import SingleProduct from './SinleProduct'
import styled from '@emotion/styled'
import { Grid, Paper } from '@mui/material'
import ProductsContext from 'core/contexts/ProductsContext/products-context'

const ProductList = () => {
  const productsCtx = React.useContext(ProductsContext)
  const productsToDisplay = productsCtx.productsToDisplay
  const pagesCount = Math.ceil(productsCtx.totalProducts / productsCtx.productstPerPage)

  const handleChange = (event, value) => {
    productsCtx.currentPageChanger(value)
  }

  const CardItem = styled(Paper)(({ theme }) => ({
    backgroundColor: 'yellow',

    padding: '2px',
    textAlign: 'center',
    color: 'black',
  }))

  return (
    <React.Fragment>
      <Pagination count={pagesCount} page={productsCtx.currentPage} onChange={handleChange} />
      <Grid container spacing={2}>
        {productsToDisplay.map((element) => {
          return (
            <Grid item lg={3} md={4} key={element._id}>
              <CardItem>
                <SingleProduct productDetails={element} />
              </CardItem>
            </Grid>
          )
        })}
      </Grid>
    </React.Fragment>
  )
}

export default ProductList
