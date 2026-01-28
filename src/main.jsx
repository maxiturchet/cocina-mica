import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout.jsx'
import { Nosotros } from './pages/Nosotros.jsx'
import { Milanesas } from './pages/Milanesas.jsx'
import { Inicio } from './components/Inicio.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Inicio />,
      },
      {
        path: "/nosotros",
        element: <Nosotros />,
      },
      {
        path: "/milanesas",
        element: <Milanesas />,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
