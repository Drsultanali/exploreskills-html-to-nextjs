'use client'
import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <section className="header">
        <nav>
            <a href="index.html" className="logo">Xplore
                <i className="fab fa-staylinked"></i>kill
            </a>
            <div className="nav-links" id="navLinks" style={{right: menuOpen ? '0' : '-200%'}}>
                <i className="fa fa-times" onClick={toggleMenu}></i>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/course">Course</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <i className="fa fa-bars" onClick={toggleMenu}></i>
        </nav>

        <div className="text_box">
            <h2>GET READY</h2>
            <p id="headtext">TO DISCOVER CAMPUS</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
                <br /> esse blanditiis in quae perspiciatis quo.
            </p>
            <a href="#" className="hero_btn">Visit Us To Know More</a>
        </div>
        </section>
  )
}

export default Navbar;