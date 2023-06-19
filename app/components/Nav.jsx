import Link from 'next/link'

function Nav() {
    return (
       <>
         <nav className="nav">
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
         </nav>
       </> 
    )
}

export default Nav