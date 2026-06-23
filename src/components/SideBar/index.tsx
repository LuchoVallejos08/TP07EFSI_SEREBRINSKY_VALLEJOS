import AccountInfo from "./AccountInfo"
import Menu from "./Menu"

import "./SideBar.css"



export default function SideBar() {
    return (
        <aside className="SideBar">
            <AccountInfo />
            <Menu />
        </aside>
    )
}