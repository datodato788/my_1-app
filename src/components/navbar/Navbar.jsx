"use client"; // This directive ensures the component is a Client Component

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

function Navbar() {
  const pathname = usePathname();

  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <Link href="/" passHref legacyBehavior>
          <h1>FbDatos.ge</h1>
        </Link>
      </div>
      <div className={styles.nav}>
        <ul>
          
          <div className={styles.li}>
            <li>
              <Link href="../../app/User.jsx" passHref legacyBehavior>
                <a className={pathname === "/user" ? styles.active : ""}>
                  User
                </a>
              </Link>
            </li>
          </div>
          <div className={styles.li}>
            <li>
              <Link href="/about" passHref legacyBehavior>
                <a className={pathname === "/about" ? styles.active : ""}>
                  About
                </a>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
