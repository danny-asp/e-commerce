import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductsDetails = () => {
  const params = useParams()
  console.log(params)
  return (
    <React.Fragment>
      <div>ProductPAge</div>
      <p>{params.productId}</p>
      <Link to="/">backToProducts</Link>
    </React.Fragment>
  )
}

export default ProductsDetails
