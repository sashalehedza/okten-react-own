import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import UsersPage from './pages/users/UsersPage'
import PostsPage from './pages/posts/PostsPage'
import CommentsPage from './pages/comments/CommentsPage'
import CustomErrorLayout from './layouts/CustomErrorLayout'
import HomePage from './pages/HomePage'

let router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <CustomErrorLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'users', element: <UsersPage /> },
      { path: 'posts', element: <PostsPage /> },
      { path: 'comments', element: <CommentsPage /> },
      // {
      //   path: 'todos',
      //   element: <TodosPage />,
      //   children: [{ path: ':id', element: <TodoPage /> }],
      // },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
