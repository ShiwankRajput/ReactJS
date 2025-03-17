import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import CreatePost, { createPostAction } from './components/CreatePost.jsx'
import PostLists, { PostLoader } from './components/PostLists.jsx'

let router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path: "/", element: <PostLists/>, loader: PostLoader},
      {path: "/create-post", element: <CreatePost/>, action: createPostAction}
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
