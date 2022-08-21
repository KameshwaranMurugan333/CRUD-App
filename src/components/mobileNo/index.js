import React from "react";
import { Form, InputGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const MobileNo = ({
    label = "",
    placeholder = "99xxxxx768",
    value = "",
    onChange = () => false
}) => {

    return <>
        <Form.Label>{label}</Form.Label>
        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
            <Form.Control
                type="number"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </InputGroup>
    </>
}

MobileNo.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}