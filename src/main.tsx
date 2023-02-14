import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';

import App from './App'
import './index.css'
import { MantineProvider } from '@mantine/core';
import Landing from './components/landing/Landing';
import NotFoundTitle from './components/error/NotFoundTitle';
import Product from './components/product/Product';
import Category from './components/categories/Category';
import mainLoader from './services/mainLoader';

const router = createHashRouter([
  {
    element: <App />,
    errorElement: <NotFoundTitle></NotFoundTitle>,
    id: "root",
    children: [
      {
        path: "/",
        loader: mainLoader,
        element: <Landing></Landing>,
      },
      {
        path: 'product/:productId',
        loader: async ({ params }) => {
          return fetch(`https://fakestoreapi.com/products/${params.productId}`)
        },
        element: <Product></Product>,
      },
      {
        path: "category/:categoryName",
        loader: async ({ params }) => {
          if (params.categoryName === 'all') {
            return fetch(`https://fakestoreapi.com/products`)
          }
          else {
            return fetch(`https://fakestoreapi.com/products/category/${params.categoryName}`)
          }
        },
        element: <Category></Category>,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        primaryColor: 'violet'
      }}
    >
      <RouterProvider router={router}></RouterProvider>
    </MantineProvider>
  </React.StrictMode>,
)
