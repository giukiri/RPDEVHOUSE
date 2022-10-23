import {BrowserRouter, Route , Routes , Navigate} from "react-router-dom"
import Cadastro from "../pages/cadastro/cadastro";
import HomePage from "../pages/Home";
import Login from "../pages/Login/login";
import { AuthProvider } from "../context/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useState,useEffect } from "react";
import { useAuth } from "../hook/autentificacao";
import CriarProduto from "../pages/Produto/criarProduto";
import ListaProdutos from "../pages/listaProdutos/listaProdutos";
import Search from "../pages/search/search";




const RotasApp = () => {

   

    const [usuario,setUsuario] = useState(undefined)
    const {auth} = useAuth();

    const loadingUsuario = usuario === undefined;



     useEffect(()=>{

        onAuthStateChanged(auth,(usuario)=>{
            setUsuario(usuario)
        })
     })

    if(loadingUsuario){

        return <p>CARREGANDO...</p>
    }

    return(

        <BrowserRouter>
            <AuthProvider value={{usuario}}>
                <Routes>
                    <Route path="/" element={!usuario ? <Login/> : <Navigate to='/Home'/>}/>
                    <Route path="/Home" element={<HomePage/>}/>
                    <Route path="/search" element={Search} />
                    <Route path="/cadastro" element={<Cadastro/>}/>
                    <Route path="/criarProduto" element={<CriarProduto/>}/>
                    <Route path="/listaProdutos" element={<ListaProdutos/>}/>
                    </Routes>
            </AuthProvider>    
        </BrowserRouter>
   

    )
};

export default RotasApp;