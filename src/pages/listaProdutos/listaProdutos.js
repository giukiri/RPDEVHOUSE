import react from 'react'
import styles from '../listaProdutos/ListaProdutos.module.css'
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Produto from '../../components/produtos';
import { useFetchProdutos } from '../../hook/useFetchProdutos';

const ListaProdutos = () => {

    const [query, setQuery] = useState ('');
    const {documents: FichaProduto, loading} = useFetchProdutos('FichaProduto') ;
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDfault();

        if (query){
            return navigate(`/search?q=${query}`);
        }
    }
    return(
        <div className={styles.listaProduto}>
            <h1 className={styles.titulo}>Produtos</h1>
            <form onSubmit={handleSubmit} className={styles.formPesquisa}>
                <input type='text' placeholder='busque por um produto' onChange={(e) => setQuery(e.target.value)}/>
                <button className={styles.btn_search}>Pesquisar</button>
            </form>
            <div className={styles.containerProduto}>
                {loading && <p>CARREGANDO</p>}
                {FichaProduto && FichaProduto.map((produto)=> <Produto produto={produto}/>)}
                {FichaProduto && FichaProduto.length === 0 &&(
                    <div className={styles.nenhumProduto}>
                        <p>Não forma encontrados produtos registrados no sistema</p>
                        <Link to='/criarProduto'>Adicionar Produto</Link>
                    </div>
                )}
            </div>
        </div>
    )
}
export default ListaProdutos;