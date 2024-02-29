import React, { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { useRecipes } from './RecipesProvider'

const YourRecipeContext = React.createContext()

export function useYourRecipes(){
    return useContext(YourRecipeContext)
}

export function YourRecipeProvider({ children }) {
    const [yourRecipes, setYourRecipes] = useLocalStorage("your-recipes", []);
    const { setRecipes } = useRecipes()

    function addRecipe(obj){
        setYourRecipes(prevRecipes => {
            return [...prevRecipes, obj]
        })

        
        const recipes = [...yourRecipes, obj]
        const filteredRecipes = recipes.filter(r => r.yourRecipe).concat([{name: "createRecipeButton"}])
            
        setRecipes(filteredRecipes)//renders RecipesProvider
        
    }

    const value = {
        yourRecipes,
        addRecipe
    }   

    return (
        <YourRecipeContext.Provider value={value}>
            {children}
        </YourRecipeContext.Provider>
    )
}
