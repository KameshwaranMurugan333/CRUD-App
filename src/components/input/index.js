import React from "react";
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const Input = ({
    label = "",
    placeholder = "",
    value = "",
    onChange = () => false
}) => {

    return <>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </Form.Group>
    </>
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
