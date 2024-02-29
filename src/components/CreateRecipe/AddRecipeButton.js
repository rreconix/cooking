import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import CreateRecipeModal from './CreateRecipeModal'

export default function AddRecipeButton() {
    const [isModalOpen, setModalOpen] = useState(false)

    function closeModal(){
        setModalOpen(false)
    }

    return (
        <>
            <div onClick={() => setModalOpen(true)} style={{ cursor: "pointer", background: "#e0e0e0", borderRadius: "5px", minHeight:"240px", height: "100%" }}>
                <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                    <svg width="120" fill="#f5f5f5" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" fill="white"></path>
                    </svg>
                </div>
            </div>

            <Modal show={isModalOpen} onHide={closeModal}>
                <CreateRecipeModal closeModal={closeModal} />
            </Modal>
        </>
    )
}
