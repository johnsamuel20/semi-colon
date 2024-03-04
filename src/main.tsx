import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Form from './Pages/Form/Form.tsx'
import SmoothScroll from './Components/SmoothScroll/SmoothScroll.tsx'



const router = createBrowserRouter([
  {
    path: '/semi-colon',
    element: <App />,
  },
  {
    path: '/form',
    element: (
      <SmoothScroll>
        <Form />
      </SmoothScroll>
    ),
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
