import "./AccountInfo.css"
import { useNavigate } from "react-router-dom"
import logoPerfil from '../../../assets/mujer.jfif'

export default function AccountInfo() {
    const navigate = useNavigate()

    return (
        
    <div onClick={() => navigate("/profile")}>
        <div className="AccountInfo">
    <img
        src={logoPerfil}
        alt="profile"
        className="AccountInfo__image"
    />

    <h2>Nao Sere</h2>

    <p>@nao_sere</p>

    <div className="AccountInfo__stats">
        <div>
            <strong>121K</strong>
            <span>Followers</span>
        </div>

        <div>
            <strong>900K</strong>
            <span>Likes</span>
        </div>
    </div>
</div>
        </div>
    )
}