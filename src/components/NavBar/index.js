import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import {
    Container,
    Nav,
    Navbar,
    Button,
} from 'react-bootstrap';
import {
    HELP_ROUTE,
    HOME_ROUTE,
    CHECK_ROUTE,
    RULES_ROUTE,
    CONTACT_ROUTE
} from '../../utils/consts';
import CustomSelect from '../Select';

const options = [
    { value: 'en', label: 'EN' },
    { value: 'ru', label: 'RU' },
    { value: 'ua', label: 'UA' }
]

const routes = [
    {
        path: HOME_ROUTE,
        name: 'Home'
    },
    {
        path: CHECK_ROUTE,
        name: 'Check'
    },
    {
        path: RULES_ROUTE,
        name: 'Rules'
    },
    {
        path: HELP_ROUTE,
        name: 'Help'
    },
    {
        path: CONTACT_ROUTE,
        name: 'Contact'
    },
]

function NavBar({ handleLanguageChange, language }) {
    const Links = routes.map((item, index) => {
        return (
            <NavLink
                key={index}
                to={item.path}
                className="ms-2 me-2 text-decoration-none text-reset"
            >
                { item.name }
            </NavLink>
        )
    });

    const handleChange = (e) => handleLanguageChange(e.value);

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand to="/" className="me-auto">
                    Crypto
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        { Links }
                    </Nav>
                </Navbar.Collapse>
                <div className="d-flex align-items-center">
                    <CustomSelect options={options} handleChange={handleChange} defaultVal={language}/>
                    <Button className="ms-2">
                        Sign in
                    </Button>
                </div>
            </Container>
        </Navbar>
    );
}

export default NavBar;