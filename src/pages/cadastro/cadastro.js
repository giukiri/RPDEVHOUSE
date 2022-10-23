import { useState,useEffect } from 'react'
import { useAuth } from '../../hook/autentificacao';
import styles from '../cadastro/cadastro.module.css'
import '../CSS/index.css'
import { useForm } from 'react-hook-form';

const Cadastro = () => {
     const [razaoSocial,setRazaoSocial] =useState("");
     const [cnpj,setCnpj] = useState("");
     const [nomeFantasia,setNomeFantasia] = useState("");
     const [telefone,setTelefone] =useState("");
     const [celular,setCelular] =useState("");
     const [cep,setCep] =useState("");
     const [logradouro,setLogradouro] = useState("");
     const [numero, setNumero] = useState("");
     const [ bairro,setBairro] = useState("");
     const [cidade,setCidade]= useState("");
     const [estado,setEstado]= useState("");
     const [complemento,setComplemento] =useState("");
     const [latitude,setLatitude] =useState ("");
     const [longitude,setLongitude] = useState("");
     const [email,setEmail] = useState("");
     const [emailConf,setEmailConf] = useState("");
     const [senha,setSenha] = useState("");
     const [error,setError] =useState("");

     const {criarUsuario, error: authError,loading} = useAuth();


     const handleSubmit = (e) => {
        e.preventDefault()

        setError("");

        const empresa = {
            razaoSocial,
            cnpj,
            nomeFantasia,
            telefone,
            celular,
            cep,
            logradouro,
            numero,
            bairro,
            cidade,
            estado,
            complemento,
            latitude,
            longitude,
            email,
            senha
        }

        if(email !== emailConf){
            setError('Os emails precisam ser iguais')
        }

        const res =  criarUsuario(empresa);

        console.log(res)
        
        alert("empresa cadastrado com sucesso");
     };

     useEffect(()=>{
        if(authError){
            setError(authError);
        }
     },[authError]);

     const {register,setValue,setFocus} = useForm();

     const checkCEP = (e) =>{
        const cep = e.target.value.replace(/\D/g, '');
        fetch(`viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data =>{
            setValue('rua',data.logradouro);
            setValue('bairro',data.bairro);
            setValue('cidade',data.cidade);
            setValue('estado', data.estado);
            setFocus('numero');
        });
   

    return(
        <div className={styles.cadastro}>
            <h1>Cadastre sua Empresa</h1>
            <p>Cadastre informações verídicas sobre a sua empresa </p>

            <form onSubmit={handleSubmit}>
                <label>
                    <p>  Razão Social da sua Empresa </p>
                    <input 
                        required
                        placeholder="digite a Razão Social da sua  empresa"
                        type='text'  
                        value={razaoSocial}
                        onChange={(e)=>setRazaoSocial(e.target.value)}
                        />
                </label>

                <label>
                    <p>CNPJ</p>
                    <input 
                        required
                        placeholder="digite o CNPJ da sua  empresa"
                        type='name' 
                        value={cnpj}
                        onChange={(e)=>setCnpj(e.target.value)}
                        />
                </label>

                <label>
                    <p>Nome Fantasia</p>
                    <input 
                        required
                        placeholder="digite o Nome Fantasia da sua  empresa"
                        type='text' 
                        value={nomeFantasia}
                        onChange={(e)=>setNomeFantasia(e.target.value)}
                        />
                </label>
                <label>
                    <p>Telefone</p>
                    <input 
                        placeholder="digite o Telefone com DDD da sua empresa"
                        type='text'
                        value={telefone}
                        onChange={(e)=>setTelefone(e.target.value)}
                        />
                </label>
                <label>
                    <p>Celular</p>
                    <input 
                        required
                        placeholder="digite o Celular da sua  empresa"
                        type='text' 
                        value={celular}
                        onChange={(e)=>setCelular(e.target.value)}
                        />
                </label>
                <label>
                    <p>CEP</p>
                    <input
                    required
                    type="text" 
                    value={cep}
                    {...register("cep")}
                    onChange={(e)=>setCep(e.target.value)}
                    />
                </label>
                <label>
                    <p>Logradouto</p>
                    <input
                    required
                     type="text" 
                     value={logradouro}
                     {...register("logradouro")}
                     onChange={(e)=>setLogradouro(e.target.value)}
                     />
                </label>
                <label>
                    <p>Número</p>
                    <input
                    required
                    type="text"  
                    value={numero}
                    onChange={(e)=>setNumero(e.target.value)}
                    />
                </label>
                <label>
                    <p>Bairro</p>
                    <input
                    required
                    type="Bairro"  
                    value={bairro}
                        onChange={(e)=>setBairro(e.target.value)}
                    />
                </label>
                <label>
                    <p>cidade</p>
                    <input
                    required
                    type="Cidade" 
                    value={cidade}
                    onChange={(e)=>setCidade(e.target.value)}
                    />
                </label>
                <label>
                    <p>Estado</p>
                     <input
                    required
                    type="Estado" 
                    value={estado}
                    onChange={(e)=>setEstado(e.target.value)}
                    />
                </label>
                <label>
                    <p>Complemento</p>
                    <input
                    required
                    type="Complemento" 
                    value={complemento}
                        onChange={(e)=>setComplemento(e.target.value)}
                    />
                </label>
                <label>
                    <p>Geolocalização</p>
                    <input
                    required
                    placeholder='latitude'
                    type="text" 
                    value={latitude}
                        onChange={(e)=>setLatitude(e.target.value)}
                    />

                    <input
                    required
                    placeholder='longitude'
                    type="text" 
                    value={longitude}
                        onChange={(e)=>setLongitude(e.target.value)}
                    />
                </label>

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
                    <p>Confirme seu Email</p>
                    <input 
                        required
                        placeholder="Por favor, confirme seu email"
                        type='email' 
                        value={emailConf}
                        onChange={(e)=>setEmailConf(e.target.value)}
                       
                        />
                </label>
                <label>
                    <p>Digite uma senha</p>
                    <input
                        required 
                        type="password" 
                        value={senha}
                        minLength= {8}
                        onChange={(e)=>setSenha(e.target.value)}
                        />
                      
                </label>
               
                {!loading &&<button className='btn'>Cadastrar</button>}
                {loading &&(<button className='btn' disabled>Aguarde</button>)}

                {error&& <p className='error'>{error}</p>}

            </form>

        </div>
    )
}
}

export default Cadastro;