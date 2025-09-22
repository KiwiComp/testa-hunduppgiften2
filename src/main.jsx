import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router'
import StartPage from './pages-both/StartPage.jsx'
import AllDogsPage from './pages-both/AllDogsPage.jsx'
import AllOwnersPage from './pages-both/AllOwnersPage.jsx'
import ContactPage from './pages-both/Contact.jsx'


const router = createHashRouter([
  {
    path: "/",
    Component: App,
    children: [
      {index: true, Component: StartPage},
      {path: "/all-dogs", Component: AllDogsPage},
      {path: "/all-owners", Component: AllOwnersPage},
      {path: "/contact", Component: ContactPage}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
