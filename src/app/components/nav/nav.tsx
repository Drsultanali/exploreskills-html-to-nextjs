'use client'
import Link from "next/link";
import { useState } from "react";
interface HeaderProps  {
    title?: string;
  };
 const Nav: React.FC<HeaderProps> = ({title}: HeaderProps) => {
    const [isopenMenu, setMenuOpen] = useState(false);
    const toggleMenu = () => { setMenuOpen(!isopenMenu)};
  return (
    <section className="Sub-header">
        <nav className="flex justify-center items-center h-20">
            <a href="/" className="logo mt-10">Xplore
                <i className="fab fa-staylinked"></i>kill
            </a>
            <div className="nav-links" id="navLinks" style={{right: isopenMenu ? '0': '-200%'}}>
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
        <h1>{title}</h1>
    </section>
  )
}
export default Nav;


