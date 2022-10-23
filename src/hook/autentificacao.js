
import {db} from '../firebase/configuracoes'
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut, updateProfile} from 'firebase/auth'
import { useState,useEffect } from 'react'


export const useAuth = () => {
    const [error,setError]= useState(null);
    const[loading,setLoading] = useState(null);

    const [cancelado,setCancelado] = useState(false);

    const auth = getAuth();

    function checkCancelado() {
        if(cancelado){
            return;
        }
    }

    const criarUsuario = async(data) => {
        checkCancelado();

        setLoading(true);

        try{
            const{usuario} = await createUserWithEmailAndPassword(
                auth, data.email , data.senha
            )

            await updateProfile(usuario,{
                nomeFantasia: data.nomeFantasia

            })

        } catch (error) {

            console.log(error.message);
            console.log(typeof error.message);

                let systemErrorMessage;

                if(error.message.includes("senha")){
                    systemErrorMessage = "A senha precisa conter 8 caracteres."
                } else if (error.message.includes("email-already")){
                    systemErrorMessage = 'email já cadastrado'
                } else {
                    systemErrorMessage = 'Ocorreu um erro inexperado, tente em outro momento!'
                }

                setError(systemErrorMessage)

        }

        setLoading(false)
    };

    const logout = () => {
        checkCancelado();
        signOut(auth);
    };

    const login = async(data) => {
        checkCancelado();
       
        setLoading(true);
        setError(false);
       

    try {

        await signInWithEmailAndPassword(auth, data.email, data.senha);
        setLoading(false)
        
    } catch (error) {
        
        let systemErrorMessage;

        if(error.message.includes("user-not-found")){
        systemErrorMessage= "O usário não esta registrado no sistema, por-favor cadastre sua empresa"
        
        } else if(error.message.includes("wrong-password")){
            systemErrorMessage = 'A senha esta incorreta'
        } else{
            systemErrorMessage = 'Ocorreu um erro'
        }

        setError(systemErrorMessage);
        setLoading(false)
    }
     

    }

    useEffect(()=>{
        return()=> setCancelado(true);
    }, []);

    return{
        auth,
        criarUsuario,
        error,
        loading,
        logout,
        login,
    };
}

