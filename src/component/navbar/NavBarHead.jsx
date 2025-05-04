import React, { useState, useEffect } from 'react';
import { FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp, IoMdCall } from 'react-icons/io';
import { MdOutlineMail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    Container,
} from 'reactstrap';
import ImagePath from '../../assets/ImagePath';
import { IoCloseSharp } from 'react-icons/io5';

const navItems = [
    {
        title: "Home",
        submenu: [
            { id: 1, title: "Introduction To DIY PreFab Solutions", link: "/home/introToDiy" },
            { id: 2, title: "Key Benefits OF Prefab Construction", link: "/home/keyBenefits" },
            { id: 3, title: "Featured Projects", link: "/home/projects" },
        ],
    },
    {
        title: 'About Us',
        submenu: [
            { id: 1, title: "Introduction To DIY PreFab Solutions", link: "" },
            { id: 2, title: "Key Benefits OF Prefab Construction", link: "" },
            { id: 3, title: "Featured Projects", link: "" },
        ],
    },
    {
        title: 'Products & Services',
        submenu: [
            { id: 1, title: "Introduction To DIY PreFab Solutions", link: "" },
            { id: 2, title: "Key Benefits OF Prefab Construction", link: "" },
            { id: 3, title: "Featured Projects", link: "" },
        ],
    },
    {
        title: 'Applications',
        submenu: [
            { id: 1, title: "Introduction To DIY PreFab Solutions", link: "" },
            { id: 2, title: "Key Benefits OF Prefab Construction", link: "" },
            { id: 3, title: "Featured Projects", link: "" },
        ],
    },
    {
        title: 'Projects & Studies',
        submenu: [
            { id: 1, title: "Introduction To DIY PreFab Solutions", link: "" },
            { id: 2, title: "Key Benefits OF Prefab Construction", link: "" },
            { id: 3, title: "Featured Projects", link: "" },
        ],
    },
    {
        title: 'Blog News',
        submenu: [
            { id: 1, title: "Introduction To DIY PreFab Solutions", link: "" },
            { id: 2, title: "Key Benefits OF Prefab Construction", link: "" },
            { id: 3, title: "Featured Projects", link: "" },
        ],
    },
    {
        title: 'Careers',
        submenu: [
            { id: 1, title: "Introduction To DIY PreFab Solutions", link: "" },
            { id: 2, title: "Key Benefits OF Prefab Construction", link: "" },
            { id: 3, title: "Featured Projects", link: "" },
        ],
    },
    {
        title: 'Contact Us',
        submenu: [
            { id: 1, title: "Introduction To DIY PreFab Solutions", link: "" },
            { id: 2, title: "Key Benefits OF Prefab Construction", link: "" },
            { id: 3, title: "Featured Projects", link: "" },
        ],
    },
];

const NavBarHead = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState(null);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleMouseEnter = (index) => {
        setOpenSubmenu(index);
    };

    const handleMouseLeave = () => {
        setOpenSubmenu(null);
    };

    const handleMobileMenuClick = (e, index) => {
        e.preventDefault();
        if (mobileOpenSubmenu === index) {
            setMobileOpenSubmenu(null);
        } else {
            setMobileOpenSubmenu(index);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && isDrawerOpen) {
                setIsDrawerOpen(false);
                setMobileOpenSubmenu(null); // also close any mobile submenu
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isDrawerOpen]);

    return (
        <header>
            <div className="header-top">
                <div className="contact-info-container">
                    <Link to="mailto:info@diyprefab.com" className="contact-info-box" style={{ textDecoration: 'none' }}>
                        <MdOutlineMail className='top-header-icon' />
                        <p>info@diyprefab.com</p>
                    </Link>
                    <a href="tel:+918619015622" className="contact-info-box" style={{ textDecoration: 'none' }}>
                        <IoMdCall className='top-header-icon' />
                        <p>(+91) 8619015622</p>
                    </a>
                </div>
                <div className="contact-info-container">
                    <Link href="" className="header-social-box" style={{ textDecoration: 'none' }}>
                        <FaLinkedinIn className='top-header-social-icon' />
                    </Link>
                    <Link href="" className="header-social-box" style={{ textDecoration: 'none' }}>
                        <FaYoutube className='top-header-social-icon' />
                    </Link>
                </div>
            </div>
            {/* Main Navbar */}
            <Navbar expand="md" className="px-4 d-flex justify-content-between navbar-container">
                <NavbarBrand href="/" className='logo-image'>
                    <img src={ImagePath.Logo} alt="Logo" className='img-fluid' />
                </NavbarBrand>

                {/* Desktop Nav */}
                <div className="d-none d-lg-flex">
                    <Nav className="ml-auto" navbar>
                        {navItems.map((item, index) => (
                            <NavItem
                                key={index}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                className="position-relative mx-1 navitem-wrapper"
                            >
                                <NavLink
                                    href="#"
                                    className={`navlink-custom ${index === 0 ? 'active' : ''} d-flex align-items-center gap-1`}
                                >
                                    {item.title}
                                    <span className="arrow">{openSubmenu === index ? <IoIosArrowUp className='top-header-icon' /> : <IoIosArrowDown className='top-header-icon' />}</span>
                                </NavLink>

                                {/* Desktop Submenu */}
                                {openSubmenu === index && (
                                    <div className="submenu desktop-submenu">
                                        <Nav vertical>
                                            {item.submenu.map((subItem, subIndex) => (
                                                <NavLink tag={Link} to={subItem.link} className={({ isActive }) =>
                                                    isActive ? "submenu-link active-link" : "submenu-link"
                                                } key={subIndex.id}>
                                                    {subItem.title}
                                                </NavLink>
                                            ))}
                                        </Nav>
                                    </div>
                                )}
                            </NavItem>
                        ))}
                    </Nav>
                </div>

                {/* Hamburger for Mobile */}
                <Button className="d-lg-none nav-bar-menu-open-button" onClick={toggleDrawer}>
                    ☰
                </Button>
            </Navbar>

            {/* Drawer Sidebar for Mobile */}
            <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
                <div className='text-end'>
                    <Button onClick={toggleDrawer} className="close-btn">
                        <IoCloseSharp className='side-bar-close-btn-icon' />
                    </Button>
                </div>
                <Nav vertical className="p-4">
                    {navItems.map((item, index) => (
                        <div key={index}>
                            <NavLink href="#" onClick={(e) => handleMobileMenuClick(e, index)} className="d-flex justify-content-between align-items-center side-nav-box">
                                {item.title}
                                <span className="arrow">{mobileOpenSubmenu === index ? <IoIosArrowUp className='side-nav-bar-arrow-icon' /> : <IoIosArrowDown className='side-nav-bar-arrow-icon' />}</span>
                            </NavLink>

                            {/* Submenu for mobile with animation */}
                            <div className={`mobile-submenu ${mobileOpenSubmenu === index ? 'open' : ''}`}>
                                {item.submenu.map((subItem, subIndex) => (
                                    <NavLink tag={Link} to={subItem.link}>
                                        {subItem.title}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    ))}
                </Nav>
            </div>

            {/* Overlay */}
            {isDrawerOpen && <div className="overlay" onClick={toggleDrawer}></div>}
        </header >
    );
};

export default NavBarHead;
