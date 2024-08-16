import { createContext, useState } from "react"

export const FavoritesContext = createContext(null) 

export const FavoritesProvider = ({children}) =>{

    const [favorites, setfavorites] = useState([])

    const favOperation = (product) => {
        let favControl = favorites.find(f => f.id == product.id)

        if(favControl){
            let filteredFavorites = favorites.filter(f => f.id != product.id)
            setfavorites(filteredFavorites)
        }
        else {
            setfavorites([...favorites,product])
        }
    }

    const clearFavorites = () =>{
        setfavorites([])
    }    

    return <FavoritesContext.Provider value={{favOperation,clearFavorites,favorites}}>{children}</FavoritesContext.Provider>
}