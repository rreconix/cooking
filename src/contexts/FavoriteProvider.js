import React, { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
const FavoriteContext = React.createContext()

export function useFavorites(){
    return useContext(FavoriteContext)
}

export function FavoriteProvider({ children }) {
    const [favorited, setFavorited] = useLocalStorage("favorited", [])

    function addFavorite(index){
        setFavorited(prevFavorited => {
            return [...prevFavorited, index]
        })
    }
    
    function removeFavorite(index){
        setFavorited(
            favorited.filter(num => num !== index)
        )
    }

    const value = {
        favorited,
        addFavorite,
        removeFavorite
    }   

    return (
        <FavoriteContext.Provider value={value}>
            {children}
        </FavoriteContext.Provider>
    )
}
