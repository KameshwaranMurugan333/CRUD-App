import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

export const Email = (props) => {
    return <>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control
                type="email"
                placeholder={props.placeholder}
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
            />
        </Form.Group>
    </>
}

Email.defaultProps = {
    placeholder: "name@example.com"
}

Email.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

