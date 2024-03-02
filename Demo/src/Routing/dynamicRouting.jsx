import React from 'react'
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import User from './user'

export default function DynamicRouting() {
    const details = [
        { id: 1, name: 'Abishek' },
        { id: 2, name: 'Manoj' },
        { id: 3, name: 'Akash' },
        { id: 4, name: 'Sherjeel' }
    ]
    return (
        <div>

            <Router>
                <h1>Dynamic Routing</h1>
                {
                    details.map((item) => {
                        return (
                            <div>
                                <Link key={item.id} to={'/user/' + item.id+'/'+item.name}>{item.name}</Link>
                            </div>
                        )
                    })
                }
                <Routes>
                    <Route path='/user/:id/:name' element={<User />}></Route>
                </Routes>
            </Router>
        </div>
    )
}
