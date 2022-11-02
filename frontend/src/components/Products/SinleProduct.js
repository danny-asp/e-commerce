import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea } from '@mui/material'
import Badge from '@mui/material/Badge'
import FiberNewIcon from '@mui/icons-material/FiberNew'
import { Link } from 'react-router-dom'
import Pagination from '@mui/material/Pagination'

const SingleProduct = (props) => {
  const [page, setPage] = React.useState(1)

  const handleChange = (event, value) => {
    setPage(value)
  }

  return (
    <React.Fragment>
      <Card sx={{ width: '100%', height: '20%' }}>
        <CardActionArea>
          <Badge color="primary" size="large" sx={{ position: 'absolute', top: '10%', right: '8%' }}>
            <FiberNewIcon color="primary" size="large" />
          </Badge>
          <CardMedia component="img" height="190" image={props.productDetails.images[page - 1]} alt="product" />
          <Pagination count={props.productDetails.images.length} page={page} onChange={handleChange} />
          <Link to={`/${props.productDetails._id}`}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.productDetails.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.productDetails.description}
              </Typography>

              {/* <Button variant="contained">add to Cart</Button> */}
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </React.Fragment>
  )
}

export default SingleProduct
