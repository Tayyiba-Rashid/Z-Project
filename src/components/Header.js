import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.topnav} ${menuOpen ? styles.responsive : ""}`}>
        <button className={styles.toggle} onClick={toggleMenu}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={menuOpen ? faTimes : faBars}
          />
        </button>
        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
