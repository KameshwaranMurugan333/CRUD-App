import React from "react";
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const CheckBoxes = ({
    label = "",
    buttons = [],
    value = [],
    onChange = () => false
}) => {

    return <>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{label}</Form.Label> <br />
            {buttons.map((btn, key) => {
                return <Form.Check key={key}
                    id={`id-check-${btn.value}`}
                    type={"checkbox"}
                    label={btn.label}
                    name={btn.label}
                    value={btn.value}
                    onChange={(e) => onChange(e.target.value)}
                    checked={value.indexOf(btn.value) > -1}
                    inline
                />
            })}
        </Form.Group>
    </>
}

CheckBoxes.propTypes = {
    label: PropTypes.string.isRequired,
    buttons: PropTypes.array.isRequired,
    value: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
}
