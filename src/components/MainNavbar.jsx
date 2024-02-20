import React, { useState } from "react";
import "../style/mainNavbar.scss"
import { Link } from 'react-scroll';

const MainNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
        <nav>
            <Link to="charterContainer" smooth={true} duration={500} className="navButton">Croisières</Link>
            <Link to="bateauContainer" smooth={true} duration={500} className="navButton">Le Bateau</Link>
            <Link to="tarifContainer" smooth={true} duration={500} className="navButton">Tarifs</Link>
            <Link to="contactContainer" smooth={true} duration={500} className="navButton">Contact</Link>
        </nav>
        </>
    )
}

export default MainNavbar;