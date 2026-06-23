import { useNavigate, useLocation } from "react-router-dom"

import "./Menu.css"

export default function Menu() {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <nav className="Menu">

            <button
                className={`MenuItem ${location.pathname === "/" ? "active" : ""}`}
                onClick={() => navigate("/")}
            >
                <span>Home</span>
            </button>

            <button className="MenuItem">
                <span>Explore</span>
            </button>

            <button className="MenuItem">
                <span>Reels</span>
            </button>

            <button className="MenuItem">
                <span>IGTV</span>
            </button>

            <button className="MenuItem">
                <span>Notifications</span>
            </button>

            <button
                className={`MenuItem ${location.pathname === "/profile" ? "active" : ""}`}
                onClick={() => navigate("/profile")}
            >
                <span>Profile</span>
            </button>

        </nav>
    )
}