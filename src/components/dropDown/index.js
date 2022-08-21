import React from "react";
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const DropDown = ({
    label = "",
    placeholder = "Select",
    options = [],
    value = "",
    onChange = () => false
}) => {
    return <>
        <Form.Label>{label}</Form.Label>
        <Form.Select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
        >
            {options.map((opt, key) => {
                return <option key={key}
                    value={opt.value}>{opt.label}
                </option>
            })}
        </Form.Select>
    </>
}

DropDown.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}