import React from 'react';
import { TextField } from '@mui/material/';

function Elements(props) {
    function formElement(elementObj) {
        switch (elementObj.type) {
            case "email":
            case "password":
            // case "date":
            case "text":
                return (
                    <TextField
                        autoComplete="given-name"
                        name={elementObj.id}
                        required={elementObj.required}
                        fullWidth
                        id={elementObj.id}
                        label={elementObj.label}
                        autoFocus
                        value={elementObj.value}
                        onChange={(e) => elementObj.onchange(e.target.value, elementObj.id)}
                        type={elementObj.type}
                    />
                )
        }
    }

    return (
        <>
            {props.formField.map((field) => {
                let v = field.visible !== undefined ? field.visible : true
                if (v) return formElement(field)
            })}
        </>
    )
}

export default Elements;