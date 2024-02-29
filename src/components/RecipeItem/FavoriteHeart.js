import React from "react";
import { useFavorites } from "../../contexts/FavoriteProvider";
import { useRecipes } from "../../contexts/RecipesProvider";

export default function FavoriteHeart() {
	const { addFavorite, removeFavorite } = useFavorites();
	const { original } = useRecipes();

	function toggleFavorite(box, recipe, index) {
		box.classList.contains("favorited")
			? removeFavorite(index)
			: addFavorite(index);

		box.classList.toggle("favorited");
		recipe.favorited = !recipe.favorited;
	}

	function handleSubmit(e) {
		e.stopPropagation();
		const box = e.target.parentNode.parentNode.parentNode.parentNode;
		const name = box.children[1].textContent;
		const recipe = original.find((recipe) => recipe.name === name);
		const index = original.indexOf(recipe);

		toggleFavorite(box, recipe, index);
	}

	return (
		<div style={{ position: "absolute", right: "0" }}>
			<svg className="heart" viewBox="0 0 24 24" aria-hidden="true">
				<path
					onClick={(e) => handleSubmit(e)}
					d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
				></path>
			</svg>
		</div>
	);
}
