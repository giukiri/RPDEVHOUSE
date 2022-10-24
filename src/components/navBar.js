import React from "react"
import styles from '../components/navBar.module.css'
import { NavLink } from "react-router-dom"
import { useAuth } from "../hook/autentificacao"
import { useAuthValue } from "../context/auth"


const NavBar = () => {
    const {usuario} = useAuthValue();
    const {logout} = useAuth();
    return(
        <div>
           <nav className={styles.navBar}>
                <NavLink to={'/Home'} className={styles.brand}>
                   <span>SGI</span>
                </NavLink>
                <ul className={styles.lista}>
                    <li>
                        <NavLink to={'/'}>
                        Entrar
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/Home'}>
                        Mapa
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/criarProduto'}>
                            Cadastrar Produto
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/listaProdutos'}>
                            Lista de produtos cadastrados
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/cadastro'}>
                           Registre sua empresa
                        </NavLink>
                    </li>
                    {usuario && (
                        <li>
                            <button onClick={logout}>Sair</button>
                        </li>
                    )}
                </ul>
           </nav>

        </div>
    )
}

export default NavBar