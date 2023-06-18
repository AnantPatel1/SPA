import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Product from "./Pages/Product";
import RootLayout from "./Pages/RootLayout";
import ErrorPage from "./Pages/ErrorPage";
import ProductDetails from "./Pages/ProductDetails";
// https://example.com/products  then here example.com is domain and path is products
// path is something after domain, if nothing is written after domain then it is /

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//   <Route path="/" element= {<HomePage />} />,
//   <Route path="/products"  element= {<Product />} />
//   </Route>
// );

const sendrouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <Product /> },
      { path: "/products/:productId", element: <ProductDetails /> },
      // if index: true is set up then it simply means that its an default page which will open if cuurently the same path is active
      // the part after colon indicates a dynamic part that keeps on changing as per the required data
      // if you have / before something then it certainly means its an absolute path or else if nothing is specified then it is an relative path
    ],
  },
  // here the layout is the parent of HomePage and product routes..
]);
// it accepts the object that has certain properties like path and element
// path is the path of the object after domain, once it gets path, the createBrowserRouter gets active
// element is where or which page you want to load

// const sendrouter = createBrowserRouter(routeDefinitions)

function App() {
  // To tell that createBrowserRouter to be used RouterProvider is used
  return <RouterProvider router={sendrouter} />;
}

export default App;
