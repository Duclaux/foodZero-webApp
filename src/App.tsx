import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Menu from "./pages/Menu"
import Contact from "./pages/Contact"
import Blogs from "./pages/Blogs"
import Portfolio from "./pages/Portfolio"
import NotFoundPage from "./pages/NotFoundPage"
import BlogPost from "./pages/BlogPost"
import PortfolioDetail from "./pages/PortfolioDetail"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {path: '/', element: <Home />},
      {path: '/about', element: <About />},
      {path: '/menu', element: <Menu />},
      {path: '/contact', element: <Contact />},
      {path: '/blogs', element: <Blogs />},
      {path: '/blogs/:id', element: <BlogPost />},
      {path: '/portfolio', element: <Portfolio />},
      {path: '/portfolio/:id', element: <PortfolioDetail />},
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
