import styles from '../Login/login.module.css'
import '../CSS/index.css'
import { useState,useEffect } from 'react'
import { useAuth } from '../../hook/autentificacao';
import { Link } from 'react-router-dom';



const Login = () => {

    const [senha,setSenha] = useState('');
    const [email,setEmail] = useState('');
    const [error,setError] =useState("")

    const {login, error: authError,loading} = useAuth();

    const handleSubmit = (e) => {
       e.preventDefault()

       setError("");

       const empresa = {
           email,
           senha
       }

       const res =  login(empresa);

       console.log(res)
    };

    useEffect(()=>{
       if(authError){
           setError(authError);
       }
    },[authError])

    return(
        <div className={styles.login}>
            <h1>Efetue o Login para entrar no SGI</h1>
            <form onSubmit={handleSubmit}> 
                <label>
                    <p>Email</p>
                    <input 
                        required
                        placeholder="usuario@email.com"
                        type='email' 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                     
                        />
                </label>
                <label>
                    <p>Digite sua senha</p>
                    <input
                        required 
                        type="password" 
                        value={senha}
                        minLength= {8}
                        onChange={(e)=>setSenha(e.target.value)} 
                        />
                      
                </label>
               
                    <button type='submit'className='btn' >Entrar</button>
                    
                    <br/>
                    <label className="frase">Não tem uma conta?</label>
                    <br/>
                    <Link to = "/cadastro" > Registre-se </Link>

              </form>
        </div>
    )
}

export default Login