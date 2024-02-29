import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import RecipeInput from "./createRecipeInput";
import { useYourRecipes } from "../../contexts/YourRecipeProvider";

export default function CreateRecipeModal({ closeModal }) {
	const [instructionNumber, setInstructionNumber] = useState(1);
	const [ingredientNumber, setIngredientNumber] = useState(1);
	const { addRecipe } = useYourRecipes();

	function createRecipe({ name, instructions, ingredients }) {
		instructions =
			instructions.length > 1
				? instructions.join("\n")
				: instructions.toString() + "\n";
		ingredients = ingredients.map((text) => (text += "\n"));

		const obj = {
			name,
			instructions,
			ingredients,
			favorited: false,
			yourRecipe: true,
			notes: "",
		};
		addRecipe(obj);
	}

	function submitForm(e) {
		e.preventDefault();

		const values = [...document.querySelectorAll("#createForm input")];
		const name = values[0].value;
		const instructions = values
			.filter((input) => input.classList.contains("instruction"))
			.map((r) => r.value);
		const ingredients = values
			.filter((input) => input.classList.contains("ingredient"))
			.map((r) => r.value);

		createRecipe({
			name: name,
			instructions: instructions,
			ingredients: ingredients,
		});

		closeModal();
	}

	return (
		<>
			<div style={{ overflow: "auto", height: "500px" }}>
				<Modal.Header closeButton>Create a recipe</Modal.Header>
				<Form onSubmit={(e) => submitForm(e)} id="createForm" className="mb-1">
					<Modal.Body>
						<Form.Control placeholder="Name"></Form.Control>
					</Modal.Body>

					<Modal.Header>Instructions</Modal.Header>
					<Modal.Body>
						<RecipeInput amount={instructionNumber} type="Instruction" />
						<Button
							variant="secondary"
							onClick={() => setInstructionNumber(instructionNumber + 1)}
							className="w-100 mt-3"
						>
							Add Instruction
						</Button>
					</Modal.Body>

					<Modal.Header>Ingredients</Modal.Header>
					<Modal.Body>
						<RecipeInput amount={ingredientNumber} type="Ingredient" />
						<Button
							variant="secondary"
							onClick={() => setIngredientNumber(ingredientNumber + 1)}
							className="w-100 mt-3"
						>
							Add Ingredient
						</Button>
					</Modal.Body>

					<div className="px-3 d-flex justify-content-end">
						<Button type="submit" className="px-5" variant="success">
							Create
						</Button>
					</div>
				</Form>
			</div>
		</>
	);
}
