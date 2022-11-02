# E-commerce



## Getting started

1. Clone this project
2. Open the project with your desired IDE and run "npm install"
3. CD into "./frontend" folder and run "npm install"
4. Run backend first with "npm run dev"
5. Run frontend with "npm start"
6. Register your account on http://localhost:3000/register
7. Start coding!

## Task

TLDR: Create an online store using the provided API.

_The store is "locked" by default. You need to be a user to see the products. The authentication part has already been done for you. I strongly advise you to check everything auth related, since it uses key concepts like context, reducers, hooks, etc._

- On the home page (this page) you should fetch all products and display them in a grid (hint: MUI component) system. You fetch only a few products. Use pagination to navigate between pages.
- If you click on a certain product you should be able to navigate to a product page where you see all the data of the product (description, ratings, comments, etc). For this you need to create a dynamic route. (First code the product list page, then the shopping cart and lastly the product page)
- Also you need to create a shopping cart with full functionalities - change quantity of a product/products, delete product, show final price, show prices of all products (multiplied by quantity of the product). You can make a new page for the cart or the MUI Drawer component. You need a new context for the cart.
- Later on we will create a checkout page and overall a finalized and designed version of the store

## Tips

- Follow the project architecture, don't ruin it (completely) and learn to work with it for the foreseeable future, it will be helpful, trust me. You can make some tweaks, but if you're not sure, ask @ivanvladimirov
- Use only MUI (Material-UI). Don't stylize normal html elements like divs and spans. Don't use bootstrap (reactstrap) - you should never install both in a single project
- For custom styling use the sx prop (works only with MUI components), which will help you work with the default theme props. [Read more](https://mui.com/system/getting-started/the-sx-prop/)
- If you need to have a custom component with custom stylings, make a new file with your new component. Adding new styles should happen with either ["styled"](https://mui.com/system/styled/) or the sx prop

## APIs

`GET /api/products`
query params: _page, productsPerPage_

`GET /api/products/:productId`
path params: _productId_

### Good luck!
