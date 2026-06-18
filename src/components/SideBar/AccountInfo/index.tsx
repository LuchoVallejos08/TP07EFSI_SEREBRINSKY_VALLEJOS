import "./AccountInfo.css"
import { useNavigate } from "react-router-dom"

export default function AccountInfo() {
    const navigate = useNavigate()

    return (
        
    <div onClick={() => navigate("/profile")}>
        <div className="AccountInfo">
            <img
                src="https://i.pravatar.cc/200"
                alt="profile"
                className="AccountInfo__image"
            />

            <h2>Nao Sere</h2>

            <p>@nao_sere</p>

            <div className="AccountInfo__stats">
                <div>
                    <strong>121K</strong>
                </div>

                <div>
                    <strong>900K</strong>
                </div>
            </div>
        </div>
        </div>
    )
}