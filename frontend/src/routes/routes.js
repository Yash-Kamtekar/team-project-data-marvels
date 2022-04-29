import React from 'react';

function getRoutes() {
    // const Hotel = React.lazy(() => import('../pages/hotels/index'))
    // const BookingMgmt = React.lazy(() => import('../pages/bookingmgmt/index'))

    const Home = React.lazy(() => import('../pages/home/index'))
    const Cart = React.lazy(() => import('../pages/cart/index'))
    const Room = React.lazy(() => import('../pages/Room/index'))
    const Hotel = React.lazy(() => import('../pages/Hotel/index'))
    const Reservations = React.lazy(() => import('../pages/reservations/index'))

    let routes = [
        // { path: '/app/hotels', name: 'Hotel', component: Hotel },
        // { path: '/app/bookingmgmt', name: 'Booking Management', component: BookingMgmt },

        { path: '/app/home', name: 'Home', component: Home },
        { path: '/app/cart', name: 'Cart', component: Cart },
        { path: '/app/reservations', name: 'Reservations', component: Reservations },
        { path: '/app/hotel/:hotelid', name: 'Hotel', component: Hotel },
        { path: '/app/room/:hotelid', name: 'Room', component: Room }
    ]

    return routes
}

export default getRoutes