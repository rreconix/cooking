import 'bootstrap/dist/css/bootstrap.min.css';
import { useRecipes } from "../contexts/RecipesProvider";
import DisplayRecipes from "./RecipeItem/DisplayRecipes"

export default function App() {
  const { recipes } = useRecipes()
  
  return(
    <DisplayRecipes recipes={recipes}/>
  )
  
}