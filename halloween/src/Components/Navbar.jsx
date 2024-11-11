import { useState } from "react";
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Github } from 'lucide-react';
import { Mail } from 'lucide-react';


export default function Navbar() {
    

    const [activePath, setActivePath] = useState(window.location.pathname);

    const handleClick = (e) => {
        setActivePath(e.target.pathname);
    }
    

    return (
        <>
        <nav>
            <ul>
                <li><a className={activePath === "/filmek" ? "flinks" : "nlinks"} onClick={handleClick} href="/filmek">Halloween Franchise</a></li>
                <li><a className={activePath === "/" ? "flinks" : "nlinks"} onClick={handleClick} href="/">Fooldal</a></li> 
                <li><a className={activePath === "/unnep" ? "flinks" : "nlinks"} onClick={handleClick} href="/unnep">Halloween unnep</a></li>
            </ul>
            <ul className="icons">
                <a href="openTwoPages"><Facebook color="red" size={35}/></a>
                <a href=""><Instagram color="red" size={35}/></a>
                <a href=""><Github color="red" size={35}/></a>
                <a href=""><Mail color="red" size={35}/></a><a href=""></a>
            </ul>
           
        </nav>
        </>
     
    );
}