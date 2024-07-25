import styles from "./navbar.module.css";
import Link from "next/link";
import React from "react";

function Navbar() {
  return <div className={styles.main}> <h1 className={styles.logo}>DATO GOGIA</h1></div>;
}

export default Navbar;
