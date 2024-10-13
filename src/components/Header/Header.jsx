import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link as LinkRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './header.css';

function Header() {
    const [expanded, setExpanded] = useState(false);

    const handleLinkClick = () => {
        setExpanded(false);
    };

    return (
        <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
            className="custom-navbar fixed-top py-3"
            expanded={expanded}
        >
            <Navbar.Brand id="logo-name">Portfolio</Navbar.Brand>
            <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                onClick={() => setExpanded(!expanded)}
            />
            <Navbar.Collapse id="navbarNav">
                <Nav className="me-auto navbar-nav">
                    <HashLink className="nav-bar-links" to="/#about-me" onClick={handleLinkClick}>
                        Home
                    </HashLink>
                    <HashLink className="nav-bar-links" to="/#description" onClick={handleLinkClick}>
                        About me
                    </HashLink>
                    <HashLink className="nav-bar-links" to="/#portfolio" onClick={handleLinkClick}>
                        Education
                    </HashLink>
                    <HashLink className="nav-bar-links" to="/#activity" onClick={handleLinkClick}>
                        Activity
                    </HashLink>
                    <HashLink className="nav-bar-links" to="/#contact-me" onClick={handleLinkClick}>
                        Contact
                    </HashLink>
                    {/*
                    <HashLink 
                    className="nav-bar-links"
                    as={LinkRouter}
                    to='/design-portfolio'
                    onClick={handleLinkClick}
                    >
                        
                        Project
                    </HashLink>*/}
                    
                    <HashLink 
                    className="nav-bar-links"
                    as={LinkRouter}
                    to='/certifications'
                    onClick={handleLinkClick}
                    > 
                        Certificate
                    </HashLink>
                    <HashLink 
                    className="nav-bar-links"
                    as={LinkRouter}
                    to='/transcript'
                    onClick={handleLinkClick}
                    >
                        Transcript
                    </HashLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
