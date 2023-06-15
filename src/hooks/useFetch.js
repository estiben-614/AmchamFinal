import React, { useEffect, useState } from 'react'
import { apiGet } from '../helpers/apiGet'

export const useFetch = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const getProductos=async()=>{
        const respApi=await apiGet()
        setProductos(respApi)
        //Una vez se obtengan todos los productos se cambiara el estado del loading a falso
        setLoading(false)
    }

    useEffect(() => {
      getProductos()
    }, [])
    
  return {
    productos:productos,
    loading
  }
}
