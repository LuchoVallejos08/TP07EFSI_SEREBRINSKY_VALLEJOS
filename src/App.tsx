import './App.css'
import NavBar from "./components/NavBar"
// import SideBar from "./components/SideBar"
import Home from "./components/Home"

function App() {

    return (
        <div className="App">
            {/* Barra superior — ya terminada */}
            <NavBar />

            <div className="MainLayout">
                {/*
                    SIDEBAR — Componente a cargo de NAO
                    - Ancho fijo definido en SideBar.css con --sidebar-width
                    - Debe incluir: foto de perfil, nombre, stats (followers/likes),
                      y el menú de navegación (Home, Explore, Reels, IGTV, Notification)
                    - Ver imagen de referencia para el diseño visual completo
                    - El layout ya está pensado para que ocupe el espacio
                      a la izquierda con position: sticky
                */}
                {/* <SideBar /> -- ACA VA SIDEBAR*/}

                {/* Contenido principal: Stories + Trending */}
                <Home />
            </div>
        </div>
    )
}

export default App