import React, { useState, useRef, useEffect, useContext } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Icon from './Icon';
import {Web3Context} from '../web3/contexts/web3Context'
import logo from '../assets/rebackLogo.svg'

const Header = () => {
    const { networkDetails, handleConnect, resetApp } = useContext(Web3Context)
    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    });
    const location = useLocation();
    const collapse = useRef();
    const [navExpanded, setNavExpanded] = useState(false);
    const handleClickOutside = (e) => {
        if (collapse && collapse.current) {
            const ref = collapse.current;
            if (!ref.contains(e.target)) {
                setNavExpanded(false);
            }
        }
    };

    useEffect(() => {
        
    }, [])

    return (<>
        <header className="fixed-top">
            <Navbar bg="transparent" variant="dark" expand="lg" expanded={navExpanded}>
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src={logo} /></Navbar.Brand>
                </Container>
            </Navbar>
        </header>
    </>)
}
export default Header