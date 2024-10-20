
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout'
import Categories from './pages/categories'
import Category from './pages/category'
import Home from './pages/home'
import Product from './pages/product'
import Products from './pages/products'
import About from './pages/about'
import Contact from './pages/contact'
import NotFound from './pages/not-found'
import SignUpPage from './pages/sign-up'
import SignInPage from './pages/sign-in'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home/> },
        { path: "categories",  children: [
          { index: true, element: <Categories/> },
          { path: ":slug", element: <Category/> },
        ]},
        { path: "products" , children: [
          { index: true, element: <Products/> },
          { path: ":id", element: <Product/> },
        ]},
        { path: "about", element: <About/> },
        { path: "sign-up/*", element:<SignUpPage/> },
        { path: "sign-in/*", element:<SignInPage/> },
        { path: "contact", element: <Contact/> },
      ]
    },
    {
      path: "*",
      element: <NotFound/>
    }
  ])


  return (
    <RouterProvider  router={router} />
  )
}

export default App
