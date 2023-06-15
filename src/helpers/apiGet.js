export const apiGet=async()=>{
    const url='https://fakestoreapi.com/products'
    const respuestaApi=await fetch(url)
    const productos= await respuestaApi.json()
    
    const infoProductos=productos.map(producto=>{
    
        return ({
            id:producto.id,
            category:producto.category,
            imagen:producto.image,
            price:producto.price,
            title:producto.title,
            rating:producto.rating
            
        })
    })

    return infoProductos
    
}