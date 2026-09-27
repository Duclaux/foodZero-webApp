import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Menu from "./pages/Menu"
import Contact from "./pages/Contact"
import Blogs from "./pages/Blogs"
import Portfolio from "./pages/Portfolio"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {path: '/', element: <Home />},
      {path: '/about', element: <About />},
      {path: '/menu', element: <Menu />},
      {path: '/contact', element: <Contact />},
      {path: '/blogs', element: <Blogs />},
      {path: '/portfolio', element: <Portfolio />},
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
