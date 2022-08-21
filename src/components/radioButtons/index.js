import React from "react";
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const RadioButtons = ({
    label = "",
    buttons = [],
    value = "",
    onChange = () => false
}) => {

    return <>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{label}</Form.Label> <br />
            {buttons.map((btn, key) => {
                return <Form.Check
                    id={`id-radio-${btn.value}`}
                    key={key}
                    type={"radio"}
                    checked={value === btn.value}
                    label={btn.label}
                    name={btn.label}
                    value={btn.value}
                    onChange={(e) => onChange(e.target.value)}
                    inline
                />
            })}
        </Form.Group>
    </>
}

RadioButtons.propTypes = {
    label: PropTypes.string.isRequired,
    buttons: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
