import React from 'react'
import { Form } from 'react-bootstrap'
import { useRecipes } from '../contexts/RecipesProvider'

export default function SearchRecipe() {
    const { setRecipes, currentPageRecipes } = useRecipes()

    function searchRecipes(value){
        const filteredRecipes = currentPageRecipes.filter(recipe => recipe.name.toLowerCase().includes(value))
        setRecipes(filteredRecipes)
    }

    return (
        <div className="w-50">
            <Form>
                <Form.Group>
                    <Form.Control onChange={e => searchRecipes(e.target.value.toLowerCase())} className="field" placeholder='Search recipe' type="text" />
                </Form.Group>
            </Form>
        </div>
    )
}
