import { useNavigate } from "react-router-dom"

import "./Menu.css"

export default function Menu() {
    const navigate = useNavigate()

    return (
        <nav className="Menu">

            <button
                className="MenuItem"
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
                className="MenuItem"
                onClick={() => navigate("/profile")}
            >
                <span>Profile</span>
            </button>

        </nav>
    )
}