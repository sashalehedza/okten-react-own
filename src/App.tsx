import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import UsersPage from './pages/users/UsersPage'
import PostsPage from './pages/PostsPage'
import CustomErrorLayout from './layouts/CustomErrorLayout'
import HomePage from './pages/HomePage'
import TodosPage from './pages/TodosPage'
import TodoPage from './pages/TodoPage'

let router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <CustomErrorLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'users', element: <UsersPage /> },
      { path: 'posts', element: <PostsPage /> },
      {
        path: 'todos',
        element: <TodosPage />,
        children: [{ path: ':id', element: <TodoPage /> }],
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
