import React from 'react'
import { Form } from 'react-bootstrap'
import { useRecipes } from '../contexts/RecipesProvider'
import { useYourRecipes } from '../contexts/YourRecipeProvider'

export default function Dropdown() {
    const { setRecipes, original, setCurrentPageRecipes } =  useRecipes()
    const { yourRecipes } = useYourRecipes();

    function getFilteredRecipes(value){
        switch(value){
            case "0":
                return original.filter(recipe => !recipe.yourRecipe);
            case "1":
                return [...yourRecipes, {name: "createRecipeButton"}];          
            case "2":
                return original.filter(recipe => recipe.favorited === true)
            default:
                return []
        }
    }

    function handleSubmit(value){
        const recipes = getFilteredRecipes(value)

        setCurrentPageRecipes(recipes)
        setRecipes(recipes)
    }

    return (
        <div className='w-50 d-flex justify-content-end'>
            <Form.Select onChange={e => handleSubmit(e.target.value)} className="field" aria-label="Menu">
                <option value="0">Public recipes</option>
                <option value="1">Your recipes</option>
                <option value="2">Favorite recipes</option>
            </Form.Select>
        </div>
        
    )
}
