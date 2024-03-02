import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './home'
import About from './about'
import Nav from './nav'
import PageNotFound from './404Page'

export default function Routing() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/*' element={<PageNotFound/>} />
            </Routes>

        </>
    )
}