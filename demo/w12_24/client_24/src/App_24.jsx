
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


import {HomeLayout_24,HomePage_24} from './pages';

import {Mid1SupaBlog_24,Mid2NodeBlog_24}from './pages/mid1_24'
import SupaGetBlog_24 from './pages/demo_xx/SupaGetBlog_24';




const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:1000 * 60 * 5,
    },
  }
});
const router =createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout_24/>,
    children:[
      {
        index: true,
        element: <HomePage_24/>
      },
      {
        path :'mid1blog_24',
        element:<Mid1SupaBlog_24/>
      },
      {
        path :'mid2blog_24',
        element:<Mid2NodeBlog_24/>
      },
      {
        path :'demoGetblog_24',
        element:<SupaGetBlog_24/>
      }
    ]
  }
])

const App_24 = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>
   
  )
   // <BrowserRouter>
    //   <Routes>
    //     <Route exact path='/' element={<HomePage_xx />} />
    //     <Route path='/mid2Blog_xx' element={<Mid2NodeBlog_xx />} />
    //     <Route path='/mid1Blog_xx' element={<Mid1SupaBlog_xx />} />
    //     <Route path='/demoGetBlog_xx' element={<SupaGetBlog_xx />} />
    //   </Routes>
    // </BrowserRouter>
};

export default App_24;
