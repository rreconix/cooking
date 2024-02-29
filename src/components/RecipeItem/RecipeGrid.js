import React from "react";
import { useState } from "react";
import { Image, Modal } from "react-bootstrap";
import FavoriteHeart from "./FavoriteHeart";
import OpenRecipeModal from "./OpenRecipeModal";
import AddRecipeButton from "../CreateRecipe/AddRecipeButton";

export default function RecipeGrid({ recipes }) {
	const [currentRecipe, setCurrentRecipe] = useState(0);
	const [isModalOpen, setModalOpen] = useState(false);

	function closeModal() {
		setModalOpen(false);
	}
	return (
		<>
			{recipes.map((recipe, index) => {
				if (recipe.name === "createRecipeButton") {
					return (
						<div key={index}>
							<AddRecipeButton />
						</div>
					);
				} else {
					return (
						<div
							key={index}
							style={{
								border: "1px solid rgba(0, 0, 0, .15)",
								borderRadius: "5px",
								position: "relative",
								cursor: "pointer",
							}}
							className={
								"d-flex flex-column recipe-item" +
								(recipe.favorited === true ? " favorited" : "")
							}
							onClick={() => {
								setCurrentRecipe(recipes[index]);
								setModalOpen(true);
							}}
						>
							<div style={{ position: "relative" }}>
								<FavoriteHeart />

								<Image
									title={recipe.name}
									style={{
										width: "100%",
										aspectRatio: "1",
										objectFit: "cover",
									}}
									src={
										"https://images.squarespace-cdn.com/content/v1/56031d09e4b0dc68f6197723/1469030770980-URDU63CK3Q4RODZYH0S1/Grey+Box.jpg"
									}
								></Image>
							</div>
							<div
								className="p-2 recipe-name d-flex flex-grow-1"
								style={{
									wordBreak: "break-word",
									fontSize: "clamp(0.5rem, calc(0.11rem + 1.95vw), 1.1rem)",
								}}
							>
								{recipe.name}
							</div>
						</div>
					);
				}
			})}

			<Modal show={isModalOpen} onHide={closeModal}>
				<OpenRecipeModal currentRecipe={currentRecipe} />
			</Modal>
		</>
	);
}
