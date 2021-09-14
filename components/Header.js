import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/job-img.jpg'
const Header = () => {
    return (
        <div className="nav-bar">
            <nav>
                <Link href="/">
                    <a>
                        <Image src={logo} width={50} height={50} className="logo" />
                    </a>
                </Link>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/jobs">
                            <a>Jobs</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
