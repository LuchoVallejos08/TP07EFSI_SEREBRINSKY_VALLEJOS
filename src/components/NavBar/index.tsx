// NavBar.tsx
import Logo from "./Logo"
import SearchBar from "./SearchBar"
import Actions from "./Actions"
import "./NavBar.css"

const NavBar = () => {

    return (
        <div className="NavBar">
            <Logo />
            <SearchBar />
            <Actions />
        </div>
    )
}

export default NavBar