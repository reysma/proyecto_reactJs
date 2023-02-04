import { useEffect, useState }from 'react'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

const useFirebase = () => {
  const  [productos, setProductos] = useState([])

  useEffect() => {


  }, [productos]
}

 const getProducts = async () => {

    try {
        const productCollection = collection('db, productos')
        await (await getDocs (productCollection)).then((snapshot) => {
        if(snapshot.size === 0) {
            console.log('Base de Datos Esta Vacia')

        }
        setProductos(snapshot.docs.map((doc) => {
            return {
                id:doc.id,
                ...doc.data()
            }
        }))

        })
    } catch (error) {

    }




    }   
    
 

  return{productos, getProducts}

export default useFirebase