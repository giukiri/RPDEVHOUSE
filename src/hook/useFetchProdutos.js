import { useState,useEffect } from "react";
import { db } from "../firebase/configuracoes";
import { collection,query,orderBy,onSnapshot,where } from "firebase/firestore";

export const useFetchProdutos =  (docCollection,search = null , uid = null) =>{
    const [documents, setDocuments] =useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [cancelado,setCancelado] = useState(false);

    useEffect(()=>{
        async function loadData(){
            if(cancelado) return

            setLoading(true)

            const collectionRef = await collection(db,docCollection)

            try {

                let q;

                if(search){
                    q = await query(collectionRef,where('fornecedor','grupo',search),
                    orderBy('createdAt','desc')
                    );
                } else{
                    q = await query(collectionRef,orderBy('createdAt','desc'))
                }

                q = await query(collectionRef,orderBy("createdAt", 'desc'));

                await onSnapshot(q,(querySnapshot)=>{
                    setDocuments(
                        querySnapshot.docs.map((doc)=>({
                            id:doc.id,
                            ...doc.data(),

                        }))
                    )
                });

                setLoading(false)
            } catch (error) {
                console.log(error);
                setError(error.message)
                
                setLoading(false);
            }
        }
        loadData()
    },[docCollection,search,uid,cancelado]);

    useEffect(()=>{
        return () => setCancelado(true);
    },[])


    return {documents,loading,error};
}