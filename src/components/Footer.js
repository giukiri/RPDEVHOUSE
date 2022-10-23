import React from "react"
import styles from '../components/Footer.module.css'

const Footer = () => {
    return(
       <footer className= {styles.footer}>
        <p>SGI <span>Sistema de Gestão Integrada</span> &copy; 2022</p>
       </footer>
    )
}

export default Footer;