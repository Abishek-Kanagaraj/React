import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './home'
// import About from './about'

import Nav from './nav'
import PageNotFound from './404Page'
import OrderSummary from './orderSummary'
import Products from './products'
import Featured from './featured'
import New from './new'
import Profile from './profile'
import AuthProvider from './auth'
import Login from './login'
import RequireAuth from './requireAuth'
const LazyAbout = React.lazy(() => import('./about'))

export default function Routing() {
    return (
        <>
            <AuthProvider>
                <Nav />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={
                        <React.Suspense fallback="loading...">
                            <LazyAbout />
                        </React.Suspense>} />
                    <Route path='/orderSummary' element={<OrderSummary />} />
                    <Route path='/*' element={<PageNotFound />} />
                    <Route path='/products' element={<Products />}>
                        <Route index element={<Featured />} />
                        <Route path='featured' element={<Featured />} />
                        <Route path='new' element={<New />} />
                    </Route>
                    <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} />
                    <Route path='/login' element={<Login/>} />


                </Routes>
            </AuthProvider>

        </>
    )
}