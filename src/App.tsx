import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar"

import Home from "./components/Home"
import Account from "./components/Account"

import type { PostData } from "./types/PostData"

function App() {

    const [posts, setPosts] = useState<PostData[]>([])
    console.log("APP:", posts.length)
    return (
        <div className="App">
            <NavBar />

            <Routes>
                <Route
                    path="/"
                    element={<Home posts={posts} setPosts={setPosts} />}
                />

                <Route
                    path="/profile"
                    element={<Account posts={posts} />}
                />
            </Routes>

            <SideBar />
        </div>
    )
}

export default App