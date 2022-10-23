import { useEffect,useState, useReducer } from "react";
import {db} from '../firebase/configuracoes';
import {collection,addDoc,Timestamp} from 'firebase/firestore';
import React from "react";

const inicialState = {
    loading:null,
    error: null
}

const insertReducer = (state,action) => {
    switch(action.type){
        case 'LOADING': return {loading: true, error: null}
        case 'INSERTED_DOC':return {loading: false, error: null}
        case "ERROR" : return {loading: false, error: action.payload}
        default:
            return state;
    }

}

export const UseinsertDocument = (docCollection) => {
    const [response,dispatch] =useReducer(insertReducer, inicialState)
    const [cancelado,setCancelado] = useState(false);

    const checkCancelBeforeDispatch = (action) => {
        if(!cancelado){
            dispatch(action)
        }
    }

    const insertDocument = async(document) => {
        checkCancelBeforeDispatch({
            type: 'LOADING',
        })
        try {
            const newDocument = {...document, createdAt: Timestamp.now()}

            const insertedDocument = await addDoc(
                collection(db, docCollection),
                newDocument
            );
            checkCancelBeforeDispatch({
                type: 'INSERTED_DOC',
                payload:insertedDocument
            })
        } catch (error) {
            checkCancelBeforeDispatch({
                type: 'ERROR',
                payload:error.message,
            
            })
    }
}

useEffect(()=>{
    return () => setCancelado(true)
},[]);

return {insertDocument,response};
}