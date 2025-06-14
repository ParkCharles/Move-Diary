/**
 * Root component that defines the application structure and routes
 */
import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/components/Layout'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { HowTo } from '@/pages/HowTo'
import { Hiking } from '@/pages/Hiking'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'how-to', element: <HowTo /> },
      { path: 'hiking', element: <Hiking /> }
    ]
  }
]) 