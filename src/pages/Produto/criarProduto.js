import styles from '../Produto/criarProduto.module.css'
import { useState } from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
import { useAuthValue } from '../../context/auth'
import { UseinsertDocument } from '../../hook/inserirProduto'
import '../CSS/index.css'

const CriarProduto = () => {
    const [nomeProduto,setNomeProduto] = useState('');
    const [urlProduto,setUrlProduto] = useState('');
    const [preco,setPreco] = useState('');
    const [descricao, setDescricao] = useState('');
    const [fornecedor,setFornecedr] = useState('');
    const [grupo,setGrupo] = useState('');
    const [formError,setFormError] =useState('');
   
    const {usuario} = useAuthValue();
    const {insertDocument,response} = UseinsertDocument('FichaProduto');
    const navigate = useNavigate()


    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormError("");

        // try {
        //     new URL(Image)
        // } catch(error) {
        //     setFormError("A imagem precisa ser disponibilizada a partir de uma URL")
        // }

        if(formError) return;
        
        insertDocument({
            nomeProduto,
            urlProduto,
            preco,
            descricao,
            fornecedor,
            grupo,
            uid: usuario.uid,
        })

        navigate('/listaProdutos');

    }

    return(
        <div className={styles.criarProduto}>
            <h2>Crie uma ficha </h2>
            <h3>e cadastre seu produto!</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Nome do Produto</p>
                    <input 
                    required
                    placeholder='Informe o nome do seu produto'
                    type='text'
                    value={nomeProduto}
                    onChange = {(e)=> setNomeProduto(e.target.value)}
                    />
                </label>
                <label>
                    <p>Url da imagem do seu Produto</p>
                    <input 
                    required
                    placeholder='Informe a url do seu produto'
                    type='text'
                    value={urlProduto}
                    onChange = {(e)=> setUrlProduto(e.target.value)}
                    />
                </label>
                <label>
                    <p>Preço do Produto</p>
                    <input 
                    required
                    placeholder='Informe o preço de um unidade do seu produto'
                    type='text'
                    value={preco}
                    onChange = {(e)=> setPreco(e.target.value)}
                    />
                </label>
                <label>
                    <p>Descrição do Produto</p>
                    <textarea 
                    type='text' 
                    placeholder='Descreva as carateristicas do seu produto em 500 caracteres'
                    maxLength={500}
                    rows='8'
                    cols='10'
                    value={descricao}
                    onChange = {(e)=> setDescricao(e.target.value)}
                    >
                    </textarea>
                </label>
                <label>
                    <p>Fornecedor</p>
                    <select
                     value={fornecedor}
                     onChange = {(e)=> setFornecedr(e.target.value)}
                    >
                        <option></option>
                        <option>Sony</option>
                        <option>Microsoft</option>
                        <option>Nintendo</option>
                        <option>Ea Games</option>
                        <option>Google</option>
                        <option>Activision Blizard</option>
                        <option>Konami</option>
                        <option>Apple</option>
                        <option>Meta</option>
                        <option>Disney</option>
                        <option>Epic Games</option>
                        <option>Take-Two</option>
                        <option>Cd-Projekt</option>
                        <option>Square Enix</option>
                        <option>Outro</option>
                    </select>
                </label>
                <label>
                    <p>Dispositivo</p>
                    <select
                     value={grupo}
                     onChange = {(e)=> setGrupo(e.target.value)}>
                        <option></option>
                        <option>Playstation</option>
                        <option>XBOX</option>
                        <option>Nintendo</option>
                        <option>PC</option>
                        <option>MacBook</option>
                        <option>Mobile</option>
                        <option>Android</option>
                        <option>Ios</option>
                        <option>Outro</option>
                    </select>
                </label>
                
                {!response.loading &&<button>Cadastrar Produto</button>}
                {response.loading &&(<button disabled> Aguarde</button>)}

                {response.formError&& <p className='error'>{response.formError}</p>}

            </form>
        </div>
    )
}
export default CriarProduto;