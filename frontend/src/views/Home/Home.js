import { Container, Divider, Link, Typography } from '@mui/material'
import ProductsContextProvider from 'core/contexts/ProductsContext/PoductsContextProvider'
import ProductList from 'components/Products/ProductList'

const Home = () => {
  // const productsCtx = useContext(ProductsContext)

  return (
    <Container>
      <ProductsContextProvider>
        <ProductList />

        {/* <Typography variant="h6">Task</Typography>
        <Divider />
        <Typography variant="body2" gutterBottom>
          123 TLDR: Create an online store using the provided API.
          <br />
          The store is "locked" by default. You need to be a user to see the products. The authentication part has
          already been done for you. I strongly advise you to check everything auth related, since it uses key concepts
          like context, reducers, hooks, etc.
          <br /> On the home page (this page) you should fetch all products and display them in a grid (hint: MUI
          component) system. You fetch only a few products. Use pagination to navigate between pages.
          <br /> If you click on a certain product you should be able to navigate to a product page where you see all
          the data of the product (description, ratings, comments, etc). For this you need to create a dynamic route.
          (First code the product list page, then the shopping cart and lastly the product page)
          <br /> Also you need to create a shopping cart with full functionalities - change quantity of a
          product/products, delete product, show final price, show prices of all products (multiplied by quantity of the
          product). You can make a new page for the cart or the MUI Drawer component. You need a new context for the
          cart.
          <br /> Don't create a checkout page yet.
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Tips
        </Typography>
        <Divider />
        <Typography variant="body2" gutterBottom>
          1. Follow the project architecture, don't ruin it (completely) and learn to work with it for the foreseeable
          future, it will be helpful, trust me. <br />
          You can make some tweaks, but if you're not sure, ask{' '}
          <Link href="mailto:ivan.vladimirov@novarto.com">@Ivan</Link> for a heads up.
        </Typography>
        <Typography variant="body2" gutterBottom>
          2. Use only MUI (Material-UI). Don't stylize normal html elements like divs and spans. Don't use bootstrap
          (reactstrap) - you should never install both in a single project.
        </Typography>
        <Typography variant="body2" gutterBottom>
          3. For custom styling use the sx prop (works only with MUI components), which will help you work with the
          default theme props.{' '}
          <Link href="https://mui.com/system/getting-started/the-sx-prop/" target="_blank">
            Read more
          </Link>
        </Typography>
        <Typography variant="body2" gutterBottom>
          4. If you need to have a custom component with custom stylings, make a new file with your new component.
          Adding new styles should happen with either{' '}
          <Link href="https://mui.com/system/styled/" target="_blank">
            "styled"
          </Link>{' '}
          or the sx prop
        </Typography>

        <Typography variant="h6" sx={{ mt: 2 }}>
          APIs
        </Typography>
        <Divider />

        <Typography variant="body2" gutterBottom>
          Products
          <br />
          <b>GET</b> /api/products
          <br />
          <i>query params:</i> page
          <br />
          <br />
          <b>GET</b> /api/products/:productId
          <br />
          <i>path params:</i> productId
          <br />
        </Typography> */}
      </ProductsContextProvider>
    </Container>
  )
}

export default Home
