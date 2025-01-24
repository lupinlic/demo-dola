//public routes
import Home from "../pages/User/Home";
import ProductDetails from "../pages/User/ProductDetails";
import Cart from "../pages/User/Cart";
import Pay from "../pages/User/Pay";
import Thanks from "../pages/User/Thanks";
import Bookings from "../pages/User/Bookings";

const publicRoutes = [
    {
        path: '/', component: Home
    },
    {
        path: '/ProductDetails', component: ProductDetails
    },
    {
        path: '/Cart', component: Cart
    },
    {
        path: '/Pay', component: Pay
    },
    {
        path: '/Thanks', component: Thanks
    },
    {
        path: '/Bookings', component: Bookings
    },




];

const privateRoutes = [];

export {
    publicRoutes, privateRoutes
};