import React from 'react'
import { Form } from "react-bootstrap"


export default function RecipeInput({ amount, type }) {
    let inputs = [];

    for(let i = 0; i < amount; i++){
        inputs.push(
            <Form.Control key={i} className={`mb-2 ${type.toLowerCase()}`} required = {i === 0 ? true: false} placeholder={`${type}:`}></Form.Control>
        )
    }
    return inputs
}
