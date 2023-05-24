import React from 'react'
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
const Navbar = () => {
  return (
    <nav>
    <div className={styles.mainNav}>
      <ul  >
      <li>
    <Link href="/">Home</Link>
  </li>
  <li>
    <Link href="/about">About Us</Link>
  </li>
  <li>
    <Link href="/contact">Contact Us</Link>
  </li>
  <li>
    <Link href="/blog/post">Blog Post</Link>
  </li>
        </ul>
    </div>
  </nav>
  )
}

export default Navbar