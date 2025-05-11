import { useEffect, useState } from "react";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
// import AboutClass from "./src/components/AboutClass";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import ContactUs from "./src/components/ContactUs";
import Error from "./src/components/Error";
import RestaurantCard from "./src/components/RestaurantCard";
// import RestaurantMenu from "./src/components/RestaurantMenu";
import RestaurantMenuFixed from "./src/components/RestaurantMenuFixed";
import DefaultData from "./src/components/DefaultData";
import userContext from "./src/utils/userContext";
// import Grocery from "./src/components/Grocery";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name:  "Ajith U",
    };
    setUserName(data.name);
  });

  return (
    <Provider store={appStore} >
    <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </userContext.Provider>
    </Provider>
  );
};

const Grocery = lazy(() => import("./src/components/Grocery"));

const AboutUs = lazy(() => import("./src/components/AboutClass"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<DefaultData />}>
            {" "}
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "restmenu/:resId",
        // element :  <RestaurantMenu />
        element: <RestaurantMenuFixed />,
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<h1>Loading...!</h1>}>
            {" "}
            <Grocery />
          </Suspense>
        ),
      },

      {
        path : '/cart',
        element : <Cart />
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
