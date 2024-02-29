import { Modal } from 'react-bootstrap'
import React from 'react'

export default function OpenRecipeModal({ currentRecipe }) {
    function formatString(text){
        return (
            text.split("\n").filter(line => line.length > 0).map((line, index) => ( 
                <div className="my-2" key={index}>
                    • {line}
                </div>
            ))
        )
    }
    return (
        <>
            <Modal.Header closeButton>{currentRecipe.name}</Modal.Header>
            <div className='overflow-auto' style={{ maxHeight: "500px"}}>
                <Modal.Body>
                    Instructions:
                    <div className='my-2 mx-3'>
                        {formatString(currentRecipe.instructions.split("Notes:")[0])}
                    </div>
                </Modal.Body>
                {currentRecipe.notes.length > 1 ? 
                    <Modal.Body>
                        Notes:

                        <div className='my-2 mx-3'>
                            {formatString(currentRecipe.notes)}
                        </div>
                    </Modal.Body>
                    : ""
                }
                
                <Modal.Body>
                    Ingredients:
                    <div className='my-2 mx-3'>
                        {formatString(currentRecipe.ingredients.join(""))}
                    </div>
                </Modal.Body>
            </div>
            
        </>
    )
}
