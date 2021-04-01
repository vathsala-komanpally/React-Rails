import React, { Component } from 'react';
import Toast from 'react-bootstrap/Toast';

const PrintDeleteUserMessage = (props) => {

    return (
        <Toast>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Delete Item</strong>
                <small>2 seconds ago</small>
            </Toast.Header>
            <Toast.Body>{props.message}</Toast.Body>
        </Toast>
    )

}

export { PrintDeleteUserMessage };
