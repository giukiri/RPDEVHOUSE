import { Link } from "react-router-dom";
import styles from './produtos.module.css'

const Produto = ({produto}) => {
    return (
        <div className={styles.produto_container}>
            <img src={produto.image} alt={produto.nomeProduto} />
            <h2>{produto.nomeProduto}</h2>
            <p>{produto.preco}</p>
            <p>{produto.descricao}</p>
            <p>{produto.fornecedor}</p>
            <p>{produto.grupo}</p>
            <Link to={`/FichaProduto/${produto.id}`}/>
        </div>
    )
}

export default Produto;