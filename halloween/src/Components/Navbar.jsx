import { useState } from "react";
export default function Navbar() {

    const [activePath, setActivePath] = useState(window.location.pathname);

    const handleClick = (e) => {
        setActivePath(e.target.pathname);
    }

    return (
        <nav>
            <ul>
                <li><a className={activePath === "/filmek" ? "flinks" : "nlinks"} onClick={handleClick} href="/filmek">Halloween Franchise</a></li>
                <li><a className={activePath === "/" ? "flinks" : "nlinks"} onClick={handleClick} href="/">Fooldal</a></li> 
                <li><a className={activePath === "/unnep" ? "flinks" : "nlinks"} onClick={handleClick} href="/unnep">Halloween unnep</a></li>
            </ul>
        </nav>
    );
}