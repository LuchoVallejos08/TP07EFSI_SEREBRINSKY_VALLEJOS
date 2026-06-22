import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar"

import Home from "./components/Home"
import Account from "./components/Account"

import type { PostData } from "./types/PostData"

import "./App.css"


function App() {
    const [posts, setPosts] = useState<PostData[]>([])

    return (
        <div className="App">
    <NavBar />

    <main className="MainLayout">
        <SideBar />

        <div className="PageContent">
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
        </div>
    </main>
</div>
    )
}

export default App;