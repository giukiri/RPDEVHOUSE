import { Link } from "react-router-dom";
import Produto from "../../components/produtos";
import { useFetchProdutos } from "../../hook/useFetchProdutos";
import { useQuery } from "../../hook/useQuery";
import styles from '../search/search.module.css'

const Search =() => {
    const query = useQuery();
    const search = query.get('q')

    const {documents: FichaProduto} = useFetchProdutos('FichaProduto',search)

    return(
        <div className={styles.pesquisa}>
            <h2>Search</h2>
            <div>
                {FichaProduto && FichaProduto.length === 0 &&(
                    <div>
                        <span>Não existem produtos com essas especificações</span>
                        <Link to='/listaProduto' className="btn">Voltar</Link>
                    </div>
                )}
                {FichaProduto && FichaProduto.map((produto)=>(
                    <Produto key={produto.id} produto={produto}/>
                ))}
            </div>
        </div>
    )
}

export default Search;