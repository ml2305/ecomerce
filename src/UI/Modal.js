import React from 'react';
import PropTypes from 'prop-types';

import { Modal, Button } from 'react-bootstrap';

const modal = (props) => (
    <Modal show={props.show}>
        <Modal.Header closeButton onClick={props.onOk}>
          <Modal.Title>Your Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onOk}>Close</Button>
        </Modal.Footer>
    </Modal>
);

modal.propTypes = {
  show : PropTypes.bool,
  onOk : PropTypes.func
}

export default modal;
