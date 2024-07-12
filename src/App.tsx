import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import UsersPage from './pages/users/UsersPage'
import PostsPage from './pages/posts/PostsPage'
import CommentsPage from './pages/comments/CommentsPage'
import CustomErrorLayout from './layouts/CustomErrorLayout'
import HomePage from './pages/HomePage'
import SingleUserPage from './pages/users/SingleUserPage'
import UserPostsPage from './pages/users/UserPostsPage'

let router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <CustomErrorLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'users', element: <UsersPage /> },
      { path: 'users/:id', element: <SingleUserPage /> },
      { path: 'posts', element: <PostsPage /> },
      { path: 'comments', element: <CommentsPage /> },
      { path: 'user/:id/posts', element: <UserPostsPage /> },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
