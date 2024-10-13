import React from 'react';
import './styles.css'; // นำเข้าฟังก์ชัน CSS

function Navbar() {
    const handleScroll = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });

            targetElement.classList.add('highlight-effect');

            setTimeout(() => {
                targetElement.classList.remove('highlight-effect');
            }, 2000);
        }
    };

    return (
        <nav className="navbar">
            <a href="#about" className="nav-bar-links" onClick={handleScroll}>About</a>
            <a href="#portfolio" className="nav-bar-links" onClick={handleScroll}>Portfolio</a>
            <a href="#activity" className="nav-bar-links" onClick={handleScroll}>Activity</a>
            <a href="#contact" className="nav-bar-links" onClick={handleScroll}>Contact</a>
        </nav>
    );
}

export default Navbar;
