import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreateProduct from './Page/CreateProduct.jsx';
import Home from './Page/Home.jsx';
import { ProductDataProvider } from './Context/Storeproduct.jsx';
import UpdateProduct from './Page/UpdateProduct.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[{
      path:"/",
      element:<Home/>
    },
    {
      path:"/createCard",
      element:<CreateProduct/>
    },
    {
      path:"/updateProduct/:id",
      element:<UpdateProduct/>
    },]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductDataProvider>

    <RouterProvider router={router} />
    </ProductDataProvider>
  </StrictMode>,
)
