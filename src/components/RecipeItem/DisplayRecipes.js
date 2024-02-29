import Dropdown from "../Dropdown";
import RecipeGrid from "./RecipeGrid";
import SearchRecipe from "../SearchRecipe";

export default function DisplayRecipes({ recipes }) {
	return (
		<div className="d-flex justify-content-center" style={{ padding: "10vh 0" }}>
			<div className="recipe-grid-container">
				<div className="d-grid justify-content-center gap-4 recipe-grid">
					<div className="d-flex flex-column" style={{ gridColumn: "1/-1" }}>
						<div className="d-flex justify-content-between">
							<SearchRecipe />
							<Dropdown />
						</div>
					</div>

					<RecipeGrid recipes={recipes} />
				</div>
			</div>
		</div>
	);
}
