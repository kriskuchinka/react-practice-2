'use client'

import Link from 'next/link'
// import { Parallax } from 'react-scroll-parallax'


function Header() {
    return (
    <>
        {/* <Parallax speed={-20}>      */}
            <img src='/logo.webp' className="nav-logo" />

            <nav className="nav">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        {/* </Parallax> */}
    </> 
    )
}

export default Header