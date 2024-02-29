import React, { useContext, useState } from "react"
import Data from "../Recipes.json"
import { useFavorites } from "./FavoriteProvider"

const RecipesContext = React.createContext()
const amountOfRecipes = 100


export function useRecipes() {
  return useContext(RecipesContext)
}

export function RecipesProvider({ children }) {
  const { favorited } = useFavorites();
  const parsedData = JSON.parse(localStorage.getItem("cooking-your-recipes"));
  const yourRecipes = parsedData === null ? [] : parsedData
  
  const data = (
    Object.values(Data).slice(0, amountOfRecipes).concat(yourRecipes).map((object, index) => {
      return {
        ...object,
        favorited: (favorited.includes(index) ? true : false), 
        yourRecipe: (object.yourRecipe ? true : false)
      };//adds key with value onto it
    })
  )
  
  const [original] = useState(data)
  const [recipes, setRecipes] = useState(data)
  

  const [currentPageRecipes, setCurrentPageRecipes] = useState(
    data.filter(recipe => !recipe.yourRecipe)//defaults to the recipes on the public page since thats the page you load in on
  )

  const value = {
    recipes,
    setRecipes,
    original,
    currentPageRecipes,
    setCurrentPageRecipes
  }

  return (
    <RecipesContext.Provider value={value}>
      {children}
    </RecipesContext.Provider>
  )
}